
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, Tractor, Lightbulb, TrendingUp, HelpCircle } from "lucide-react";

const ForFarmers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                For Trout Farmers in Himachal Pradesh
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                Join our network and gain access to premium markets in Gurgaon, Delhi NCR, and Chandigarh. We help you focus on what you do best - farming quality trout.
              </p>
              <Button size="lg" asChild>
                <Link to="/contact">
                  Become a Partner Farmer
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
              How We Support Trout Farmers
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-secondary/20 p-6 rounded-lg flex gap-4">
                <div className="mt-1">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Market Access</h3>
                  <p className="text-muted-foreground">
                    We connect you directly to premium markets in Gurgaon, Delhi NCR, and Chandigarh, expanding your reach beyond local customers and tourists.
                  </p>
                </div>
              </div>
              
              <div className="bg-secondary/20 p-6 rounded-lg flex gap-4">
                <div className="mt-1">
                  <Tractor className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Technical Support</h3>
                  <p className="text-muted-foreground">
                    Access guides on raceway construction, water management, and fish rearing techniques to improve your farm's efficiency and productivity.
                  </p>
                </div>
              </div>
              
              <div className="bg-secondary/20 p-6 rounded-lg flex gap-4">
                <div className="mt-1">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Marketing Knowledge</h3>
                  <p className="text-muted-foreground">
                    Learn about packaging, pricing, and promoting your trout to maximize profits and build a sustainable business.
                  </p>
                </div>
              </div>
              
              <div className="bg-secondary/20 p-6 rounded-lg flex gap-4">
                <div className="mt-1">
                  <HelpCircle className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Problem Solving</h3>
                  <p className="text-muted-foreground">
                    Get help with common challenges like supply shortages, disease management, and financial planning specific to trout farming.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Government Support Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">
              Government Support Programs
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              The Himachal Pradesh Fisheries Department offers various support programs for trout farmers. We can help you navigate and access these benefits.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Financial & Infrastructure Support</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Subsidies for building raceways under PMMSY scheme</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Support for hatchery and feed unit construction</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Assistance for RAS (Recirculating Aquaculture Systems)</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Supply & Training</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Access to fingerlings and feed at subsidized rates</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Training courses at Patlikuhl Training Centre</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Technical assistance for farm management</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Risk Management</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Trout Livestock Insurance Scheme with 65% premium coverage</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Disaster relief measures for natural calamities</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Market Development</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Connections to larger markets beyond Himachal Pradesh</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">Support for product development and packaging</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Ready to Join Our Farmer Network?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're an established trout farmer or just starting out, we can help you access better markets and maximize your profits.
            </p>
            <Button size="lg" asChild>
              <Link to="/contact">
                Contact Us Today
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ForFarmers;
