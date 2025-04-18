
import { FileText, Globe, FileOutput, MessageSquare, FolderKanban } from "lucide-react";

const features = [
  {
    icon: <FileText className="h-10 w-10 text-naija-blue" />,
    title: "Document Analysis",
    description: "Upload legal documents (PDF, DOCX, TXT) for comprehensive analysis including plain language explanations, key clauses identification, and risk assessment.",
  },
  {
    icon: <Globe className="h-10 w-10 text-naija-blue" />,
    title: "Multilingual Support",
    description: "Full support for English, Yoruba, Hausa, Igbo, Nigerian Pidgin, and French. Translate analysis results between languages.",
  },
  {
    icon: <FileOutput className="h-10 w-10 text-naija-blue" />,
    title: "Document Generation",
    description: "Generate customized Nigerian legal documents based on your requirements, with references to relevant Nigerian legislation.",
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-naija-blue" />,
    title: "Text Explanation",
    description: "Paste any legal text snippet for instant plain language interpretation, legal implications, and Nigerian legal context.",
  },
  {
    icon: <FolderKanban className="h-10 w-10 text-naija-blue" />,
    title: "Document Management",
    description: "Save analyzed documents, view analysis history, organize documents by type and date, and manage your legal document library.",
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-naija-blue mb-4">
            Powerful Legal Analysis Tools
          </h2>
          <p className="text-lg text-naija-dark max-w-3xl mx-auto">
            Our Nigerian Legal Document NLP Analyzer offers a suite of tools designed specifically for the Nigerian legal context
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-naija-blue/5 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-naija-blue mb-2">{feature.title}</h3>
              <p className="text-naija-dark">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
