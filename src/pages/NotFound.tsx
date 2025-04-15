
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Fish, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary/20 px-4">
      <div className="text-center max-w-md">
        <Fish className="h-20 w-20 text-primary mx-auto mb-4" />
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <h2 className="text-2xl font-bold text-foreground mb-4">Page Not Found</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Sorry, the page you're looking for is swimming in different waters. Let's get you back to our main stream.
        </p>
        <Button size="lg" asChild>
          <Link to="/" className="flex items-center gap-2">
            <Home className="h-4 w-4" />
            <span>Return to Home</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
