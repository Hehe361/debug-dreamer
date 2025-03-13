
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Code } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-30">
      <div className="container h-full flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Code className="h-6 w-6" />
          <h1 className="text-xl font-bold">Debug Dreamer</h1>
        </div>
        <nav className="flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost">Home</Button>
          </Link>
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
  );
};

export default Navbar;
