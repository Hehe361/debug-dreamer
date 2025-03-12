
import { useEffect, useState } from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";

interface CodeDebuggerProps {
  suggestions: string[];
}

export const CodeDebugger = ({ suggestions }: CodeDebuggerProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(suggestions.length > 0);
  }, [suggestions]);

  if (!isVisible) return null;

  return (
    <div className="absolute bottom-4 right-4 w-80 bg-background border rounded-lg shadow-lg">
      <div className="p-4">
        <h3 className="font-semibold mb-2">AI Suggestions</h3>
        <ScrollArea className="h-[200px]">
          <div className="space-y-2">
            {suggestions.map((suggestion, index) => (
              <div key={index} className="p-2 bg-muted rounded-md text-sm">
                {suggestion}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};
