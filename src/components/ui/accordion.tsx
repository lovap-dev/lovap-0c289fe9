import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
// We intentionally avoid using a chevron so we can render + / − like the design

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={cn("", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        // Add group to target +/- based on data-state
        "group flex flex-1 items-center justify-between py-4 font-medium transition-all hover:no-underline hover:text-[#A5E25D] data-[state=open]:text-[#A5E25D]",
        className,
      )}
      {...props}
    >
      {children}
      {/* Plus / Minus indicator on the right */}
      <span
        aria-hidden
        className="ml-4 text-2xl leading-none text-muted-foreground group-hover:text-[#A5E25D] group-data-[state=open]:hidden"
      >
        +
      </span>
      <span
        aria-hidden
        className="ml-4 text-2xl leading-none text-muted-foreground group-hover:text-[#A5E25D] group-data-[state=open]:text-[#A5E25D] hidden group-data-[state=open]:inline"
      >
        −
      </span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
