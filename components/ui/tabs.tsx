import React, { ReactNode, useState } from "react";

interface TabsProps {
  children: ReactNode;
  value: string; // Active tab value
  onValueChange: (value: string) => void; // Callback for tab change
  className?: string; // Optional className for styling
}

interface TabsTriggerProps {
  value: string; // Represents the tab identifier
  label: string; // Label displayed on the button
  onClick: (value: string) => void; // Function to set the active tab
}

interface TabsContentProps {
  value: string; // Identifier for the content
  activeTab: string; // Current active tab
  children: ReactNode;
}

// Tabs Component
export const Tabs: React.FC<TabsProps> = ({ children, value, onValueChange, className }) => {
  return (
    <div className={`tabs ${className}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && typeof child.type !== "string") {
          return React.cloneElement(child, { value, onValueChange } as any);
        }
        return child;
      })}
    </div>
  );
};

// TabsList Component
interface TabsListProps {
  children: ReactNode;
}

export const TabsList: React.FC<TabsListProps> = ({ children }) => {
  return <div className="tabs-list">{children}</div>;
};

// TabsTrigger Component
export const TabsTrigger: React.FC<TabsTriggerProps> = ({ value, label, onClick }) => {
  return (
    <button
      onClick={() => onClick(value)}
      className="tabs-trigger"
    >
      {label}
    </button>
  );
};

// TabsContent Component
export const TabsContent: React.FC<TabsContentProps> = ({ value, activeTab, children }) => {
  return activeTab === value ? <div className="tabs-content">{children}</div> : null;
};
