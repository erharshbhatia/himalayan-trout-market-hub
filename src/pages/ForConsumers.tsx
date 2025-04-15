
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Utensils, Clock, Leaf } from "lucide-react";

const ForConsumers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Healthy and Delicious Himalayan Trout
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                Discover the health benefits, culinary versatility, and exceptional taste of premium trout from the pristine waters of Himachal Pradesh.
              </p>
              <Button size="lg" asChild>
                <Link to="/products">
                  Shop Trout Products
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Health Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Why Trout is a Superfood
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Heart className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">Rich in Omega-3 Fatty Acids</h3>
                      <p className="text-muted-foreground">
                        Trout is loaded with omega-3 fatty acids that support heart and brain health, reducing the risk of cardiovascular disease.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Heart className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">High-Quality Protein</h3>
                      <p className="text-muted-foreground">
                        A 100g serving of trout provides around 20g of high-quality protein, essential for muscle maintenance and growth.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Heart className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">Vitamins and Minerals</h3>
                      <p className="text-muted-foreground">
                        Trout is an excellent source of vitamin D, B12, and minerals like selenium and potassium, supporting overall health.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Heart className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">Low in Mercury</h3>
                      <p className="text-muted-foreground">
                        Unlike some larger fish, trout generally contains lower levels of mercury, making it a safer choice for regular consumption.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=800&q=80" 
                    alt="Fresh trout" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cooking Ideas Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
              Delicious Ways to Prepare Trout
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Trout is incredibly versatile and easy to prepare. Here are some popular methods to enjoy this delicious fish.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4">
                  <Utensils className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Pan-Fried Trout</h3>
                <p className="text-muted-foreground mb-4">
                  Season trout fillets with salt, pepper, and herbs. Pan-fry in butter or olive oil for 3-4 minutes per side until golden and flaky.
                </p>
                <div className="flex items-center gap-2 text-primary">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">Ready in 15 minutes</span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4">
                  <Utensils className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Baked Whole Trout</h3>
                <p className="text-muted-foreground mb-4">
                  Stuff a whole trout with lemon slices, garlic, and dill. Bake at 190°C for 20-25 minutes until the flesh is opaque and flakes easily.
                </p>
                <div className="flex items-center gap-2 text-primary">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">Ready in 30 minutes</span>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4">
                  <Utensils className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Trout Curry</h3>
                <p className="text-muted-foreground mb-4">
                  Create a delicious Indian-style curry with trout pieces, tomatoes, onions, and traditional spices for a fusion dish with amazing flavor.
                </p>
                <div className="flex items-center gap-2 text-primary">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">Ready in 40 minutes</span>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Button variant="outline" asChild>
                <Link to="/products">
                  Browse Our Trout Products
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Sustainability Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" 
                    alt="Sustainable trout farming" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Sustainable Trout Farming
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Leaf className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">Environmentally Responsible</h3>
                      <p className="text-muted-foreground">
                        Our partner farms use sustainable practices that minimize environmental impact while maximizing fish health and quality.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Leaf className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">Supporting Local Communities</h3>
                      <p className="text-muted-foreground">
                        By purchasing our trout, you're supporting rural economies in Himachal Pradesh and helping preserve traditional livelihoods.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Leaf className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">Reducing Carbon Footprint</h3>
                      <p className="text-muted-foreground">
                        Our efficient logistics minimize the carbon footprint of delivering trout from mountain farms to urban markets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Taste the Difference of Himalayan Trout
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Experience the exceptional flavor, texture, and health benefits of fresh trout delivered to your doorstep in Gurgaon, Delhi NCR, and Chandigarh.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/products" className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                <span>Shop Now</span>
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ForConsumers;
