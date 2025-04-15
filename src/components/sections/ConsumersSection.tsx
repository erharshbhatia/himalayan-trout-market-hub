
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Utensils } from "lucide-react";

const ConsumersSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">For Consumers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the health benefits, culinary versatility, and exceptional taste of premium Himalayan trout.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Health Benefits</h3>
            <p className="text-muted-foreground mb-4">
              Trout is rich in omega-3 fatty acids, high-quality protein, and essential nutrients for overall health.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
              <Utensils className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Culinary Versatility</h3>
            <p className="text-muted-foreground mb-4">
              From simple pan-fried fillets to elaborate Indian curries, trout adapts beautifully to diverse cuisines.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
              <ShoppingCart className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Doorstep Delivery</h3>
            <p className="text-muted-foreground mb-4">
              Fresh trout delivered right to your home in Gurgaon, Delhi NCR, and Chandigarh in temperature-controlled packaging.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <Button size="lg" asChild>
            <Link to="/for-consumers">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConsumersSection;
