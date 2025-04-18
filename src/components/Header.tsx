
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, FileText, FileUp, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-naija-blue font-serif text-2xl font-bold">Naija Legal Lens</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <Link to="/" className="text-naija-dark hover:text-naija-blue font-medium px-2 py-1">
            Home
          </Link>
          <Link to="/analyze" className="text-naija-dark hover:text-naija-blue font-medium px-2 py-1">
            Analyze
          </Link>
          <Link to="/explain" className="text-naija-dark hover:text-naija-blue font-medium px-2 py-1">
            Explain
          </Link>
          <Link to="/generate" className="text-naija-dark hover:text-naija-blue font-medium px-2 py-1 flex items-center gap-1">
            <FileUp className="h-4 w-4" />
            Generate
          </Link>
          <div className="ml-2 flex gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Globe className="h-4 w-4" /> 
              <span>EN</span>
            </Button>
            <Button size="sm" className="bg-naija-blue hover:bg-naija-blue/90">
              Get Started
            </Button>
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-naija-dark" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4 shadow-md">
          <nav className="flex flex-col space-y-2">
            <Link 
              to="/" 
              className="text-naija-dark hover:text-naija-blue font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/analyze" 
              className="text-naija-dark hover:text-naija-blue font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Analyze
            </Link>
            <Link 
              to="/explain" 
              className="text-naija-dark hover:text-naija-blue font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Explain
            </Link>
            <Link 
              to="/generate" 
              className="text-naija-dark hover:text-naija-blue font-medium py-2 flex items-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <FileUp className="h-4 w-4" />
              Generate
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" size="sm" className="flex items-center gap-1 w-full justify-center">
                <Globe className="h-4 w-4" /> 
                <span>English</span>
              </Button>
              <Button className="bg-naija-blue hover:bg-naija-blue/90 w-full">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
