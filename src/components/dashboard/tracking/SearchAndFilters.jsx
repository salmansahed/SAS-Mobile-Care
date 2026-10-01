"use client";

import { TextField, Label, Input, Button, Card } from "@heroui/react";

const AppInput = (props) => (
  <Input
    {...props}
    className={`border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 ${
      props.className || ""
    }`}
  />
);

export default function SearchAndFilters({
  searchQuery,
  setSearchQuery,
  maxPrice,
  setMaxPrice,
  selectedDate,
  setSelectedDate,
  onReset,
}) {
  const isFiltered = searchQuery || maxPrice || selectedDate;

  return (
    <Card className="p-4 sm:p-5 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xs rounded-2xl space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <TextField>
          <Label className="text-xs font-semibold">Search Order</Label>
          <AppInput
            placeholder="Search by Mobile, ID, Name or Model..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </TextField>

        <TextField>
          <Label className="text-xs font-semibold">Max Price (৳)</Label>
          <AppInput
            type="number"
            placeholder="e.g. 20000"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </TextField>

        <TextField>
          <Label className="text-xs font-semibold">Received Date</Label>
          <AppInput
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </TextField>
      </div>

      {isFiltered && (
        <div className="flex justify-end pt-1">
          <Button
            variant="ghost"
            onClick={onReset}
            className="text-xs text-rose-500 hover:text-rose-600 font-semibold"
          >
            Clear All Filters
          </Button>
        </div>
      )}
    </Card>
  );
}
