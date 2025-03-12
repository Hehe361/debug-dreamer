
import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface EditorProps {
  code: string;
  setCode: (code: string) => void;
  onDebug?: (suggestions: string[]) => void;
}

const Editor = ({ code, setCode, onDebug }: EditorProps) => {
  const [lineNumbers, setLineNumbers] = useState<number[]>([1]);

  useEffect(() => {
    const lines = code.split("\n").length;
    setLineNumbers(Array.from({ length: lines }, (_, i) => i + 1));

    // Basic syntax error detection
    const checkSyntax = () => {
      const suggestions: string[] = [];
      
      try {
        // Check for basic syntax errors
        new Function(code);
      } catch (error: any) {
        const errorMessage = error.toString();
        suggestions.push(`Syntax Error: ${errorMessage}`);
        
        // Add AI suggestions based on common errors
        if (errorMessage.includes("unexpected token")) {
          suggestions.push("Tip: Check for missing brackets, parentheses, or semicolons");
        }
        if (errorMessage.includes("is not defined")) {
          suggestions.push("Tip: Make sure all variables are properly declared");
        }
      }

      // Check for common coding patterns
      if (code.includes("console.log")) {
        suggestions.push("Note: Remember to remove debugging console.log statements before submission");
      }

      onDebug?.(suggestions);
    };

    const debounceTimeout = setTimeout(checkSyntax, 500);
    return () => clearTimeout(debounceTimeout);
  }, [code, onDebug]);

  return (
    <div className="h-full relative bg-background">
      <ScrollArea className="h-full">
        <div className="flex">
          <div className="p-4 bg-muted text-muted-foreground text-right select-none w-12 font-mono text-sm">
            {lineNumbers.map((num) => (
              <div key={num}>{num}</div>
            ))}
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="flex-1 p-4 font-mono text-sm bg-transparent outline-none resize-none min-h-full"
            placeholder="Write your code here..."
            spellCheck={false}
          />
        </div>
      </ScrollArea>
    </div>
  );
};

export default Editor;
