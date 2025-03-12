
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

const ProblemDescription = () => {
  return (
    <ScrollArea className="h-full">
      <div className="p-6 space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Two Sum</h1>
          <div className="flex gap-2">
            <Badge>Easy</Badge>
            <Badge variant="outline">Array</Badge>
            <Badge variant="outline">Hash Table</Badge>
          </div>
        </div>

        <div className="space-y-4 text-sm leading-relaxed">
          <p>
            Given an array of integers <code>nums</code> and an integer{" "}
            <code>target</code>, return indices of the two numbers such that they
            add up to <code>target</code>.
          </p>

          <p>
            You may assume that each input would have exactly one solution, and you
            may not use the same element twice.
          </p>

          <p>You can return the answer in any order.</p>

          <div className="space-y-2">
            <h3 className="font-semibold">Example 1:</h3>
            <pre className="p-4 rounded-lg bg-muted font-mono text-xs">
              {`Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].`}
            </pre>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold">Constraints:</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>2 ≤ nums.length ≤ 10⁴</li>
              <li>-10⁹ ≤ nums[i] ≤ 10⁹</li>
              <li>-10⁹ ≤ target ≤ 10⁹</li>
              <li>Only one valid answer exists.</li>
            </ul>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default ProblemDescription;
