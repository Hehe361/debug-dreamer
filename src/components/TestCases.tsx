
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Play, Plus } from "lucide-react";

interface TestCasesProps {
  problemId?: string;
}

const TestCases = ({ problemId }: TestCasesProps) => {
  const [testCases, setTestCases] = useState([
    { id: "1", input: "nums = [2,7,11,15], target = 9", expected: "[0,1]", active: true },
    { id: "2", input: "nums = [3,2,4], target = 6", expected: "[1,2]", active: false },
    { id: "3", input: "nums = [3,3], target = 6", expected: "[0,1]", active: false },
  ]);

  return (
    <div className="space-y-4">
      <Tabs defaultValue="1">
        <div className="flex items-center justify-between mb-3">
          <TabsList>
            {testCases.map(tc => (
              <TabsTrigger key={tc.id} value={tc.id} className="text-xs">
                Case {tc.id}
              </TabsTrigger>
            ))}
          </TabsList>
          <Button variant="outline" size="sm" className="h-7 px-2 flex items-center gap-1">
            <Plus className="h-3.5 w-3.5" />
            <span className="text-xs">Add</span>
          </Button>
        </div>
        
        {testCases.map(tc => (
          <TabsContent key={tc.id} value={tc.id} className="space-y-3">
            <div className="space-y-1">
              <label className="text-sm font-medium">Input:</label>
              <div className="bg-muted p-3 rounded-md font-mono text-xs">
                {tc.input}
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium">Expected Output:</label>
              <div className="bg-muted p-3 rounded-md font-mono text-xs">
                {tc.expected}
              </div>
            </div>
            <Button size="sm" className="w-full gap-1">
              <Play className="h-3.5 w-3.5" />
              Run Test Case
            </Button>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default TestCases;
