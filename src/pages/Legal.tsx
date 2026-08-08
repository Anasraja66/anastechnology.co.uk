import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Legal = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-muted/20 via-background to-muted/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Legal</span> & Imprint
          </h1>
          <p className="text-xl text-muted-foreground">
            Corporate information and legal disclosures.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 md:p-12 rounded-3xl space-y-12" data-aos="fade-up" data-aos-delay="200">
            
            <div>
              <h2 className="text-2xl font-bold mb-4 gradient-text">Company Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                <strong>Company Name:</strong> Anas Technology UK Ltd.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">
                <strong>UK Headquarters:</strong> The Sandon Complex, 166-182 Oakfield Road, Anfield, Liverpool, L4 0UH, United Kingdom
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">
                <strong>Pakistan Office:</strong> Islamabad, Pakistan
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 gradient-text">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                <strong>Email:</strong> contact@anastechnology.co.uk
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">
                <strong>Phone (UK):</strong> +44 7435 918000
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">
                <strong>Phone (PK):</strong> +92 310 3358691
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 gradient-text">Executive Board</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                <strong>Founder & CTO:</strong> Anas Raja
              </p>
              <p className="text-muted-foreground leading-relaxed mb-2">
                <strong>Co-Founder:</strong> Graham Michael
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 gradient-text">Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The information provided on this website is for general informational purposes only. Anas Technology UK strives to keep the information up to date and correct, but makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Legal;
