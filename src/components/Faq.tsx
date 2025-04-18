
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of legal documents can be analyzed?",
    answer:
      "Our system can analyze a wide range of Nigerian legal documents including contracts, agreements, MOUs, legal letters, court filings, policy documents, and more. The system is specifically trained on Nigerian legal language and context."
  },
  {
    question: "Which file formats are supported?",
    answer:
      "Currently, we support PDF, DOCX (Microsoft Word), and plain text (TXT) file formats. We recommend uploading the document in its original format for the best analysis results."
  },
  {
    question: "What languages does the system support?",
    answer:
      "Our system supports multiple languages relevant to Nigeria: English, Yoruba, Hausa, Igbo, Nigerian Pidgin, and French. You can upload documents in any of these languages and also translate the analysis results."
  },
  {
    question: "How accurate is the analysis?",
    answer:
      "Our system has been trained on thousands of Nigerian legal documents and achieves over 95% accuracy in identifying key clauses and legal concepts. However, the analysis is meant to assist legal professionals, not replace them. We always recommend having a qualified legal professional review important documents."
  },
  {
    question: "Is my data secure and confidential?",
    answer:
      "Yes, we take data security very seriously. All documents are encrypted during transmission and storage. We do not share your documents with third parties, and you can request deletion of your data at any time. Our systems comply with global data protection standards."
  },
  {
    question: "Can I generate custom legal documents?",
    answer:
      "Yes, our document generation feature allows you to create customized legal documents based on your specific requirements. These documents reference relevant Nigerian legislation and come with plain language explanations."
  },
];

const Faq = () => {
  return (
    <section className="py-16 bg-texture">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-naija-blue mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-naija-dark max-w-3xl mx-auto">
            Common questions about our Nigerian Legal Document Analysis platform
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-lg shadow-sm">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left px-6 py-4 hover:no-underline hover:bg-naija-blue/5 text-naija-blue font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
