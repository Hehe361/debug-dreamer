
import { ScrollArea } from "@/components/ui/scroll-area";
import { useParams } from "react-router-dom";
import { 
  ChevronDown, 
  ChevronUp, 
  Tag, 
  Building, 
  Lightbulb, 
  List,
  ThumbsUp,
  ThumbsDown 
} from "lucide-react";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const ProblemDescription = () => {
  const { problemId } = useParams();
  const [expandedSections, setExpandedSections] = useState({
    topics: false,
    companies: false,
    hint1: false,
    hint2: false,
    hint3: false,
    similarQuestions: false
  });
  
  // This would typically come from an API based on the problemId
  const problem = {
    title: problemId === "two-sum" ? "Two Sum" : 
           problemId === "add-two-numbers" ? "Add Two Numbers" : 
           "Longest Substring Without Repeating Characters",
    difficulty: problemId === "two-sum" ? "Easy" : "Medium",
    description: problemId === "two-sum" ? 
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice." :
      problemId === "add-two-numbers" ?
      "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list." :
      "Given a string s, find the length of the longest substring without repeating characters.",
    examples: [
      {
        input: problemId === "two-sum" ? "nums = [2,7,11,15], target = 9" : 
               problemId === "add-two-numbers" ? "l1 = [2,4,3], l2 = [5,6,4]" : 
               "s = \"abcabcbb\"",
        output: problemId === "two-sum" ? "[0,1]" : 
                problemId === "add-two-numbers" ? "[7,0,8]" : 
                "3",
        explanation: problemId === "two-sum" ? 
          "Because nums[0] + nums[1] == 9, we return [0, 1]." : 
          problemId === "add-two-numbers" ?
          "342 + 465 = 807." :
          "The answer is \"abc\", with the length of 3."
      },
      {
        input: problemId === "two-sum" ? "nums = [3,2,4], target = 6" : 
               problemId === "add-two-numbers" ? "l1 = [0], l2 = [0]" : 
               "s = \"bbbbb\"",
        output: problemId === "two-sum" ? "[1,2]" : 
                problemId === "add-two-numbers" ? "[0]" : 
                "1",
        explanation: problemId === "two-sum" ? 
          "Because nums[1] + nums[2] == 6, we return [1, 2]." : 
          problemId === "add-two-numbers" ?
          "0 + 0 = 0." :
          "The answer is \"b\", with the length of 1."
      }
    ],
    constraints: problemId === "two-sum" ? 
      ["2 <= nums.length <= 10^4", "-10^9 <= nums[i] <= 10^9", "-10^9 <= target <= 10^9", "Only one valid answer exists."] :
      problemId === "add-two-numbers" ?
      ["The number of nodes in each linked list is in the range [1, 100].", "0 <= Node.val <= 9", "It is guaranteed that the list represents a number that does not have leading zeros."] :
      ["0 <= s.length <= 5 * 10^4", "s consists of English letters, digits, symbols and spaces."],
    stats: {
      accepted: "16.5M",
      submissions: "29.9M",
      acceptanceRate: "55.1%",
      seenIn: "1/5"
    },
    topics: ["Array", "Hash Table"],
    companies: ["Amazon", "Google", "Microsoft", "Apple", "Facebook"],
    hints: [
      "A really brute force way would be to search for all possible pairs of numbers but that would be too slow. Again, it's best to try out brute force solutions for just for completeness. It is from these brute force solutions that you can come up with optimizations.",
      "So, if we fix one of the numbers, say x, we have to scan the entire array to find the next number y which is value - x where value is the input parameter. Can we change our array somehow so that this search becomes faster?",
      "The second train of thought is, without changing the array, can we use additional space somehow? Like maybe a hash map to speed up the search?"
    ],
    similarQuestions: [
      "3Sum", 
      "4Sum", 
      "Two Sum II - Input Array Is Sorted", 
      "Two Sum III - Data structure design"
    ]
  };

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const DropdownHeader = ({ 
    title, 
    section, 
    icon 
  }: { 
    title: string, 
    section: keyof typeof expandedSections, 
    icon: React.ReactNode 
  }) => (
    <div 
      className="flex items-center justify-between p-4 cursor-pointer hover:bg-muted/50"
      onClick={() => toggleSection(section)}
    >
      <div className="flex items-center gap-2">
        {icon}
        <span className="font-medium">{title}</span>
      </div>
      {expandedSections[section] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
    </div>
  );

  return (
    <ScrollArea className="h-full">
      <div className="p-6 space-y-4">
        <div>
          <h1 className="text-2xl font-bold">{problem.title}</h1>
          <div className="flex items-center mt-2">
            <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${
              problem.difficulty === "Easy" ? "bg-green-500" : 
              problem.difficulty === "Medium" ? "bg-yellow-500" : 
              "bg-red-500"
            } text-white`}>
              {problem.difficulty}
            </span>
          </div>
        </div>

        <div>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <div>Seen this question in a real interview before? {problem.stats.seenIn}</div>
            <div className="flex gap-2">
              <button className="px-3 py-1 rounded-full bg-muted hover:bg-muted/80">Yes</button>
              <button className="px-3 py-1 rounded-full bg-muted hover:bg-muted/80">No</button>
            </div>
          </div>
        </div>

        <div className="flex gap-8 text-sm">
          <div>
            <span className="text-muted-foreground">Accepted</span>
            <div className="font-medium">{problem.stats.accepted}</div>
          </div>
          <div>
            <span className="text-muted-foreground">Submissions</span>
            <div className="font-medium">{problem.stats.submissions}</div>
          </div>
          <div>
            <span className="text-muted-foreground">Acceptance Rate</span>
            <div className="font-medium">{problem.stats.acceptanceRate}</div>
          </div>
        </div>

        <Separator />

        <div>
          <h2 className="text-lg font-semibold mb-2">Problem:</h2>
          <p className="text-gray-700 dark:text-gray-300">{problem.description}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Examples:</h2>
          <div className="space-y-4">
            {problem.examples.map((example, index) => (
              <div key={index} className="p-4 rounded-lg bg-muted">
                <div className="mb-2">
                  <p className="font-medium">Input:</p>
                  <pre className="mt-1 text-sm bg-secondary p-2 rounded">{example.input}</pre>
                </div>
                <div className="mb-2">
                  <p className="font-medium">Output:</p>
                  <pre className="mt-1 text-sm bg-secondary p-2 rounded">{example.output}</pre>
                </div>
                {example.explanation && (
                  <div>
                    <p className="font-medium">Explanation:</p>
                    <p className="mt-1 text-sm">{example.explanation}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Constraints:</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
            {problem.constraints.map((constraint, index) => (
              <li key={index}>{constraint}</li>
            ))}
          </ul>
        </div>

        <Separator />

        {/* Topics section */}
        <div className="border rounded-lg overflow-hidden">
          <DropdownHeader 
            title="Topics" 
            section="topics" 
            icon={<Tag size={18} />} 
          />
          {expandedSections.topics && (
            <div className="p-4 bg-muted/30">
              <div className="flex gap-2 flex-wrap">
                {problem.topics.map((topic, index) => (
                  <Badge key={index} variant="outline" className="bg-muted/50">
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Companies section */}
        <div className="border rounded-lg overflow-hidden">
          <DropdownHeader 
            title="Companies" 
            section="companies" 
            icon={<Building size={18} />} 
          />
          {expandedSections.companies && (
            <div className="p-4 bg-muted/30">
              <div className="flex gap-2 flex-wrap">
                {problem.companies.map((company, index) => (
                  <Badge key={index} variant="outline" className="bg-muted/50">
                    {company}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Hint 1 */}
        <div className="border rounded-lg overflow-hidden">
          <DropdownHeader 
            title="Hint 1" 
            section="hint1" 
            icon={<Lightbulb size={18} />} 
          />
          {expandedSections.hint1 && (
            <div className="p-4 bg-muted/30">
              <p>{problem.hints[0]}</p>
            </div>
          )}
        </div>

        {/* Hint 2 */}
        <div className="border rounded-lg overflow-hidden">
          <DropdownHeader 
            title="Hint 2" 
            section="hint2" 
            icon={<Lightbulb size={18} />} 
          />
          {expandedSections.hint2 && (
            <div className="p-4 bg-muted/30">
              <p>{problem.hints[1]}</p>
            </div>
          )}
        </div>

        {/* Hint 3 */}
        <div className="border rounded-lg overflow-hidden">
          <DropdownHeader 
            title="Hint 3" 
            section="hint3" 
            icon={<Lightbulb size={18} />} 
          />
          {expandedSections.hint3 && (
            <div className="p-4 bg-muted/30">
              <p>{problem.hints[2]}</p>
            </div>
          )}
        </div>

        {/* Similar Questions */}
        <div className="border rounded-lg overflow-hidden">
          <DropdownHeader 
            title="Similar Questions" 
            section="similarQuestions" 
            icon={<List size={18} />} 
          />
          {expandedSections.similarQuestions && (
            <div className="p-4 bg-muted/30">
              <ul className="space-y-2">
                {problem.similarQuestions.map((question, index) => (
                  <li key={index} className="hover:underline cursor-pointer">
                    {question}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex items-center justify-center gap-4 pt-4 pb-8">
          <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground">
            <ThumbsUp size={16} />
            <span>60.7K</span>
          </button>
          <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground">
            <ThumbsDown size={16} />
            <span>1.3K</span>
          </button>
        </div>

        <div className="text-sm text-muted-foreground text-center">
          Copyright © 2025 LeetCode All rights reserved
        </div>
      </div>
    </ScrollArea>
  );
};

export default ProblemDescription;
