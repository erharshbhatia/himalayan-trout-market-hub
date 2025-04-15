
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Package, MapPin } from "lucide-react";

const bulkProducts = [
  {
    id: 1,
    name: "Fresh Whole Trout (Bulk)",
    price: "₹550/kg",
    description: "Fresh whole trout from the mountain streams of Himachal Pradesh for restaurants and catering services.",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Trout Fillets (Bulk)",
    price: "₹750/kg",
    description: "Boneless trout fillets, perfect for high-end restaurants and hotels. Save preparation time.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Smoked Trout (Bulk)",
    price: "₹850/kg",
    description: "Traditionally smoked trout for hotels and fine dining establishments. Great for appetizers.",
    image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?auto=format&fit=crop&w=600&q=80",
  },
];

const ProductsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Bulk Orders for Businesses</h2>
          <p className="text-lg text-primary font-semibold mb-2 italic">
            Vocal for Local: Taste the Freshness of Himalayan Trout
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium trout products for restaurants, hotels, and catering services in Gurgaon, Delhi NCR, and Chandigarh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bulkProducts.map((product) => (
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
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Sourced from Himachal Pradesh</span>
                </div>
                <Button className="w-full" asChild>
                  <Link to="/products" className="flex items-center justify-center gap-2">
                    <Package className="h-4 w-4" />
                    <span>View Bulk Options</span>
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg" asChild>
            <Link to="/products">Explore All Bulk Options</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
