import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const WhatsHere = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-earth-brown mb-8 text-center">What's Here</h1>
          <div className="bg-soft-yellow p-8 rounded-lg text-center">
            <p className="text-lg text-muted-foreground">
              Discover community kitchens, available meals, and local food sharing opportunities in your area.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              This page will show real-time information about available meals once connected to the database.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WhatsHere;