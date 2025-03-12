
// Define conversion categories and units
export interface ConversionUnit {
  id: string;
  name: string;
  symbol: string;
  toBase: (value: number) => number;
  fromBase: (value: number) => number;
}

export interface ConversionCategory {
  id: string;
  name: string;
  units: ConversionUnit[];
  baseUnit: string;
}

// Length units (base: meter)
const lengthUnits: ConversionUnit[] = [
  {
    id: "mm",
    name: "Millimeter",
    symbol: "mm",
    toBase: (value) => value / 1000,
    fromBase: (value) => value * 1000,
  },
  {
    id: "cm",
    name: "Centimeter",
    symbol: "cm",
    toBase: (value) => value / 100,
    fromBase: (value) => value * 100,
  },
  {
    id: "m",
    name: "Meter",
    symbol: "m",
    toBase: (value) => value,
    fromBase: (value) => value,
  },
  {
    id: "km",
    name: "Kilometer",
    symbol: "km",
    toBase: (value) => value * 1000,
    fromBase: (value) => value / 1000,
  },
  {
    id: "in",
    name: "Inch",
    symbol: "in",
    toBase: (value) => value * 0.0254,
    fromBase: (value) => value / 0.0254,
  },
  {
    id: "ft",
    name: "Foot",
    symbol: "ft",
    toBase: (value) => value * 0.3048,
    fromBase: (value) => value / 0.3048,
  },
  {
    id: "yd",
    name: "Yard",
    symbol: "yd",
    toBase: (value) => value * 0.9144,
    fromBase: (value) => value / 0.9144,
  },
  {
    id: "mi",
    name: "Mile",
    symbol: "mi",
    toBase: (value) => value * 1609.344,
    fromBase: (value) => value / 1609.344,
  },
  {
    id: "nmi",
    name: "Nautical Mile",
    symbol: "nmi",
    toBase: (value) => value * 1852,
    fromBase: (value) => value / 1852,
  },
  {
    id: "ly",
    name: "Light Year",
    symbol: "ly",
    toBase: (value) => value * 9.461e15,
    fromBase: (value) => value / 9.461e15,
  },
];

// Weight units (base: kilogram)
const weightUnits: ConversionUnit[] = [
  {
    id: "mg",
    name: "Milligram",
    symbol: "mg",
    toBase: (value) => value / 1e6,
    fromBase: (value) => value * 1e6,
  },
  {
    id: "g",
    name: "Gram",
    symbol: "g",
    toBase: (value) => value / 1000,
    fromBase: (value) => value * 1000,
  },
  {
    id: "kg",
    name: "Kilogram",
    symbol: "kg",
    toBase: (value) => value,
    fromBase: (value) => value,
  },
  {
    id: "t",
    name: "Metric Ton",
    symbol: "t",
    toBase: (value) => value * 1000,
    fromBase: (value) => value / 1000,
  },
  {
    id: "oz",
    name: "Ounce",
    symbol: "oz",
    toBase: (value) => value * 0.0283495,
    fromBase: (value) => value / 0.0283495,
  },
  {
    id: "lb",
    name: "Pound",
    symbol: "lb",
    toBase: (value) => value * 0.453592,
    fromBase: (value) => value / 0.453592,
  },
  {
    id: "st",
    name: "Stone",
    symbol: "st",
    toBase: (value) => value * 6.35029,
    fromBase: (value) => value / 6.35029,
  },
];

// Temperature units (special case with different conversion formulas)
const temperatureUnits: ConversionUnit[] = [
  {
    id: "celsius",
    name: "Celsius",
    symbol: "°C",
    toBase: (value) => value,
    fromBase: (value) => value,
  },
  {
    id: "fahrenheit",
    name: "Fahrenheit",
    symbol: "°F",
    toBase: (value) => ((value - 32) * 5) / 9,
    fromBase: (value) => (value * 9) / 5 + 32,
  },
  {
    id: "kelvin",
    name: "Kelvin",
    symbol: "K",
    toBase: (value) => value - 273.15,
    fromBase: (value) => value + 273.15,
  },
];

