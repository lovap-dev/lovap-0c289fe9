import { forwardRef } from 'react';
import { cn } from '../../utils/cn';

const Input = forwardRef(({ 
  className = "", 
  type = "text", 
  error,
  ...props 
}, ref) => {
  const baseStyles = "w-full px-3 py-2 text-sm bg-input border border-border rounded-lg font-inter-regular placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed";
  
  const errorStyles = error ? "border-destructive focus:ring-destructive" : "";

  return (
    <input
      type={type}
      className={cn(baseStyles, errorStyles, className)}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export default Input;