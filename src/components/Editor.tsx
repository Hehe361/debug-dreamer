
import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface EditorProps {
  code: string;
  setCode: (code: string) => void;
}

const Editor = ({ code, setCode }: EditorProps) => {
  const [lineNumbers, setLineNumbers] = useState<number[]>([1]);

  useEffect(() => {
    const lines = code.split("\n").length;
    setLineNumbers(Array.from({ length: lines }, (_, i) => i + 1));
  }, [code]);

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