// Speed units (base: meters per second)
const speedUnits: ConversionUnit[] = [
  {
    id: "mps",
    name: "Meters per second",
    symbol: "m/s",
    toBase: (value) => value,
    fromBase: (value) => value,
  },
  {
    id: "kph",
    name: "Kilometers per hour",
    symbol: "km/h",
    toBase: (value) => value / 3.6,
    fromBase: (value) => value * 3.6,
  },
  {
    id: "mph",
    name: "Miles per hour",
    symbol: "mph",
    toBase: (value) => value * 0.44704,
    fromBase: (value) => value / 0.44704,
  },
  {
    id: "knot",
    name: "Knot",
    symbol: "kn",
    toBase: (value) => value * 0.514444,
    fromBase: (value) => value / 0.514444,
  },
];

// Data storage units (base: byte)
const dataUnits: ConversionUnit[] = [
  {
    id: "bit",
    name: "Bit",
    symbol: "bit",
    toBase: (value) => value / 8,
    fromBase: (value) => value * 8,
  },
  {
    id: "byte",
    name: "Byte",
    symbol: "B",
    toBase: (value) => value,
    fromBase: (value) => value,
  },
  {
    id: "kb",
    name: "Kilobyte",
    symbol: "KB",
    toBase: (value) => value * 1024,
    fromBase: (value) => value / 1024,
  },
  {
    id: "mb",
    name: "Megabyte",
    symbol: "MB",
    toBase: (value) => value * 1024 * 1024,
    fromBase: (value) => value / (1024 * 1024),
  },
  {
    id: "gb",
    name: "Gigabyte",
    symbol: "GB",
    toBase: (value) => value * 1024 * 1024 * 1024,
    fromBase: (value) => value / (1024 * 1024 * 1024),
  },
  {
    id: "tb",
    name: "Terabyte",
    symbol: "TB",
    toBase: (value) => value * 1024 * 1024 * 1024 * 1024,
    fromBase: (value) => value / (1024 * 1024 * 1024 * 1024),
  },
];

// Time units (base: second)
const timeUnits: ConversionUnit[] = [
  {
    id: "s",
    name: "Second",
    symbol: "s",
    toBase: (value) => value,
    fromBase: (value) => value,
  },
  {
    id: "min",
    name: "Minute",
    symbol: "min",
    toBase: (value) => value * 60,
    fromBase: (value) => value / 60,
  },
  {
    id: "h",
    name: "Hour",
    symbol: "h",
    toBase: (value) => value * 3600,
    fromBase: (value) => value / 3600,
  },
  {
    id: "day",
    name: "Day",
    symbol: "d",
    toBase: (value) => value * 86400,
    fromBase: (value) => value / 86400,
  },
  {
    id: "week",
    name: "Week",
    symbol: "wk",
    toBase: (value) => value * 604800,
    fromBase: (value) => value / 604800,
  },
  {
    id: "month",
    name: "Month (avg)",
    symbol: "mo",
    toBase: (value) => value * 2629800,
    fromBase: (value) => value / 2629800,
  },
  {
    id: "year",
    name: "Year",
    symbol: "yr",
    toBase: (value) => value * 31557600,
    fromBase: (value) => value / 31557600,
  },
];

// Area units (base: square meter)
const areaUnits: ConversionUnit[] = [
  {
    id: "mm2",
    name: "Square Millimeter",
    symbol: "mm²",
    toBase: (value) => value / 1000000,
    fromBase: (value) => value * 1000000,
  },
  {
    id: "cm2",
    name: "Square Centimeter",
    symbol: "cm²",
    toBase: (value) => value / 10000,
    fromBase: (value) => value * 10000,
  },
  {
    id: "m2",
    name: "Square Meter",
    symbol: "m²",
    toBase: (value) => value,
    fromBase: (value) => value,
  },
  {
    id: "ha",
    name: "Hectare",
    symbol: "ha",
    toBase: (value) => value * 10000,
    fromBase: (value) => value / 10000,
  },
  {
    id: "km2",
    name: "Square Kilometer",
    symbol: "km²",
    toBase: (value) => value * 1000000,
    fromBase: (value) => value / 1000000,
  },
  {
    id: "in2",
    name: "Square Inch",
    symbol: "in²",
    toBase: (value) => value * 0.00064516,
    fromBase: (value) => value / 0.00064516,
  },
  {
    id: "ft2",
    name: "Square Foot",
    symbol: "ft²",
    toBase: (value) => value * 0.092903,
    fromBase: (value) => value / 0.092903,
  },
  {
    id: "ac",
    name: "Acre",
    symbol: "ac",
    toBase: (value) => value * 4046.86,
    fromBase: (value) => value / 4046.86,
  },
];

