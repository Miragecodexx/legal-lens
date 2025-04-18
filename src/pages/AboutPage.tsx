
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Scale, Award, Users } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-naija-blue mb-4">
              About Naija Legal Lens
            </h1>
            <p className="text-lg text-naija-dark max-w-3xl mx-auto">
              Bringing advanced natural language processing to Nigerian legal documents
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl font-serif font-bold text-naija-blue mb-4">
                Our Mission
              </h2>
              <p className="text-naija-dark mb-4">
                Naija Legal Lens was founded with a clear mission: to make Nigerian legal documents more accessible, 
                understandable, and manageable for legal professionals, businesses, and individuals alike.
              </p>
              <p className="text-naija-dark mb-4">
                By leveraging cutting-edge natural language processing and artificial intelligence specifically 
                trained on Nigerian legal corpus, we're able to provide context-aware analysis that understands 
                the nuances of Nigerian law.
              </p>
              <p className="text-naija-dark">
                Our goal is to bridge the gap between complex legal language and plain understanding, 
                helping Nigerians make more informed legal decisions and enabling legal professionals 
                to work more efficiently.
              </p>
            </div>
            <div className="bg-naija-light rounded-lg p-8">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full shadow-sm flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="h-8 w-8 text-naija-blue" />
                  </div>
                  <h3 className="font-bold text-naija-blue mb-1">15,000+</h3>
                  <p className="text-sm text-naija-dark">Documents Analyzed</p>
                </div>
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full shadow-sm flex items-center justify-center mx-auto mb-3">
                    <Scale className="h-8 w-8 text-naija-blue" />
                  </div>
                  <h3 className="font-bold text-naija-blue mb-1">500+</h3>
                  <p className="text-sm text-naija-dark">Law Firms Using Our Tools</p>
                </div>
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full shadow-sm flex items-center justify-center mx-auto mb-3">
                    <Award className="h-8 w-8 text-naija-blue" />
                  </div>
                  <h3 className="font-bold text-naija-blue mb-1">99.3%</h3>
                  <p className="text-sm text-naija-dark">Analysis Accuracy</p>
                </div>
                <div className="text-center">
                  <div className="bg-white w-16 h-16 rounded-full shadow-sm flex items-center justify-center mx-auto mb-3">
                    <Users className="h-8 w-8 text-naija-blue" />
                  </div>
                  <h3 className="font-bold text-naija-blue mb-1">5</h3>
                  <p className="text-sm text-naija-dark">Supported Languages</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-naija-blue mb-6 text-center">
              Our Technology
            </h2>
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
              <p className="text-naija-dark mb-4">
                Naija Legal Lens uses a specialized natural language processing model that has been trained on thousands of 
                Nigerian legal documents, including contracts, agreements, court judgments, and legislation.
              </p>
              <p className="text-naija-dark mb-4">
                Our system is designed to understand the unique characteristics of Nigerian legal language, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-naija-dark space-y-2">
                <li>Nigerian-specific legal terminology and phrases</li>
                <li>References to Nigerian legislation and case law</li>
                <li>The structure and format of Nigerian legal documents</li>
                <li>Regional language variations across different parts of Nigeria</li>
                <li>Multilingual context for Nigeria's diverse linguistic landscape</li>
              </ul>
              <p className="text-naija-dark">
                By combining deep learning, transformer-based language models, and knowledge graphs specific to Nigerian law, 
                we provide analyses that are accurate, contextually relevant, and tailored to the Nigerian legal system.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-serif font-bold text-naija-blue mb-6">
              Start Using Naija Legal Lens Today
            </h2>
            <p className="text-naija-dark mb-8 max-w-2xl mx-auto">
              Experience the power of AI-powered legal document analysis tailored specifically for Nigeria
            </p>
            <a 
              href="/analyze" 
              className="inline-block bg-naija-blue hover:bg-naija-blue/90 text-white px-8 py-3 rounded-md font-medium"
            >
              Try It Free
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
