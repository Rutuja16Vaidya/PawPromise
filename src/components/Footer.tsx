import { PawPrint } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-6 mt-auto">
    <div className="container mx-auto text-center font-display">
      <div className="flex items-center justify-center gap-2 text-lg font-semibold mb-1">
        <PawPrint className="h-5 w-5" />
        PawPromise
        <PawPrint className="h-5 w-5" />
      </div>
      <p className="text-sm opacity-80">Helping pets find their forever homes &hearts;</p>
    </div>
  </footer>
);

export default Footer;
