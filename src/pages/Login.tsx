import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Login = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-20">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-lg shadow-card border border-border">
            <h1 className="text-3xl font-bold text-earth-brown mb-8 text-center">Login</h1>
            
            <div className="bg-soft-yellow p-6 rounded-lg text-center">
              <p className="text-lg text-muted-foreground mb-4">
                Authentication system coming soon!
              </p>
              <p className="text-sm text-muted-foreground">
                To implement the full authentication system with user management, driver profiles, 
                and admin access as shown in your database schema, we'll need to connect to Supabase.
              </p>
              <Button variant="cta" className="mt-4" disabled>
                Connect to Database First
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;