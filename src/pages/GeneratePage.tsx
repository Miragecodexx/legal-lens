
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DocumentGenerator from "@/components/DocumentGenerator";

const GeneratePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8 bg-texture">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-naija-blue mb-2">
              Generate Legal Documents
            </h1>
            <p className="text-base text-naija-dark max-w-2xl mx-auto">
              Create customized Nigerian legal documents by providing your requirements
            </p>
          </div>
          
          <DocumentGenerator />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GeneratePage;
