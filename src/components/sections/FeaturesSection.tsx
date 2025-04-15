
import { Shield, Truck, Award, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Premium Quality",
    description: "Our trout is raised in pristine cold mountain waters with controlled conditions for the best taste and texture.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "We deliver fresh or flash-frozen trout directly to Gurgaon, Delhi NCR, and Chandigarh within 24-48 hours.",
  },
  {
    icon: Award,
    title: "Sustainably Sourced",
    description: "Our farming practices are eco-friendly and sustainable, preserving the natural environment.",
  },
  {
    icon: Users,
    title: "Supporting Local Farmers",
    description: "By purchasing our trout, you directly support the livelihoods of farmers in Himachal Pradesh.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Why Choose Our Himalayan Trout?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium quality trout from the pristine waters of Himachal Pradesh, delivered fresh to your doorstep in Gurgaon, Delhi NCR, and Chandigarh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
