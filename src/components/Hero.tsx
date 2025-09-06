import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-marketplace.jpg";

const Hero = () => {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-eco-dark/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Discover Sustainable
          <span className="block text-accent">Second-Hand Treasures</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
          Join our eco-friendly marketplace where every purchase helps reduce waste and creates a more sustainable future
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="eco" size="lg" className="text-lg px-8 py-6">
            Start Shopping
          </Button>
          <Button variant="earth" size="lg" className="text-lg px-8 py-6">
            Sell Your Items
          </Button>
        </div>
        
        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl font-bold text-accent">50K+</div>
            <div className="text-sm opacity-80">Items Saved from Waste</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl font-bold text-accent">25K+</div>
            <div className="text-sm opacity-80">Happy Eco-Warriors</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-3xl font-bold text-accent">500T</div>
            <div className="text-sm opacity-80">CO₂ Emissions Reduced</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;