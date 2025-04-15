
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tractor, Users, TrendingUp } from "lucide-react";

const FarmersSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">For Trout Farmers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our network and gain access to premium markets in Gurgaon, Delhi NCR, and Chandigarh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-secondary/20 p-6 rounded-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
              <TrendingUp className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Market Access</h3>
            <p className="text-muted-foreground mb-4">
              We connect you directly to premium markets in urban areas, expanding your reach beyond local customers.
            </p>
          </div>
          
          <div className="bg-secondary/20 p-6 rounded-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
              <Tractor className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Technical Support</h3>
            <p className="text-muted-foreground mb-4">
              Access guides on raceway construction, water management, and fish rearing techniques.
            </p>
          </div>
          
          <div className="bg-secondary/20 p-6 rounded-lg">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Community</h3>
            <p className="text-muted-foreground mb-4">
              Join a network of trout farmers sharing knowledge, resources, and opportunities.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <Button size="lg" asChild>
            <Link to="/for-farmers">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FarmersSection;
