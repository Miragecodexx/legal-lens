
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DocumentUpload from "@/components/DocumentUpload";

const AnalyzePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8 bg-texture">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-naija-blue mb-2">
              Analyze Legal Documents
            </h1>
            <p className="text-base text-naija-dark max-w-2xl mx-auto">
              Upload any Nigerian legal document for comprehensive analysis
            </p>
          </div>
          
          <DocumentUpload />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AnalyzePage;
