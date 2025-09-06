import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";
import jacketImage from "@/assets/product-jacket.jpg";
import cameraImage from "@/assets/product-camera.jpg";
import tableImage from "@/assets/product-table.jpg";

const featuredItems = [
  {
    id: 1,
    name: "Vintage Leather Jacket",
    price: 85,
    originalPrice: 220,
    image: jacketImage,
    seller: "EcoStyler",
    rating: 4.8,
    condition: "Excellent",
    location: "Portland, OR"
  },
  {
    id: 2,
    name: "Refurbished Film Camera",
    price: 120,
    originalPrice: 350,
    image: cameraImage,
    seller: "TechRevive",
    rating: 4.9,
    condition: "Like New",
    location: "Seattle, WA"
  },
  {
    id: 3,
    name: "Upcycled Oak Side Table",
    price: 65,
    originalPrice: 180,
    image: tableImage,
    seller: "WoodCrafters",
    rating: 4.7,
    condition: "Very Good",
    location: "Austin, TX"
  },
  {
    id: 4,
    name: "Designer Silk Scarf",
    price: 35,
    originalPrice: 120,
    image: jacketImage,
    seller: "LuxFinds",
    rating: 4.6,
    condition: "Good",
    location: "San Francisco, CA"
  }
];

const FeaturedItems = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Featured Treasures</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hand-picked sustainable finds from our community of eco-conscious sellers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredItems.map((item) => (
            <Card 
              key={item.id} 
              className="group hover:shadow-card transition-all duration-300 cursor-pointer border-sage/30 hover:border-primary/50"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <button className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                    <Heart className="h-4 w-4 text-muted-foreground hover:text-red-500" />
                  </button>
                  <div className="absolute top-3 left-3 bg-accent text-white px-2 py-1 rounded-full text-xs font-medium">
                    {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% off
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-primary mb-2 group-hover:text-eco-dark transition-colors">
                    {item.name}
                  </h3>
                  
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 fill-accent text-accent" />
                      <span className="text-sm ml-1 text-muted-foreground">{item.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground ml-2">• {item.condition}</span>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-primary">${item.price}</span>
                      <span className="text-sm text-muted-foreground line-through">${item.originalPrice}</span>
                    </div>
                  </div>

                  <div className="text-xs text-muted-foreground mb-3">
                    by {item.seller} • {item.location}
                  </div>

                  <Button variant="eco" className="w-full">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
            View All Items
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;