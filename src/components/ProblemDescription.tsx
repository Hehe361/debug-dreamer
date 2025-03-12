
import { ScrollArea } from "@/components/ui/scroll-area";
import { useParams } from "react-router-dom";

const ProblemDescription = () => {
  const { problemId } = useParams();
  
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
      ["0 <= s.length <= 5 * 10^4", "s consists of English letters, digits, symbols and spaces."]
  };

  return (
    <ScrollArea className="h-full">
      <div className="p-6 space-y-6">
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
      </div>
    </ScrollArea>
  );
};

export default ProblemDescription;
