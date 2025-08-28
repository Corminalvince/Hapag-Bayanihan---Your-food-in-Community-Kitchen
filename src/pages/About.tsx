import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-earth-brown mb-8 text-center">About Hapag Bayanihan</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-soft-yellow p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-semibold text-earth-brown mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                Hapag Bayanihan is dedicated to building stronger communities through shared meals and mutual support. 
                We believe that food is more than sustenance—it's a bridge that connects hearts and creates lasting bonds.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-cream p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-earth-brown mb-3">What We Do</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Connect community kitchens with families in need</li>
                  <li>• Coordinate volunteer drivers for meal delivery</li>
                  <li>• Facilitate food donations and inventory management</li>
                  <li>• Build networks of care and support</li>
                </ul>
              </div>

              <div className="bg-cream p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-earth-brown mb-3">Our Values</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Community-centered approach</li>
                  <li>• Dignity and respect for all</li>
                  <li>• Sustainable food sharing</li>
                  <li>• Cultural celebration through food</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;