
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-naija-blue mb-6 animate-fadeInUp">
              Nigerian Legal Document Analysis Powered by AI
            </h1>
            <p className="text-lg text-naija-dark mb-8 max-w-xl animate-fadeInUp-delay-1">
              Upload any Nigerian legal document and get instant analysis, plain language explanations, 
              and insights based on Nigerian law - all powered by advanced natural language processing.
            </p>
            <div className="flex flex-wrap gap-4 animate-fadeInUp-delay-2">
              <Button
                asChild
                className="bg-naija-blue hover:bg-naija-blue/90 text-white px-8 py-6 text-lg"
              >
                <Link to="/analyze">
                  Analyze Document <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="px-8 py-6 text-lg border-naija-blue text-naija-blue hover:bg-naija-blue/10"
              >
                <Link to="/explain">
                  Explain Legal Text
                </Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2 mr-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">500+</span> legal professionals trust our analysis
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-lg shadow-xl p-6 border border-gray-200 relative z-10">
              <div className="bg-naija-blue/5 rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-naija-blue mb-2">Document Analysis</h3>
                <div className="h-32 border border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-white">
                  <p className="text-gray-500">Upload your legal document</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-naija-teal/10 rounded p-3 flex items-start">
                  <div className="w-4 h-4 rounded-full bg-naija-teal mt-1 mr-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-naija-dark">Plain Language Explanation</p>
                    <p className="text-sm text-gray-600">Simplified version of complex legal terms</p>
                  </div>
                </div>
                <div className="bg-naija-gold/10 rounded p-3 flex items-start">
                  <div className="w-4 h-4 rounded-full bg-naija-gold mt-1 mr-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-naija-dark">Key Clauses Identified</p>
                    <p className="text-sm text-gray-600">Important contract elements highlighted</p>
                  </div>
                </div>
                <div className="bg-red-100 rounded p-3 flex items-start">
                  <div className="w-4 h-4 rounded-full bg-red-500 mt-1 mr-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-medium text-naija-dark">Risk Analysis</p>
                    <p className="text-sm text-gray-600">Potential legal issues detected</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-naija-gold/20 rounded-full -z-10"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-naija-teal/20 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