// Export all conversion categories
export const conversionCategories: ConversionCategory[] = [
  {
    id: "length",
    name: "Length",
    units: lengthUnits,
    baseUnit: "m",
  },
  {
    id: "weight",
    name: "Weight/Mass",
    units: weightUnits,
    baseUnit: "kg",
  },
  {
    id: "temperature",
    name: "Temperature",
    units: temperatureUnits,
    baseUnit: "celsius",
  },
  {
    id: "speed",
    name: "Speed",
    units: speedUnits,
    baseUnit: "mps",
  },
  {
    id: "data",
    name: "Data",
    units: dataUnits,
    baseUnit: "byte",
  },
  {
    id: "time",
    name: "Time",
    units: timeUnits,
    baseUnit: "s",
  },
  {
    id: "area",
    name: "Area",
    units: areaUnits,
    baseUnit: "m2",
  },
];

// Utility functions for conversion
export const convert = (
  value: number,
  fromUnit: ConversionUnit,
  toUnit: ConversionUnit
): number => {
  // Convert from source unit to base unit
  const baseValue = fromUnit.toBase(value);
  
  // Convert from base unit to target unit
  return toUnit.fromBase(baseValue);
};

// Get unit by ID from a category
export const getUnitById = (
  categoryId: string,
  unitId: string
): ConversionUnit | undefined => {
  const category = conversionCategories.find((c) => c.id === categoryId);
  if (!category) return undefined;
  
  return category.units.find((u) => u.id === unitId);
};

// Format a number based on its magnitude
export const formatNumber = (num: number): string => {
  if (num === 0) return "0";
  
  const absNum = Math.abs(num);
  
  if (absNum < 0.0000001 || absNum > 10000000000) {
    return num.toExponential(6);
  }
  
  if (absNum < 0.001) {
    return num.toExponential(6);
  }
  
  // For numbers that are close to integers, show fewer decimal places
  if (Math.abs(Math.round(num) - num) < 0.0000001) {
    return num.toFixed(0);
  }
  
  if (absNum < 0.01) return num.toFixed(6);
  if (absNum < 0.1) return num.toFixed(5);
  if (absNum < 1) return num.toFixed(4);
  if (absNum < 10) return num.toFixed(3);
  if (absNum < 100) return num.toFixed(2);
  if (absNum < 1000) return num.toFixed(1);
  
  return num.toFixed(0);
};

// Create a CSV file from conversion results
export const createCSV = (
  value: number,
  fromUnit: ConversionUnit,
  results: { unit: ConversionUnit; value: number }[]
): string => {
  let csv = `Original Value,${value} ${fromUnit.symbol}\n`;
  csv += "Unit,Symbol,Value\n";
  
  results.forEach((result) => {
    csv += `${result.unit.name},${result.unit.symbol},${formatNumber(result.value)}\n`;
  });
  
  return csv;
};

// Helper function to download CSV
export const downloadCSV = (
  csv: string,
  filename: string = "converta-results.csv"
): void => {
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  
  link.setAttribute("href", url);
  link.setAttribute("download", filename);
  link.style.display = "none";
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Copy results to clipboard
export const copyToClipboard = async (
  value: number,
  fromUnit: ConversionUnit,
  result: { unit: ConversionUnit; value: number }
): Promise<boolean> => {
  try {
    const text = `${formatNumber(value)} ${fromUnit.symbol} = ${formatNumber(result.value)} ${result.unit.symbol}`;
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error("Failed to copy to clipboard:", error);
    return false;
  }
};
