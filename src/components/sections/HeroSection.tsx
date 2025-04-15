
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-primary/10 to-secondary">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="max-w-3xl">
          <p className="text-lg md:text-xl text-primary font-semibold mb-2 italic">
            Vocal for Local: Taste the Freshness of Himalayan Trout
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Fresh Himalayan Trout <span className="text-primary">Delivered to Your Doorstep</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            Connecting trout farmers from the pristine waters of Himachal Pradesh with businesses in Gurgaon, Delhi NCR, and Chandigarh.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link to="/products">
                Bulk Orders
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/for-farmers" className="flex items-center gap-2">
                For Farmers <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-90 rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-foreground mb-2">Premium Quality</h3>
              <p className="text-muted-foreground text-sm">Raised in the pristine cold waters of Himachal Pradesh</p>
            </div>
            <div className="bg-white bg-opacity-90 rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-foreground mb-2">Sustainable Farming</h3>
              <p className="text-muted-foreground text-sm">Environmentally responsible aquaculture practices</p>
            </div>
            <div className="bg-white bg-opacity-90 rounded-lg p-4 shadow-sm">
              <h3 className="font-semibold text-foreground mb-2">Farm to Table</h3>
              <p className="text-muted-foreground text-sm">Direct delivery to Gurgaon, Delhi NCR & Chandigarh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
