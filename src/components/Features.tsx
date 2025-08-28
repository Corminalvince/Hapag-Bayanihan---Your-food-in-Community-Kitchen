import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Community Kitchens",
    description: "Discover local community kitchens offering fresh, home-cooked meals in your neighborhood.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
      </svg>
    )
  },
  {
    title: "Food Delivery",
    description: "Get nutritious meals delivered to your doorstep by our dedicated community drivers.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z"/>
      </svg>
    )
  },
  {
    title: "Volunteer Network",
    description: "Join our network of volunteers and drivers to help strengthen community bonds through food sharing.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM9 7a1 1 0 002 0 1 1 0 00-2 0zM7 16a7 7 0 1010-5.92V11a3 3 0 00-3-3H9a3 3 0 00-3 3v1.08A6.987 6.987 0 007 16z"/>
      </svg>
    )
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-soft-yellow to-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-earth-brown mb-4">
            How Hapag Bayanihan Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our platform connects community kitchens, hungry families, and volunteer drivers 
            to create a network of care and nourishment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1 border-border/50">
              <CardHeader>
                <div className="w-16 h-16 bg-hero-yellow rounded-full flex items-center justify-center mx-auto mb-4 text-earth-brown">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl text-earth-brown">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;