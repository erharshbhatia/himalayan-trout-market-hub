
import { Link } from "react-router-dom";
import { Menu, X, Fish, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Fish className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Himalayan Trout Market</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/for-farmers" className="text-foreground hover:text-primary transition-colors">
              For Farmers
            </Link>
            <Link to="/for-consumers" className="text-foreground hover:text-primary transition-colors">
              For Consumers
            </Link>
            <Link to="/products" className="text-foreground hover:text-primary transition-colors">
              Our Products
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Button className="bg-primary text-white flex items-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              <span>Order Now</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-foreground">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link to="/" className="block py-2 text-foreground hover:text-primary" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/for-farmers" className="block py-2 text-foreground hover:text-primary" onClick={toggleMenu}>
              For Farmers
            </Link>
            <Link to="/for-consumers" className="block py-2 text-foreground hover:text-primary" onClick={toggleMenu}>
              For Consumers
            </Link>
            <Link to="/products" className="block py-2 text-foreground hover:text-primary" onClick={toggleMenu}>
              Our Products
            </Link>
            <Link to="/about" className="block py-2 text-foreground hover:text-primary" onClick={toggleMenu}>
              About Us
            </Link>
            <Link to="/contact" className="block py-2 text-foreground hover:text-primary" onClick={toggleMenu}>
              Contact
            </Link>
            <Button className="w-full bg-primary text-white flex items-center justify-center gap-2" onClick={toggleMenu}>
              <ShoppingCart className="h-4 w-4" />
              <span>Order Now</span>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
