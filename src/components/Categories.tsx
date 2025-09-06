import { Card, CardContent } from "@/components/ui/card";
import clothingImage from "@/assets/clothing-category.jpg";
import electronicsImage from "@/assets/electronics-category.jpg";
import furnitureImage from "@/assets/furniture-category.jpg";

const categories = [
  {
    name: "Fashion & Clothing",
    image: clothingImage,
    itemCount: "12,500+ items",
    description: "Vintage finds, designer pieces, everyday wear"
  },
  {
    name: "Electronics & Tech",
    image: electronicsImage,
    itemCount: "8,200+ items",
    description: "Refurbished gadgets, vintage electronics"
  },
  {
    name: "Home & Furniture",
    image: furnitureImage,
    itemCount: "6,800+ items",
    description: "Upcycled furniture, home decor, vintage pieces"
  },
  {
    name: "Books & Media",
    image: clothingImage,
    itemCount: "15,300+ items",
    description: "Used books, vinyl records, games"
  },
  {
    name: "Sports & Outdoor",
    image: electronicsImage,
    itemCount: "4,100+ items",
    description: "Pre-loved gear, outdoor equipment"
  },
  {
    name: "Collectibles & Art",
    image: furnitureImage,
    itemCount: "3,500+ items",
    description: "Unique finds, vintage collectibles, artwork"
  }
];

const Categories = () => {
  return (
    <section className="py-16 px-4 bg-sage/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Shop by Category</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover amazing second-hand treasures across all categories while helping the planet
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-card transition-all duration-300 cursor-pointer border-sage/30 hover:border-primary/50"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-eco-dark transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground mb-3">{category.description}</p>
                  <div className="text-sm font-medium text-accent">{category.itemCount}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;