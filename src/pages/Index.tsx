
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SampleResults from "@/components/SampleResults";
import Faq from "@/components/Faq";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <SampleResults />
        <Faq />
        
        {/* Testimonials Section */}
        <section className="py-16 bg-texture">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-naija-blue mb-4">
                Trusted by Legal Professionals
              </h2>
              <p className="text-lg text-naija-dark max-w-3xl mx-auto">
                See what legal experts across Nigeria are saying about our document analysis tools
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-naija-blue/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-naija-blue font-bold">AO</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Adebayo Ogunlesi</h4>
                    <p className="text-sm text-gray-600">Senior Partner, Lagos Law Firm</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "This tool has transformed how we review contracts. The plain language explanations save us hours of work and help us explain complex terms to clients."
                </p>
                <div className="mt-4 flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              {/* Testimonial 2 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-naija-blue/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-naija-blue font-bold">CI</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Chinua Ikedi</h4>
                    <p className="text-sm text-gray-600">Legal Consultant, Abuja</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "The risk analysis feature has helped us identify potential issues in contracts that we might have otherwise missed. An invaluable tool for due diligence."
                </p>
                <div className="mt-4 flex items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              
              {/* Testimonial 3 */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-naija-blue/20 rounded-full flex items-center justify-center mr-3">
                    <span className="text-naija-blue font-bold">FO</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Funmilayo Olatunji</h4>
                    <p className="text-sm text-gray-600">Corporate Lawyer, Port Harcourt</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  "The multilingual support is fantastic. Being able to analyze documents in Yoruba and then translate the analysis to English has been incredibly helpful for our diverse clientele."
                </p>
                <div className="mt-4 flex items-center">
                  {[1, 2, 3, 4, 5].map((star, index) => (
                    <svg key={star} className={`w-5 h-5 ${index < 4 ? 'text-yellow-500' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-naija-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to streamline your legal document analysis?
            </h2>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
              Start analyzing your Nigerian legal documents today with our advanced NLP tools
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                className="bg-white text-naija-blue hover:bg-gray-100 px-8 py-6 text-lg"
              >
                Get Started Free
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
