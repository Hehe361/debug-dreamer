
import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Building, Users, Lightbulb, FileQuestion } from "lucide-react";

// Define problem data keyed by problemId
const problemData: Record<string, any> = {
  "two-sum": {
    title: "Two Sum",
    difficulty: "Easy",
    description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
        explanation: "Because nums[1] + nums[2] == 6, we return [1, 2]."
      }
    ],
    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists."
    ],
    topics: ["Array", "Hash Table"],
    companies: ["Amazon", "Google", "Apple", "Microsoft"],
    hints: [
      "A naive approach would be to use a nested loop to check every pair of numbers.",
      "Can we optimize this using a hash map to store the numbers we've seen so far?",
      "For each number, check if target - number is in the hash map."
    ],
    similar: ["Three Sum", "Two Sum II", "Two Sum IV"]
  },
  "add-two-numbers": {
    title: "Add Two Numbers",
    difficulty: "Medium",
    description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself.",
    examples: [
      {
        input: "l1 = [2,4,3], l2 = [5,6,4]",
        output: "[7,0,8]",
        explanation: "342 + 465 = 807."
      }
    ],
    constraints: [
      "The number of nodes in each linked list is in the range [1, 100].",
      "0 <= Node.val <= 9",
      "It is guaranteed that the list represents a number that does not have leading zeros."
    ],
    topics: ["Linked List", "Math", "Recursion"],
    companies: ["Microsoft", "Amazon", "Apple"],
    hints: [
      "Remember to handle carry properly.",
      "What happens when one list is longer than the other?",
      "What if there's a carry after processing both lists?"
    ],
    similar: ["Multiply Strings", "Add Binary", "Sum of Two Integers"]
  },
  "longest-substring": {
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    description: "Given a string s, find the length of the longest substring without repeating characters.",
    examples: [
      {
        input: "s = \"abcabcbb\"",
        output: "3",
        explanation: "The answer is \"abc\", with the length of 3."
      },
      {
        input: "s = \"bbbbb\"",
        output: "1",
        explanation: "The answer is \"b\", with the length of 1."
      }
    ],
    constraints: [
      "0 <= s.length <= 5 * 10^4",
      "s consists of English letters, digits, symbols and spaces."
    ],
    topics: ["Hash Table", "String", "Sliding Window"],
    companies: ["Amazon", "Bloomberg", "Facebook"],
    hints: [
      "Consider using a sliding window approach.",
      "Use a set to track characters in the current window.",
      "When you find a duplicate, move the window's left boundary."
    ],
    similar: ["Longest Substring with At Most Two Distinct Characters", "Longest Substring with At Most K Distinct Characters"]
  }
};

// Add a default problem data generator for the problem-X format
Array(20).fill(null).forEach((_, i) => {
  const index = i + 1;
  const problemType = ['Two Sum', 'Merge Intervals', 'LRU Cache', 'Validate BST', 'Max Path Sum'][i % 5];
  const number = Math.floor(i/5) + 1;
  const title = `Problem ${index}: ${problemType} ${number}`;
  const difficulties = ["Easy", "Medium", "Hard"];
  
  problemData[`problem-${index}`] = {
    title: title,
    difficulty: difficulties[Math.floor(Math.random() * 3)],
    description: `This is the problem description for ${title}. Solve this challenging problem to improve your coding skills.`,
    examples: [
      {
        input: "Example input",
        output: "Example output",
        explanation: "This is how the solution works."
      }
    ],
    constraints: [
      "Time complexity: O(n)",
      "Space complexity: O(n)",
      "1 <= n <= 10^5"
    ],
    topics: ["Array", "Hash Table", "Dynamic Programming"].sort(() => 0.5 - Math.random()).slice(0, 2),
    companies: ["Google", "Amazon", "Microsoft", "Facebook"].sort(() => 0.5 - Math.random()).slice(0, 3),
    hints: [
      "Think about efficiency first.",
      "Consider using appropriate data structures.",
      "Break down the problem into smaller parts."
    ],
    similar: ["Related Problem 1", "Related Problem 2", "Related Problem 3"]
  };
});

interface ProblemDescriptionProps {
  problemId?: string;
}

const ProblemDescription = ({ problemId = "two-sum" }: ProblemDescriptionProps) => {
  const [problem, setProblem] = useState<any>(problemData[problemId] || problemData["two-sum"]);

  useEffect(() => {
    // Update problem data when problemId changes
    setProblem(problemData[problemId] || {
      title: `Problem ${problemId}`,
      difficulty: "Medium",
      description: "Problem description not available.",
      examples: [],
      constraints: [],
      topics: [],
      companies: [],
      hints: [],
      similar: []
    });
  }, [problemId]);

  const difficultyColor = {
    Easy: "bg-green-500",
    Medium: "bg-orange-500",
    Hard: "bg-red-500"
  };

  return (
    <ScrollArea className="h-full">
      <div className="p-6 space-y-6">
        <div>
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-xl font-bold">{problem.title}</h1>
            <Badge className={`${difficultyColor[problem.difficulty as keyof typeof difficultyColor]} text-white`}>{problem.difficulty}</Badge>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {problem.topics?.map((topic: string) => (
              <Badge key={topic} variant="outline">{topic}</Badge>
            ))}
          </div>
          
          <div className="text-muted-foreground mb-6">{problem.description}</div>
        </div>
        
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Examples</h2>
          {problem.examples?.map((example: any, index: number) => (
            <div key={index} className="border rounded-lg p-4 space-y-3">
              <div>
                <span className="font-medium">Input: </span>
                <code className="bg-muted p-1 rounded">{example.input}</code>
              </div>
              <div>
                <span className="font-medium">Output: </span>
                <code className="bg-muted p-1 rounded">{example.output}</code>
              </div>
              {example.explanation && (
                <div>
                  <span className="font-medium">Explanation: </span>
                  <span>{example.explanation}</span>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div>
          <h2 className="text-lg font-semibold mb-3">Constraints</h2>
          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
            {problem.constraints?.map((constraint: string, index: number) => (
              <li key={index}>{constraint}</li>
            ))}
          </ul>
        </div>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="companies">
            <AccordionTrigger className="text-lg font-semibold">
              <div className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                Companies
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-wrap gap-2 pt-2">
                {problem.companies?.map((company: string) => (
                  <Badge key={company} variant="secondary">{company}</Badge>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="hints">
            <AccordionTrigger className="text-lg font-semibold">
              <div className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Hints
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 pt-2">
                {problem.hints?.map((hint: string, index: number) => (
                  <div key={index} className="border rounded-lg p-3">
                    <div className="flex items-center gap-2 font-medium mb-1">
                      <span>Hint {index + 1}</span>
                    </div>
                    <p className="text-muted-foreground">{hint}</p>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="similar">
            <AccordionTrigger className="text-lg font-semibold">
              <div className="flex items-center gap-2">
                <FileQuestion className="h-5 w-5" />
                Similar Questions
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-wrap gap-2 pt-2">
                {problem.similar?.map((question: string) => (
                  <Badge key={question} variant="outline" className="cursor-pointer hover:bg-primary/10">
                    {question}
                  </Badge>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </ScrollArea>
  );
};

export default ProblemDescription;
