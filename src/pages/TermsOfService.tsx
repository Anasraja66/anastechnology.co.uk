import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const TermsOfService = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-muted/20 via-background to-muted/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Terms</span> of Service
          </h1>
          <p className="text-xl text-muted-foreground">
            Rules and guidelines for using our services.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 md:p-12 rounded-3xl space-y-12 text-muted-foreground leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Agreement to Terms</h2>
              <p>
                By accessing or using the services provided by Anas Technology UK (including but not limited to AnaOS, custom software development, and AI solutions), you agree to be bound by these Terms of Service. If you do not agree, you may not access our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. Use of Services</h2>
              <p>
                You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for any activities that occur under your account or API keys. 
                Unauthorized scraping, reverse-engineering of our AI models, or attempting to breach our security infrastructure is strictly prohibited and will result in immediate termination of services and legal action.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. Intellectual Property</h2>
              <p>
                The software, algorithms, designs, and content provided by Anas Technology UK (excluding client-owned data) remain the exclusive property of Anas Technology UK. You are granted a limited, non-exclusive, non-transferable license to use the software as intended by your specific service agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. Payment and Billing</h2>
              <p>
                Fees for our services are billed as outlined in your specific contract or on our Pricing page. All payments are non-refundable unless explicitly stated in your custom service agreement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. Limitation of Liability</h2>
              <p>
                In no event shall Anas Technology UK, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">6. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
