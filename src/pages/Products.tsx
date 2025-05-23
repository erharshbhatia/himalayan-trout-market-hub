
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingCart, Truck, Calendar, Star, Package, HandShake, MapPin } from "lucide-react";
import { useState } from "react";

const bulkProducts = [
  {
    id: 1,
    name: "Fresh Whole Trout (Bulk)",
    price: "₹550/kg (Min. 10kg)",
    description: "Fresh whole trout from the mountain streams of Himachal Pradesh, cleaned and ready to cook. Perfect for restaurants, hotels, and catering services.",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=600&q=80",
    category: "fresh",
    minimumOrder: "10 kg",
    deliveryAreas: ["Gurgaon", "Delhi NCR", "Chandigarh"],
  },
  {
    id: 2,
    name: "Trout Fillets (Bulk)",
    price: "₹750/kg (Min. 5kg)",
    description: "Boneless trout fillets, perfect for high-end restaurants and catering. Save preparation time while offering a premium menu item.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    category: "fresh",
    minimumOrder: "5 kg",
    deliveryAreas: ["Gurgaon", "Delhi NCR", "Chandigarh"],
  },
  {
    id: 3,
    name: "Smoked Trout (Bulk)",
    price: "₹850/kg (Min. 3kg)",
    description: "Traditionally smoked trout with a delicate flavor, ready to serve at hotels and fine dining establishments. Great for appetizers and gourmet dishes.",
    image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=600&q=80",
    category: "prepared",
    minimumOrder: "3 kg",
    deliveryAreas: ["Gurgaon", "Delhi NCR", "Chandigarh"],
  },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const filteredProducts = selectedCategory === "all" 
    ? bulkProducts 
    : bulkProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section with Slogan */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-foreground mb-4 text-center">
              Bulk Orders for Businesses
            </h1>
            <p className="text-lg text-primary font-semibold mb-2 text-center italic">
              Vocal for Local: Taste the Freshness of Himalayan Trout
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-center">
              Premium trout products for restaurants, hotels, and catering services in Gurgaon, Delhi NCR, and Chandigarh.
            </p>
            
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Button 
                variant={selectedCategory === "all" ? "default" : "outline"} 
                onClick={() => setSelectedCategory("all")}
              >
                All Products
              </Button>
              <Button 
                variant={selectedCategory === "fresh" ? "default" : "outline"} 
                onClick={() => setSelectedCategory("fresh")}
              >
                Fresh Trout
              </Button>
              <Button 
                variant={selectedCategory === "prepared" ? "default" : "outline"} 
                onClick={() => setSelectedCategory("prepared")}
              >
                Prepared Products
              </Button>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white border border-muted rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-foreground">{product.name}</h3>
                      <span className="text-primary font-semibold">{product.price}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Package className="h-4 w-4 text-primary" />
                        <span>Min. Order: {product.minimumOrder}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Truck className="h-4 w-4 text-primary" />
                        <span>Delivers to: {product.deliveryAreas.join(", ")}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>Sourced from Himachal Pradesh</span>
                      </div>
                    </div>
                    
                    <Button className="w-full" asChild>
                      <Link to="/contact" className="flex items-center justify-center gap-2">
                        <ShoppingCart className="h-4 w-4" />
                        <span>Inquire About Bulk Order</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No products found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Bulk Order Benefits Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
              Benefits of Bulk Orders
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary mx-auto">
                  <Package className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Competitive Pricing</h3>
                <p className="text-muted-foreground">
                  Benefit from wholesale rates that help improve your bottom line while offering premium quality to your customers.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary mx-auto">
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Scheduled Deliveries</h3>
                <p className="text-muted-foreground">
                  Set up regular delivery schedules to ensure consistent supply for your business needs.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary mx-auto">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Supporting Local</h3>
                <p className="text-muted-foreground">
                  By choosing Himalayan trout, you support local farmers and sustainable aquaculture in Himachal Pradesh.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-foreground text-center">Delivery Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-2">Delivery Areas</h4>
                  <p className="text-muted-foreground mb-4">
                    We currently deliver bulk orders to Gurgaon, Delhi NCR, and Chandigarh. Dedicated delivery services for business clients.
                  </p>
                  <h4 className="font-semibold mb-2">Minimum Order</h4>
                  <p className="text-muted-foreground">
                    Minimum order quantities vary by product. For custom arrangements, please contact our business team directly.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Delivery Schedule</h4>
                  <p className="text-muted-foreground mb-4">
                    Bulk orders are delivered on Tuesdays and Fridays. Please place your order at least 48 hours in advance.
                  </p>
                  <h4 className="font-semibold mb-2">Quality Assurance</h4>
                  <p className="text-muted-foreground">
                    All products undergo stringent quality checks and are delivered in temperature-controlled packaging to maintain freshness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Place Your Bulk Order?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Our business team is ready to assist you with custom orders, pricing, and delivery schedules.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/contact">
                Contact Our Business Team
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
