
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Why Trout Farming in Himachal Pradesh Matters
            </h2>
            <p className="text-muted-foreground mb-4">
              Himachal Pradesh is ideal for trout farming, with its cold, clear streams and rivers perfect for raising this high-value fish. Trout production has soared from 0.54 tonnes in 1996-97 to 456.73 metric tonnes in 2017-18, backed by 3,000 km of fishery resources.
            </p>
            <p className="text-muted-foreground mb-6">
              Despite this potential, farmers face marketing challenges that limit their reach. Our platform solves these issues by creating a robust market for trout, connecting farmers directly with consumers in urban areas.
            </p>
            <Button asChild>
              <Link to="/about">Learn More About Our Mission</Link>
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" 
                alt="Pristine waters of Himachal Pradesh" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-lg overflow-hidden shadow-lg hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=400&q=80" 
                alt="Trout fish close-up" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
