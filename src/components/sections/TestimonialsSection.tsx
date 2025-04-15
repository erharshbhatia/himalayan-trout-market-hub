
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The trout from Himalayan Trout Market is exceptionally fresh and tastes amazing. The delivery is prompt and their packaging keeps the fish in perfect condition.",
    author: "Vikram Singh",
    position: "Executive Chef, Gurgaon",
  },
  {
    quote: "As a restaurant owner, quality and consistency are paramount. Himalayan Trout Market delivers on both fronts, with the added benefit of supporting local farmers.",
    author: "Priya Sharma",
    position: "Restaurant Owner, Delhi",
  },
  {
    quote: "Their sustainably farmed trout has become a staple in our household. The convenience of doorstep delivery in Chandigarh makes it even better.",
    author: "Rajiv Khanna",
    position: "Food Enthusiast, Chandigarh",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from chefs, restaurants, and home cooks who have experienced the quality of our Himalayan trout.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-secondary/30 p-6 rounded-lg relative">
              <Quote className="h-8 w-8 text-primary/20 absolute top-4 right-4" />
              <p className="text-muted-foreground mb-6 italic">{testimonial.quote}</p>
              <div>
                <h4 className="font-semibold text-foreground">{testimonial.author}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
