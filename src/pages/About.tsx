
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, Users, TrendingUp, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                About Himalayan Trout Market
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                We're on a mission to transform the trout market in Himachal Pradesh by connecting farmers with consumers in urban centers and promoting this healthy, sustainable fish.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Our Story
                </h2>
                <p className="text-muted-foreground mb-4">
                  The Himalayan Trout Market started with a simple observation: while trout farming in Himachal Pradesh was thriving, farmers struggled to find reliable markets for their premium fish beyond local tourists and hotels.
                </p>
                <p className="text-muted-foreground mb-4">
                  At the same time, urban consumers in nearby cities like Gurgaon, Delhi NCR, and Chandigarh had limited access to fresh, sustainably farmed trout - a nutritious alternative to commonly available fish.
                </p>
                <p className="text-muted-foreground mb-6">
                  We created this platform to bridge this gap, helping farmers focus on what they do best - raising quality trout - while connecting them to urban markets where demand for premium, healthy food options is growing.
                </p>
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

        {/* Mission & Vision Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Our Mission & Vision</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground mb-6">
                  To create a sustainable ecosystem that connects trout farmers in Himachal Pradesh with urban consumers, providing fair prices to farmers and fresh, healthy fish to consumers.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">Support local farming communities in Himachal Pradesh</p>
                  </div>
                  <div className="flex gap-3">
                    <Heart className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">Promote trout as a healthy, sustainable protein source</p>
                  </div>
                  <div className="flex gap-3">
                    <TrendingUp className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">Expand the market for Himalayan trout in urban areas</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Our Vision</h3>
                <p className="text-muted-foreground mb-6">
                  To make Himalayan trout a staple in urban Indian diets while establishing a thriving, sustainable trout industry in Himachal Pradesh that supports rural livelihoods.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Leaf className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">Create a model for sustainable aquaculture that preserves natural resources</p>
                  </div>
                  <div className="flex gap-3">
                    <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">Empower farmers with knowledge and market access</p>
                  </div>
                  <div className="flex gap-3">
                    <TrendingUp className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-muted-foreground">Establish Himalayan trout as a premium food product across India</p>
                  </div>
                </div>
              </div>
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
                    src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&q=80" 
                    alt="Sustainable trout farming" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold mb-6 text-foreground">
                  Our Commitment to Sustainability
                </h2>
                <p className="text-muted-foreground mb-4">
                  Trout farming in Himachal Pradesh leverages the natural cold water resources of the region, making it inherently sustainable when done correctly. We work with farmers who follow best practices for water management and fish health.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our partner farms minimize environmental impact while ensuring the health and quality of the fish. This includes careful management of water flow, stocking densities, and feed quality.
                </p>
                <p className="text-muted-foreground mb-6">
                  By supporting local trout farmers and promoting sustainable aquaculture, we're helping to build a food system that's better for people and the planet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section (simplified) */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're a dedicated team of aquaculture experts, logistics specialists, and marketing professionals with a passion for sustainable food systems and rural development.
            </p>
            <Button asChild>
              <Link to="/contact">
                Connect With Us
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
