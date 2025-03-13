
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Star, Clock, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  const navigate = useNavigate();
  const [problems] = useState([
    {
      id: "two-sum",
      title: "Two Sum",
      difficulty: "Easy",
      tags: ["Array", "Hash Table"],
      description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
      likes: 35421,
      dislikes: 1134,
      completionRate: "78%",
      estimatedTime: "15 min"
    },
    {
      id: "add-two-numbers",
      title: "Add Two Numbers",
      difficulty: "Medium",
      tags: ["Linked List", "Math", "Recursion"],
      description: "You are given two non-empty linked lists representing two non-negative integers. Add the two numbers and return the sum as a linked list.",
      likes: 24193,
      dislikes: 4731,
      completionRate: "65%",
      estimatedTime: "25 min"
    },
    {
      id: "longest-substring",
      title: "Longest Substring Without Repeating Characters",
      difficulty: "Medium",
      tags: ["Hash Table", "String", "Sliding Window"],
      description: "Given a string s, find the length of the longest substring without repeating characters.",
      likes: 28192,
      dislikes: 1211,
      completionRate: "58%",
      estimatedTime: "30 min"
    }
  ]);

  const difficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-500 hover:bg-green-600";
      case "Medium": return "bg-yellow-500 hover:bg-yellow-600";
      case "Hard": return "bg-red-500 hover:bg-red-600";
      default: return "bg-gray-500 hover:bg-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code className="h-6 w-6" />
            <h1 className="text-2xl font-bold">Debug Dreamer</h1>
          </div>
          <nav className="flex items-center gap-4">
            <Link to="/problems">
              <Button variant="ghost">Problems</Button>
            </Link>
            <Button variant="ghost">Contests</Button>
            <Button variant="ghost">Leaderboard</Button>
            <ThemeToggle />
            <Button variant="outline">Sign In</Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-6">Coding Problems</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <Card key={problem.id} className="h-full flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{problem.title}</CardTitle>
                  <Badge className={difficultyColor(problem.difficulty)}>
                    {problem.difficulty}
                  </Badge>
                </div>
                <CardDescription className="line-clamp-2 h-10">{problem.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {problem.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    <span>{problem.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{problem.estimatedTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="h-4 w-4" />
                    <span>{problem.completionRate}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  onClick={() => navigate(`/editor/${problem.id}`)}
                >
                  Solve Challenge
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link to="/problems">
            <Button size="lg">
              Browse All Problems
            </Button>
          </Link>
        </div>
      </main>
      
      <footer className="border-t p-4 text-center text-muted-foreground">
        <div className="container mx-auto">
          <p>© 2023 Debug Dreamer. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
