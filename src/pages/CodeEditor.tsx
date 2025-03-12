import { useState } from "react";
import { useParams } from "react-router-dom";
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { Play, Bug, Save, RotateCcw, ChevronRight, ChevronLeft } from "lucide-react";
import Editor from "@/components/Editor";
import TestCases from "@/components/TestCases";
import ProblemDescription from "@/components/ProblemDescription";
import { CodeDebugger } from "@/components/CodeDebugger";

const CodeEditor = () => {
  const { problemId } = useParams();
  const { toast } = useToast();
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const [showProblem, setShowProblem] = useState(true);
  const [debugInfo, setDebugInfo] = useState<string[]>([]);

  const handleRunCode = async () => {
    setIsRunning(true);
    try {
      // Simulate code execution
      await new Promise(resolve => setTimeout(resolve, 1000));
      setOutput("Code executed successfully!\nExecution time: 0.05s\nMemory used: 5.2MB");
      toast({
        title: "Code executed successfully",
        description: "Your code passed all test cases!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to execute code",
        variant: "destructive",
      });
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="h-screen bg-background flex flex-col">
      <header className="border-b p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold">Problem {problemId}</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setShowProblem(!showProblem)}
          >
            {showProblem ? <ChevronLeft /> : <ChevronRight />}
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() => setCode("")}
            className="gap-2"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              toast({
                title: "Code saved",
                description: "Your progress has been saved",
              });
            }}
            className="gap-2"
          >
            <Save className="h-4 w-4" />
            Save
          </Button>
          <Button
            variant="outline"
            className="gap-2"
          >
            <Bug className="h-4 w-4" />
            Debug
          </Button>
          <Button
            variant="default"
            onClick={handleRunCode}
            disabled={isRunning}
            className="gap-2"
          >
            <Play className="h-4 w-4" />
            Run Code
          </Button>
        </div>
      </header>

      <div className="flex-1 overflow-hidden">
        <ResizablePanelGroup direction="horizontal">
          {showProblem && (
            <ResizablePanel defaultSize={25} minSize={20}>
              <ProblemDescription />
            </ResizablePanel>
          )}
          <ResizablePanel defaultSize={showProblem ? 75 : 100}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={60}>
                <div className="h-full relative">
                  <Editor code={code} setCode={setCode} onDebug={setDebugInfo} />
                  <CodeDebugger suggestions={debugInfo} />
                </div>
              </ResizablePanel>
              <ResizablePanel defaultSize={40}>
                <div className="h-full grid grid-cols-2 divide-x">
                  <ScrollArea className="h-full">
                    <div className="p-4 space-y-4">
                      <h2 className="font-semibold">Test Cases</h2>
                      <TestCases />
                    </div>
                  </ScrollArea>
                  <ScrollArea className="h-full">
                    <div className="p-4 space-y-4">
                      <h2 className="font-semibold">Output</h2>
                      <pre className="font-mono text-sm p-4 rounded-lg bg-muted whitespace-pre-wrap">
                        {output || "Run your code to see the output..."}
                      </pre>
                    </div>
                  </ScrollArea>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </div>
  );
};

export default CodeEditor;
