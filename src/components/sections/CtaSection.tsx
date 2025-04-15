
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Experience Premium Himalayan Trout?
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
          Order fresh trout delivered to your doorstep in Gurgaon, Delhi NCR, and Chandigarh, or learn how to become a partner farmer.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="outline" className="bg-white text-primary border-white hover:bg-white/90" asChild>
            <Link to="/products">
              Shop Our Products
            </Link>
          </Button>
          <Button size="lg" className="bg-transparent border border-white hover:bg-white/10" asChild>
            <Link to="/contact" className="flex items-center gap-2">
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
