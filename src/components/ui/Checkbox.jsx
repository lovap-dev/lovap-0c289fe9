import { forwardRef } from 'react';
import { cn } from '../../utils/cn';

const Checkbox = forwardRef(({ 
  className = "", 
  children,
  id,
  ...props 
}, ref) => {
  return (
    <div className="flex items-center space-x-2">
      <input
        type="checkbox"
        id={id}
        className={cn(
          "h-4 w-4 rounded border border-border bg-input text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
          className
        )}
        ref={ref}
        {...props}
      />
      {children && (
        <label 
          htmlFor={id}
          className="text-sm font-inter-regular text-foreground cursor-pointer"
        >
          {children}
        </label>
      )}
    </div>
  );
});

Checkbox.displayName = "Checkbox";

export default Checkbox;