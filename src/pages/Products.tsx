
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingCart, Truck, Calendar, Star } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Fresh Whole Trout",
    price: "₹650/kg",
    description: "Fresh whole trout from the mountain streams of Himachal Pradesh, cleaned and ready to cook. Perfect for baking, grilling, or pan-frying.",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=600&q=80",
    category: "fresh",
    minimumOrder: "1 kg",
    deliveryAreas: ["Gurgaon", "Delhi NCR", "Chandigarh"],
  },
  {
    id: 2,
    name: "Trout Fillets",
    price: "₹850/kg",
    description: "Boneless trout fillets, perfect for grilling, baking, or pan-frying with minimal preparation. Ideal for quick gourmet meals.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    category: "fresh",
    minimumOrder: "500 g",
    deliveryAreas: ["Gurgaon", "Delhi NCR", "Chandigarh"],
  },
  {
    id: 3,
    name: "Smoked Trout",
    price: "₹950/kg",
    description: "Traditionally smoked trout with a delicate flavor, ready to eat or use in your favorite recipes. Great for salads, pasta, or appetizers.",
    image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=600&q=80",
    category: "prepared",
    minimumOrder: "250 g",
    deliveryAreas: ["Gurgaon", "Delhi NCR", "Chandigarh"],
  },
  {
    id: 4,
    name: "Trout Steaks",
    price: "₹750/kg",
    description: "Thick-cut trout steaks with bone-in for extra flavor. Perfect for grilling or pan-searing for a hearty meal.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=600&q=80",
    category: "fresh",
    minimumOrder: "500 g",
    deliveryAreas: ["Gurgaon", "Delhi NCR"],
  },
  {
    id: 5,
    name: "Marinated Trout",
    price: "₹850/kg",
    description: "Trout fillets marinated in our special blend of herbs and spices, ready to cook. Simply grill or bake for a quick meal.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=600&q=80",
    category: "prepared",
    minimumOrder: "500 g",
    deliveryAreas: ["Gurgaon", "Delhi NCR", "Chandigarh"],
  },
  {
    id: 6,
    name: "Trout Roe",
    price: "₹1200/100g",
    description: "Premium trout roe with a mild flavor and beautiful orange color. Perfect for garnishing or as a luxurious appetizer.",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=600&q=80",
    category: "specialty",
    minimumOrder: "50 g",
    deliveryAreas: ["Gurgaon", "Delhi NCR"],
  },
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-foreground mb-4 text-center">
              Our Premium Trout Products
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-center">
              Explore our range of fresh and prepared trout products, delivered to Gurgaon, Delhi NCR, and Chandigarh.
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
              <Button 
                variant={selectedCategory === "specialty" ? "default" : "outline"} 
                onClick={() => setSelectedCategory("specialty")}
              >
                Specialty Items
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
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>Min. Order: {product.minimumOrder}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Truck className="h-4 w-4 text-primary" />
                        <span>Delivers to: {product.deliveryAreas.join(", ")}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-muted-foreground ml-1">(5.0)</span>
                      </div>
                    </div>
                    
                    <Button className="w-full" asChild>
                      <a href="#" className="flex items-center justify-center gap-2">
                        <ShoppingCart className="h-4 w-4" />
                        <span>Add to Cart</span>
                      </a>
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

        {/* Ordering Info Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
              How to Order
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary mx-auto">
                  <ShoppingCart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Select Your Products</h3>
                <p className="text-muted-foreground">
                  Browse our range of fresh and prepared trout products and add your selections to cart.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary mx-auto">
                  <Calendar className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Choose Delivery Date</h3>
                <p className="text-muted-foreground">
                  Select your preferred delivery date. We deliver to Gurgaon, Delhi NCR, and Chandigarh.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary mx-auto">
                  <Truck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-foreground">Receive Fresh Trout</h3>
                <p className="text-muted-foreground">
                  Your order will be delivered in temperature-controlled packaging to ensure freshness.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-foreground text-center">Delivery Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-2">Delivery Areas</h4>
                  <p className="text-muted-foreground mb-4">
                    We currently deliver to Gurgaon, Delhi NCR, and Chandigarh. Specific delivery areas may vary by product.
                  </p>
                  <h4 className="font-semibold mb-2">Minimum Order</h4>
                  <p className="text-muted-foreground">
                    Minimum order values vary by product and are listed on each product page. For bulk orders, please contact us directly.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Delivery Schedule</h4>
                  <p className="text-muted-foreground mb-4">
                    Orders are delivered on Tuesdays, Thursdays, and Saturdays. Please place your order at least 24 hours in advance.
                  </p>
                  <h4 className="font-semibold mb-2">Packaging</h4>
                  <p className="text-muted-foreground">
                    All products are delivered in insulated, temperature-controlled packaging to ensure freshness and quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bulk Orders CTA */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Interested in Bulk Orders?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              For restaurants, hotels, or catering services, we offer special bulk pricing and dedicated delivery options.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/contact">
                Contact Us for Bulk Orders
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
