import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const BeOurDriver = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-earth-brown mb-8 text-center">Be Our Driver</h1>
          <div className="bg-soft-yellow p-8 rounded-lg text-center">
            <p className="text-lg text-muted-foreground">
              Join our network of volunteer drivers and help deliver meals to families in need.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Driver registration and management features will be available once connected to the database.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BeOurDriver;