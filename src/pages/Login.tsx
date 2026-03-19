import { Button } from "@/components/ui/button";
import { PawPrint } from "lucide-react";
import { useState } from "react";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="flex items-center justify-center py-16 px-4">
      <div className="bg-card border border-border rounded-lg p-8 shadow-lg w-full max-w-md">
        <div className="text-center mb-6">
          <PawPrint className="h-10 w-10 text-primary mx-auto mb-2" />
          <h1 className="font-display text-3xl font-bold text-foreground">
            {isSignUp ? "Create Account" : "Welcome Back"}
          </h1>
          <p className="text-muted-foreground mt-1">
            {isSignUp ? "Join the PawPromise family!" : "Log in to your PawPromise account"}
          </p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          {isSignUp && (
            <div>
              <label className="block text-sm font-semibold text-foreground mb-1">Full Name</label>
              <input required className="w-full bg-secondary rounded-md px-4 py-2 text-foreground outline-none focus:ring-2 focus:ring-ring" />
            </div>
          )}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Email</label>
            <input required type="email" className="w-full bg-secondary rounded-md px-4 py-2 text-foreground outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-foreground mb-1">Password</label>
            <input required type="password" className="w-full bg-secondary rounded-md px-4 py-2 text-foreground outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <Button type="submit" className="w-full font-display font-semibold">
            {isSignUp ? "Sign Up 🐾" : "Log In 🐾"}
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-6">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <button onClick={() => setIsSignUp(!isSignUp)} className="text-primary font-semibold hover:underline">
            {isSignUp ? "Log In" : "Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
