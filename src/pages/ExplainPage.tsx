
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TextExplainer from "@/components/TextExplainer";

const ExplainPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8 bg-texture">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-serif font-bold text-naija-blue mb-2">
              Explain Legal Text
            </h1>
            <p className="text-base text-naija-dark max-w-2xl mx-auto">
              Paste any Nigerian legal text for a plain language explanation
            </p>
          </div>
          
          <TextExplainer />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ExplainPage;
