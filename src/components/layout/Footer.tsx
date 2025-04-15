
import { Link } from "react-router-dom";
import { Fish, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-foreground pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Fish className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">Himalayan Trout Market</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Connecting trout farmers from Himachal Pradesh with consumers in Delhi NCR, Gurgaon, and Chandigarh.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-primary hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/for-farmers" className="text-muted-foreground hover:text-primary transition-colors">
                  For Farmers
                </Link>
              </li>
              <li>
                <Link to="/for-consumers" className="text-muted-foreground hover:text-primary transition-colors">
                  For Consumers
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Key Markets</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Gurgaon</li>
              <li className="text-muted-foreground">Delhi NCR</li>
              <li className="text-muted-foreground">Chandigarh</li>
              <li className="text-muted-foreground">Himachal Pradesh</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-1" />
                <span className="text-muted-foreground">
                  Main Office, Kullu District,<br />Himachal Pradesh, India
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">info@himalayantrout.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-muted text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Himalayan Trout Market. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
