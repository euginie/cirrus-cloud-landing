import { Wallet, Coins, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Wallet,
    title: "Connect Wallet",
    description: "Link your Web3 wallet in seconds. We support MetaMask, WalletConnect, and more.",
    number: "01",
  },
  {
    icon: Coins,
    title: "Supply or Borrow",
    description: "Deposit assets to earn yield or borrow against your collateral at competitive rates.",
    number: "02",
  },
  {
    icon: TrendingUp,
    title: "Earn & Grow",
    description: "Watch your portfolio grow with compound interest and real-time analytics.",
    number: "03",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in three simple steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
              )}
              
              <div className="relative backdrop-blur-md bg-card/30 rounded-2xl p-8 border border-card-foreground/10 hover:border-accent/50 transition-all duration-300">
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center text-xl font-bold shadow-glow-accent">
                  {step.number}
                </div>
                
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 mt-4">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
