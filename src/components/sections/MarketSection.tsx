
import { MapPin } from "lucide-react";

const markets = [
  {
    city: "Gurgaon",
    description: "Premium trout delivery to Gurgaon's residential and commercial areas, serving exclusive restaurants and health-conscious consumers.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=600&q=80",
  },
  {
    city: "Delhi NCR",
    description: "Regular deliveries across Delhi NCR, bringing fresh Himalayan trout to homes, restaurants, and premium grocery stores.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80",
  },
  {
    city: "Chandigarh",
    description: "Serving Chandigarh with sustainable, farm-fresh trout, catering to a growing market of health-conscious consumers.",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=600&q=80",
  },
];

const MarketSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-secondary to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Our Key Markets</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We specialize in delivering fresh trout to these urban centers, connecting Himalayan farmers with premium markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {markets.map((market, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-48 overflow-hidden">
                <img 
                  src={market.image} 
                  alt={`${market.city} market`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <h3 className="text-xl font-semibold text-foreground">{market.city}</h3>
                </div>
                <p className="text-muted-foreground">{market.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
