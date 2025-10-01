import { Shield, Zap, Users, Lock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Battle-Tested Security",
    description: "Multi-layer security architecture with audited smart contracts and insurance coverage for your peace of mind.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Instant transactions with optimized gas fees. Experience DeFi at the speed of thought.",
  },
  {
    icon: Users,
    title: "Community Governed",
    description: "Decentralized governance puts control in your hands. Shape the future of Cirrus Finance.",
  },
  {
    icon: Lock,
    title: "Non-Custodial",
    description: "You remain in full control of your assets. We never have access to your funds.",
  },
];

const Features = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Why Choose{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Cirrus?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built for the next generation of DeFi users who demand speed, security, and simplicity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group backdrop-blur-md bg-card/50 rounded-2xl p-8 border border-card-foreground/10 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
