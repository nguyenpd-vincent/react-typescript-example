import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

const focusClass =
  "rounded-t-md border-b-transparent border-t-inherit border-l-inherit border-r-inherit";

const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 w-full items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      `inline-flex w-full items-center justify-center text-[12px] font-global border border-t-transparent border-l-transparent border-r-transparent px-2 py-[8px] hover:bg-[#eeeeee] hover:rounded-tl-md hover:rounded-tr-md text-[#007bff] focus:text-[#555]`,
      className
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsTriggerred = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      `inline-flex w-full items-center justify-center text-[12px] font-global border border-t-transparent border-l-transparent border-r-transparent px-2 py-[8px] ${focusClass} hover:bg-[#eeeeee] hover:rounded-tl-md hover:rounded-tr-md text-[#555] w-[20px]`,
      `inline-flex w-full items-center justify-center text-[12px] font-global border border-t-transparent border-l-transparent border-r-transparent px-2 py-[8px] ${focusClass} hover:bg-[#eeeeee] hover:rounded-tl-md hover:rounded-tr-md text-[#555]`,
      className
    )}
    {...props}
  />
));
// TabsTriggerred.displayName = TabsPrimitive.Triggerred.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent, TabsTriggerred };
