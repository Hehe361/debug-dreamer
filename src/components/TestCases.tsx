
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";

const TestCases = () => {
  const testCases = [
    { id: 1, input: "[2, 7, 11, 15], target = 9", output: "[0, 1]", passed: true },
    { id: 2, input: "[3, 2, 4], target = 6", output: "[1, 2]", passed: true },
    { id: 3, input: "[3, 3], target = 6", output: "[0, 1]", passed: false },
  ];

  return (
    <div className="space-y-4">
      {testCases.map((test) => (
        <div
          key={test.id}
          className="p-4 rounded-lg border space-y-2"
        >
          <div className="flex items-center justify-between">
            <span className="font-medium">Test Case {test.id}</span>
            <Badge variant={test.passed ? "default" : "destructive"}>
              {test.passed ? "Passed" : "Failed"}
            </Badge>
          </div>
          <div className="space-y-1 text-sm">
            <div>
              <span className="text-muted-foreground">Input:</span>{" "}
              <code className="text-xs">{test.input}</code>
            </div>
            <div>
              <span className="text-muted-foreground">Output:</span>{" "}
              <code className="text-xs">{test.output}</code>
            </div>
          </div>
          <Button variant="outline" size="sm" className="w-full gap-2">
            <Play className="w-4 h-4" />
            Run Test Case
          </Button>
        </div>
      ))}
    </div>
  );
};

export default TestCases;
