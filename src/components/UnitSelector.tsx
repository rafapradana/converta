
import { useState, useEffect, useRef } from "react";
import { Search, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ConversionUnit } from "@/utils/conversionUtils";

interface UnitSelectorProps {
  units: ConversionUnit[];
  selectedUnit: ConversionUnit;
  onChange: (unit: ConversionUnit) => void;
  placeholder?: string;
}

export default function UnitSelector({
  units,
  selectedUnit,
  onChange,
  placeholder = "Select unit",
}: UnitSelectorProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredUnits = units.filter((unit) =>
    unit.name.toLowerCase().includes(search.toLowerCase()) ||
    unit.symbol.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (open && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
    if (!open) {
      setSearch("");
    }
  }, [open]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between h-12 px-4 bg-card shadow-subtle"
        >
          <div className="flex items-center">
            <span className="font-medium">{selectedUnit.name}</span>
            <span className="ml-2 text-xs text-muted-foreground">({selectedUnit.symbol})</span>
          </div>
          <div className="opacity-50">▼</div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 shadow-elevated" align="start">
        <div className="flex items-center border-b px-3 py-2">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <Input
            ref={inputRef}
            placeholder="Search units..."
            className="border-0 bg-transparent p-1 shadow-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <ScrollArea className="h-72">
          {filteredUnits.length > 0 ? (
            <div className="grid gap-1 p-2">
              {filteredUnits.map((unit) => (
                <Button
                  key={unit.id}
                  variant="ghost"
                  className="w-full justify-start font-normal"
                  onClick={() => {
                    onChange(unit);
                    setOpen(false);
                  }}
                >
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center">
                      {unit.name}
                      <span className="ml-2 text-xs text-muted-foreground">
                        ({unit.symbol})
                      </span>
                    </div>
                    {unit.id === selectedUnit.id && (
                      <Check className="h-4 w-4" />
                    )}
                  </div>
                </Button>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-sm text-muted-foreground">
              No units found.
            </div>
          )}
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
}
