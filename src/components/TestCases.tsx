
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Plus, X } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const TestCases = () => {
  const [activeCase, setActiveCase] = useState("case1");
  const [customCases, setCustomCases] = useState<{ id: string; input: string; }[]>([]);
  const [newCustomCase, setNewCustomCase] = useState(false);
  const [numsInput, setNumsInput] = useState("");
  const [targetInput, setTargetInput] = useState("");

  const defaultTestCases = [
    { id: "case1", input: "[2, 7, 11, 15], target = 9", output: "[0, 1]", passed: true },
    { id: "case2", input: "[3, 2, 4], target = 6", output: "[1, 2]", passed: true },
    { id: "case3", input: "[3, 3], target = 6", output: "[0, 1]", passed: false },
  ];

  const addCustomCase = () => {
    if (numsInput && targetInput) {
      const newCase = {
        id: `custom${customCases.length + 1}`,
        input: `${numsInput}, target = ${targetInput}`
      };
      setCustomCases([...customCases, newCase]);
      setNewCustomCase(false);
      setNumsInput("");
      setTargetInput("");
    }
  };

  const removeCustomCase = (id: string) => {
    setCustomCases(customCases.filter(c => c.id !== id));
  };

  return (
    <Tabs defaultValue="default" className="space-y-4">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="default">Default Cases</TabsTrigger>
        <TabsTrigger value="custom">Custom Cases</TabsTrigger>
      </TabsList>
      
      <TabsContent value="default" className="space-y-4">
        <div className="flex overflow-x-auto pb-2">
          {defaultTestCases.map((test) => (
            <Button
              key={test.id}
              variant={activeCase === test.id ? "default" : "outline"}
              size="sm"
              className="mr-2 whitespace-nowrap"
              onClick={() => setActiveCase(test.id)}
            >
              Case {test.id.replace("case", "")}
            </Button>
          ))}
        </div>
        
        {defaultTestCases.map((test) => (
          activeCase === test.id && (
            <div key={test.id} className="p-4 rounded-lg border space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">Test Case {test.id.replace("case", "")}</span>
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
          )
        ))}
      </TabsContent>
      
      <TabsContent value="custom" className="space-y-4">
        <div className="flex overflow-x-auto pb-2">
          {customCases.map((test) => (
            <Button
              key={test.id}
              variant={activeCase === test.id ? "default" : "outline"}
              size="sm"
              className="mr-2 whitespace-nowrap"
              onClick={() => setActiveCase(test.id)}
            >
              Case {test.id.replace("custom", "")}
            </Button>
          ))}
          <Button
            variant="outline"
            size="sm"
            className="whitespace-nowrap"
            onClick={() => setNewCustomCase(true)}
          >
            <Plus className="w-3 h-3 mr-1" /> Add Case
          </Button>
        </div>
        
        {newCustomCase ? (
          <div className="p-4 rounded-lg border space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-medium">New Test Case</span>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-6 w-6 p-0"
                onClick={() => setNewCustomCase(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium">nums = </label>
                <input
                  type="text"
                  value={numsInput}
                  onChange={(e) => setNumsInput(e.target.value)}
                  placeholder="e.g. [1, 2, 3, 4]"
                  className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-medium">target = </label>
                <input
                  type="text"
                  value={targetInput}
                  onChange={(e) => setTargetInput(e.target.value)}
                  placeholder="e.g. 6"
                  className="w-full mt-1 px-3 py-2 border rounded-md text-sm"
                />
              </div>
              <Button 
                onClick={addCustomCase} 
                className="w-full"
                disabled={!numsInput || !targetInput}
              >
                Add Test Case
              </Button>
            </div>
          </div>
        ) : customCases.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            <p>No custom test cases yet.</p>
            <Button 
              variant="outline" 
              className="mt-2"
              onClick={() => setNewCustomCase(true)}
            >
              <Plus className="w-4 h-4 mr-2" /> Add Test Case
            </Button>
          </div>
        ) : (
          customCases.map((test) => (
            activeCase === test.id && (
              <div key={test.id} className="p-4 rounded-lg border space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Custom Test {test.id.replace("custom", "")}</span>
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="h-6 w-6 p-0 text-destructive"
                      onClick={() => removeCustomCase(test.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="space-y-1 text-sm">
                  <div>
                    <span className="text-muted-foreground">Input:</span>{" "}
                    <code className="text-xs">{test.input}</code>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Output:</span>{" "}
                    <code className="text-xs">Not run yet</code>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full gap-2">
                  <Play className="w-4 h-4" />
                  Run Test Case
                </Button>
              </div>
            )
          ))
        )}
      </TabsContent>
    </Tabs>
  );
};

export default TestCases;
