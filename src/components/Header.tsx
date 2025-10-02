import ThemeToggle from "./ThemeToggle";
import cirrusLogo from "@/assets/cirrus-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center p-1">
              <img src={cirrusLogo} alt="Cirrus Finance" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-bold">Cirrus Finance</span>
          </div>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
