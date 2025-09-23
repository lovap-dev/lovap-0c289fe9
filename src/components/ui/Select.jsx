import { forwardRef } from 'react';
import { cn } from '../../utils/cn';

const Select = forwardRef(({ 
  className = "", 
  options = [], 
  placeholder = "Select an option",
  error,
  ...props 
}, ref) => {
  const baseStyles = "w-full px-3 py-2 text-sm bg-input border border-border rounded-lg font-inter-regular text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed";
  
  const errorStyles = error ? "border-destructive focus:ring-destructive" : "";

  return (
    <select
      className={cn(baseStyles, errorStyles, className)}
      ref={ref}
      {...props}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options?.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
});

Select.displayName = "Select";

export default Select;