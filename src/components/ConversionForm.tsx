
import { useState, useEffect } from "react";
import { ArrowLeftRight, Clipboard, ClipboardCheck, Download, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import UnitSelector from "./UnitSelector";
import {
  conversionCategories,
  ConversionCategory,
  ConversionUnit,
  convert,
  formatNumber,
  copyToClipboard,
  createCSV,
  downloadCSV,
} from "@/utils/conversionUtils";

export default function ConversionForm() {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState<ConversionCategory>(conversionCategories[0]);
  const [inputValue, setInputValue] = useState<string>("1");
  const [fromUnit, setFromUnit] = useState<ConversionUnit>(selectedCategory.units[0]);
  const [toUnit, setToUnit] = useState<ConversionUnit>(selectedCategory.units[1]);
  const [convertedValue, setConvertedValue] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);
  const [additionalConversions, setAdditionalConversions] = useState<ConversionUnit[]>([]);
  const [activeTab, setActiveTab] = useState<string>("single");
  const [batchInput, setBatchInput] = useState<string>("1\n2\n3\n4\n5");
  const [batchResults, setBatchResults] = useState<{input: number, output: number}[]>([]);

  // Handle category change
  const handleCategoryChange = (categoryId: string) => {
    const category = conversionCategories.find((c) => c.id === categoryId);
    if (!category) return;
    
    setSelectedCategory(category);
    setFromUnit(category.units[0]);
    setToUnit(category.units[1]);
    setAdditionalConversions([]);
  };

  // Handle from unit change
  const handleFromUnitChange = (unit: ConversionUnit) => {
    setFromUnit(unit);
  };

  // Handle to unit change
  const handleToUnitChange = (unit: ConversionUnit) => {
    setToUnit(unit);
  };

  // Handle reverse units
  const handleReverseUnits = () => {
    const temp = fromUnit;
    setFromUnit(toUnit);
    setToUnit(temp);
  };

  // Handle adding additional conversion
  const handleAddConversion = () => {
    // Find a unit that's not already in the list
    const availableUnits = selectedCategory.units.filter(
      (unit) => unit.id !== fromUnit.id && 
                unit.id !== toUnit.id && 
                !additionalConversions.some((u) => u.id === unit.id)
    );
    
    if (availableUnits.length > 0) {
      setAdditionalConversions([...additionalConversions, availableUnits[0]]);
    } else {
      toast({
        title: "No more units available",
        description: "You've added all available units for this category.",
        variant: "destructive",
      });
    }
  };

  // Handle removing an additional conversion
  const handleRemoveConversion = (index: number) => {
    const newConversions = [...additionalConversions];
    newConversions.splice(index, 1);
    setAdditionalConversions(newConversions);
  };

  // Handle unit change for additional conversions
  const handleAdditionalUnitChange = (unit: ConversionUnit, index: number) => {
    const newConversions = [...additionalConversions];
    newConversions[index] = unit;
    setAdditionalConversions(newConversions);
  };

  // Handle copying to clipboard
  const handleCopy = async () => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) return;
    
    const success = await copyToClipboard(value, fromUnit, { unit: toUnit, value: convertedValue });
    
    if (success) {
      setCopied(true);
      toast({
        title: "Copied to clipboard",
        description: `${formatNumber(value)} ${fromUnit.symbol} = ${formatNumber(convertedValue)} ${toUnit.symbol}`,
      });
      
      setTimeout(() => setCopied(false), 2000);
    } else {
      toast({
        title: "Failed to copy",
        description: "Could not copy to clipboard. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Handle batch conversion
  const handleBatchConvert = () => {
    const lines = batchInput.split('\n').filter(line => line.trim() !== '');
    const results = lines.map(line => {
      const inputVal = parseFloat(line.trim());
      if (isNaN(inputVal)) return { input: 0, output: 0 };
      
      const outputVal = convert(inputVal, fromUnit, toUnit);
      return { input: inputVal, output: outputVal };
    });
    
    setBatchResults(results);
  };

  // Handle exporting results to CSV
  const handleExportCSV = () => {
    const value = parseFloat(inputValue);
    if (isNaN(value)) return;
    
    const results = [
      { unit: toUnit, value: convertedValue },
      ...additionalConversions.map((unit) => ({
        unit,
        value: convert(value, fromUnit, unit),
      })),
    ];
    
    const csv = createCSV(value, fromUnit, results);
    downloadCSV(csv);
    
    toast({
      title: "Export successful",
      description: "Results have been exported to CSV.",
    });
  };

  // Handle batch export
  const handleBatchExport = () => {
    if (batchResults.length === 0) {
      toast({
        title: "No results to export",
        description: "Convert some values first before exporting.",
        variant: "destructive",
      });
      return;
    }
    
    let csv = `Original Unit,${fromUnit.name} (${fromUnit.symbol})\n`;
    csv += `Target Unit,${toUnit.name} (${toUnit.symbol})\n\n`;
    csv += `Input (${fromUnit.symbol}),Output (${toUnit.symbol})\n`;
    
    batchResults.forEach((result) => {
      csv += `${formatNumber(result.input)},${formatNumber(result.output)}\n`;
    });
    
    downloadCSV(csv, "converta-batch-results.csv");
    
    toast({
      title: "Batch export successful",
      description: "Batch results have been exported to CSV.",
    });
  };

  // Calculate conversion whenever relevant inputs change
  useEffect(() => {
    const value = parseFloat(inputValue);
    if (!isNaN(value)) {
      const result = convert(value, fromUnit, toUnit);
      setConvertedValue(result);

      // Also update batch results if in batch mode
      if (activeTab === "batch") {
        handleBatchConvert();
      }
    }
  }, [inputValue, fromUnit, toUnit]);

  // Recalculate batch results when switching to batch tab
  useEffect(() => {
    if (activeTab === "batch") {
      handleBatchConvert();
    }
  }, [activeTab]);

  return (
    <div className="w-full max-w-3xl mx-auto soft-shadow">
      <Tabs defaultValue="single" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="single">Single Conversion</TabsTrigger>
          <TabsTrigger value="batch">Batch Conversion</TabsTrigger>
        </TabsList>
        
        <TabsContent value="single" className="animate-fadeIn space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="category">Category</Label>
              <Select 
                value={selectedCategory.id} 
                onValueChange={handleCategoryChange}
              >
                <SelectTrigger id="category" className="h-12 bg-card shadow-subtle">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {conversionCategories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-2 items-end">
              <div className="space-y-2">
                <Label htmlFor="fromUnit">From</Label>
                <UnitSelector
                  units={selectedCategory.units}
                  selectedUnit={fromUnit}
                  onChange={handleFromUnitChange}
                  placeholder="From unit"
                />
              </div>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-12 w-12 rounded-full hover:bg-primary/10"
                onClick={handleReverseUnits}
              >
                <ArrowLeftRight className="h-5 w-5" />
              </Button>
              
              <div className="space-y-2">
                <Label htmlFor="toUnit">To</Label>
                <UnitSelector
                  units={selectedCategory.units}
                  selectedUnit={toUnit}
                  onChange={handleToUnitChange}
                  placeholder="To unit"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="inputValue">Value</Label>
              <Input
                id="inputValue"
                type="number"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="text-lg h-12 bg-card shadow-subtle"
                placeholder="Enter value to convert"
              />
            </div>
            
            <div className="p-4 bg-primary text-primary-foreground rounded-lg space-y-2 animate-slideUp">
              <div className="flex justify-between">
                <div className="text-sm font-medium opacity-80">Result</div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-8 px-2 -mr-1 hover:bg-primary-foreground/10"
                  onClick={handleCopy}
                >
                  {copied ? 
                    <ClipboardCheck className="h-4 w-4" /> : 
                    <Clipboard className="h-4 w-4" />
                  }
                </Button>
              </div>
              <div className="text-2xl font-bold">
                {isNaN(parseFloat(inputValue)) 
                  ? "—" 
                  : `${formatNumber(convertedValue)} ${toUnit.symbol}`
                }
              </div>
              <div className="text-sm opacity-80">
                {isNaN(parseFloat(inputValue)) 
                  ? "Enter a valid number" 
                  : `${formatNumber(parseFloat(inputValue))} ${fromUnit.symbol} = ${formatNumber(convertedValue)} ${toUnit.symbol}`
                }
              </div>
            </div>
            
            {additionalConversions.length > 0 && (
              <div className="space-y-4 mt-4 pt-4 border-t animate-slideUp">
                <div className="text-sm font-medium">Additional Conversions</div>
                {additionalConversions.map((unit, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 p-3 rounded-lg bg-card shadow-subtle"
                  >
                    <div className="flex-1">
                      <UnitSelector
                        units={selectedCategory.units.filter(
                          (u) => 
                            u.id !== fromUnit.id && 
                            u.id !== toUnit.id && 
                            !additionalConversions.some((au, i) => i !== index && au.id === u.id)
                        )}
                        selectedUnit={unit}
                        onChange={(u) => handleAdditionalUnitChange(u, index)}
                        placeholder="Select unit"
                      />
                    </div>
                    <div className="flex-1 font-medium">
                      {isNaN(parseFloat(inputValue)) 
                        ? "—" 
                        : `${formatNumber(convert(parseFloat(inputValue), fromUnit, unit))} ${unit.symbol}`
                      }
                    </div>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-8 w-8 shrink-0"
                      onClick={() => handleRemoveConversion(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
            
            <div className="flex justify-between pt-4">
              <Button 
                variant="outline" 
                onClick={handleAddConversion}
                className="space-x-1"
                disabled={additionalConversions.length >= selectedCategory.units.length - 2}
              >
                <Plus className="h-4 w-4" />
                <span>Add Conversion</span>
              </Button>
              
              <Button 
                variant="outline"
                onClick={handleExportCSV}
                className="space-x-1"
                disabled={isNaN(parseFloat(inputValue))}
              >
                <Download className="h-4 w-4" />
                <span>Export CSV</span>
              </Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="batch" className="animate-fadeIn space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-2 items-end">
            <div className="space-y-2">
              <Label htmlFor="batchFromUnit">From</Label>
              <UnitSelector
                units={selectedCategory.units}
                selectedUnit={fromUnit}
                onChange={handleFromUnitChange}
                placeholder="From unit"
              />
            </div>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-12 w-12 rounded-full hover:bg-primary/10"
              onClick={handleReverseUnits}
            >
              <ArrowLeftRight className="h-5 w-5" />
            </Button>
            
            <div className="space-y-2">
              <Label htmlFor="batchToUnit">To</Label>
              <UnitSelector
                units={selectedCategory.units}
                selectedUnit={toUnit}
                onChange={handleToUnitChange}
                placeholder="To unit"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="batchValues">Values (one per line)</Label>
            <textarea
              id="batchValues"
              value={batchInput}
              onChange={(e) => setBatchInput(e.target.value)}
              className="w-full h-40 p-3 rounded-lg bg-card border shadow-subtle resize-y"
              placeholder="Enter values, one per line"
            />
          </div>
          
          <div className="flex space-x-3">
            <Button onClick={handleBatchConvert} className="flex-1">
              Convert
            </Button>
            <Button 
              variant="outline" 
              onClick={handleBatchExport}
              className="space-x-1"
              disabled={batchResults.length === 0}
            >
              <Download className="h-4 w-4" />
              <span>Export CSV</span>
            </Button>
          </div>
          
          {batchResults.length > 0 && (
            <div className="border rounded-lg overflow-hidden animate-slideUp">
              <div className="bg-muted p-3 flex font-medium">
                <div className="flex-1">Input ({fromUnit.symbol})</div>
                <div className="flex-1">Output ({toUnit.symbol})</div>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {batchResults.map((result, index) => (
                  <div 
                    key={index} 
                    className="flex p-3 border-t"
                  >
                    <div className="flex-1">{formatNumber(result.input)}</div>
                    <div className="flex-1">{formatNumber(result.output)}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
