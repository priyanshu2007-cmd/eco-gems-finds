import { Leaf, Recycle, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">E</span>
              </div>
              <span className="text-xl font-bold">EcoFinds</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Creating a sustainable future, one second-hand treasure at a time.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Leaf className="h-5 w-5 text-accent" />
                <span className="text-sm">Carbon Neutral</span>
              </div>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold mb-4">Shop</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-white transition-colors">Fashion & Clothing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Electronics & Tech</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Home & Furniture</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Books & Media</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sports & Outdoor</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Selling Guidelines</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Safety Tips</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Impact */}
          <div>
            <h3 className="font-semibold mb-4">Our Impact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Recycle className="h-5 w-5 text-accent" />
                <div>
                  <div className="font-medium">50,000+</div>
                  <div className="text-sm text-primary-foreground/80">Items Recycled</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5 text-accent" />
                <div>
                  <div className="font-medium">500 Tons</div>
                  <div className="text-sm text-primary-foreground/80">CO₂ Saved</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
          <p>&copy; 2024 EcoFinds. Made with 💚 for a sustainable future.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;