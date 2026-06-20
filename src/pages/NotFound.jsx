import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { StarBackground } from "@/components/StarBackground";

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <StarBackground />

      <div className="relative z-10 text-center space-y-6">
        <h1 className="text-7xl md:text-9xl font-bold tracking-tight text-gradient">404</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto">
          This page drifted off into space. Let&apos;s get you back home.
        </p>
        <Link to="/" className="cosmic-button inline-flex items-center gap-2">
          <ArrowLeft size={16} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};
