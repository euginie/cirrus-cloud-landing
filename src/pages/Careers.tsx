import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Briefcase, Clock, ArrowRight } from "lucide-react";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const jobListings = [
  {
    id: 1,
    title: "Senior Smart Contract Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build and audit secure smart contracts for our DeFi lending protocol. Work with Solidity, Hardhat, and cutting-edge blockchain technologies.",
    requirements: [
      "5+ years of Solidity development experience",
      "Deep understanding of DeFi protocols and security best practices",
      "Experience with Hardhat, Foundry, or similar frameworks",
      "Track record of deployed and audited smart contracts"
    ],
    skills: ["Solidity", "Web3.js", "Hardhat", "Security Auditing"]
  },
  {
    id: 2,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Create beautiful, performant Web3 interfaces. Build the future of DeFi user experiences with React, TypeScript, and Web3 libraries.",
    requirements: [
      "4+ years of React and TypeScript experience",
      "Experience with Web3 integration (ethers.js, wagmi, RainbowKit)",
      "Strong understanding of responsive design and accessibility",
      "Experience with modern frontend tooling (Vite, Tailwind CSS)"
    ],
    skills: ["React", "TypeScript", "Web3", "Tailwind CSS"]
  },
  {
    id: 3,
    title: "Backend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Design and build scalable backend systems to support our DeFi platform. Work with Node.js, PostgreSQL, and blockchain indexing solutions.",
    requirements: [
      "3+ years of backend development experience",
      "Strong knowledge of Node.js and TypeScript",
      "Experience with PostgreSQL and API design",
      "Understanding of blockchain data indexing (The Graph, custom indexers)"
    ],
    skills: ["Node.js", "PostgreSQL", "GraphQL", "Blockchain APIs"]
  },
  {
    id: 4,
    title: "Junior Smart Contract Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Join our smart contract team and learn from experienced developers. Contribute to protocol development, testing, and security reviews.",
    requirements: [
      "1+ years of Solidity experience or strong programming background",
      "Understanding of blockchain fundamentals and DeFi concepts",
      "Passion for security and best practices",
      "Ability to write comprehensive tests"
    ],
    skills: ["Solidity", "JavaScript", "Testing", "Git"]
  }
];

const Careers = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]" />
        </div>
        
        <div className="container relative z-10 max-w-4xl mx-auto text-center">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to Home
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Join the{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Cirrus Finance
            </span>{" "}
            Team
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Help us build the future of decentralized lending. We're looking for talented individuals who are passionate about DeFi and blockchain technology.
          </p>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-muted-foreground">
              We're always looking for talented people to join our team. Check out our open positions below.
            </p>
          </div>

          <div className="space-y-6">
            {jobListings.map((job) => (
              <Card key={job.id} className="hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-2xl">{job.title}</CardTitle>
                      <CardDescription className="text-base">
                        {job.description}
                      </CardDescription>
                    </div>
                    <Button className="whitespace-nowrap" disabled>
                      Apply (Coming Soon)
                    </Button>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 pt-4">
                    <Badge variant="secondary" className="gap-1.5">
                      <Briefcase className="w-3.5 h-3.5" />
                      {job.department}
                    </Badge>
                    <Badge variant="secondary" className="gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location}
                    </Badge>
                    <Badge variant="secondary" className="gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {job.type}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Key Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, index) => (
                        <Badge key={index} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why Join Cirrus Finance?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary mx-auto flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="font-semibold text-lg">Cutting-Edge Tech</h3>
              <p className="text-muted-foreground text-sm">
                Work with the latest blockchain technologies and DeFi protocols
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary mx-auto flex items-center justify-center">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="font-semibold text-lg">Remote-First</h3>
              <p className="text-muted-foreground text-sm">
                Work from anywhere in the world with flexible hours
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary mx-auto flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-semibold text-lg">Competitive Comp</h3>
              <p className="text-muted-foreground text-sm">
                Competitive salary, equity, and token incentives
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
