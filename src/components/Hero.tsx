import { Button } from "@/components/ui/button";
import communityMeal from "@/assets/community-meal.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-hero-yellow via-primary to-warm-orange min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-earth-brown leading-tight mb-6">
              Bringing Communities Together, One Meal at a Time.
            </h1>
            
            <p className="text-lg md:text-xl text-earth-brown/80 mb-8 max-w-2xl">
              Connect with your community through food sharing. Find local kitchens, 
              request meals, or become a driver to help deliver hope and nourishment 
              to those who need it most.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg">
                Read more
              </Button>
              <Button variant="outline" size="lg" className="border-earth-brown text-earth-brown hover:bg-earth-brown hover:text-white">
                Join Our Community
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={communityMeal} 
                alt="Community buffet with traditional Filipino dishes"
                className="w-full h-[400px] object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-warm max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-hero-yellow rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-earth-brown" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-earth-brown">1,200+</p>
                  <p className="text-sm text-muted-foreground">Meals Shared</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;