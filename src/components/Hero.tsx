import { Button } from "@/components/ui/button";
import { ArrowRight, Cloud, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
      </div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="container relative z-10 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-md border border-card-foreground/10">
            <Cloud className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">DeFi Lending Reimagined</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Welcome to{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Cirrus Finance
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Experience seamless DeFi lending in the cloud. Earn competitive yields, borrow against your assets, and access liquidity—all with unmatched security.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8">
            <div className="backdrop-blur-md bg-card/30 rounded-2xl p-6 border border-card-foreground/10">
              <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                $2.4B+
              </div>
              <div className="text-sm text-muted-foreground mt-1">Total Value Locked</div>
            </div>
            <div className="backdrop-blur-md bg-card/30 rounded-2xl p-6 border border-card-foreground/10">
              <div className="text-3xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                12.5%
              </div>
              <div className="text-sm text-muted-foreground mt-1">Average APY</div>
            </div>
            <div className="backdrop-blur-md bg-card/30 rounded-2xl p-6 border border-card-foreground/10">
              <div className="text-3xl font-bold text-foreground">
                500K+
              </div>
              <div className="text-sm text-muted-foreground mt-1">Active Users</div>
            </div>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="hero" size="lg" className="gap-2">
              Start Earning
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="glass" size="lg" className="gap-2">
              <TrendingUp className="w-4 h-4" />
              View Markets
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
