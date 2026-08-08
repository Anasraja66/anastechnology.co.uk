import React, { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <section className="pt-32 pb-16 bg-gradient-to-br from-muted/20 via-background to-muted/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Privacy</span> Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            How we protect and manage your data.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 md:p-12 rounded-3xl space-y-12 text-muted-foreground leading-relaxed" data-aos="fade-up" data-aos-delay="200">
            
            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Introduction</h2>
              <p>
                At Anas Technology UK, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our website, AnaOS, and related software solutions.
              </p>
            </div>

            <div className="bg-primary/5 border border-primary/20 p-6 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary rounded-l-2xl"></div>
              <h2 className="text-2xl font-bold mb-4 text-primary">2. Artificial Intelligence & Data Processing Rules</h2>
              <p className="mb-4">
                As a leader in AI automation and omnichannel CRM systems (AnaOS), we enforce strict, state-of-the-art protocols regarding how Artificial Intelligence processes your data:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Zero Unauthorized Training:</strong> Your business data, proprietary prompts, and customer interactions are <strong>never</strong> used to train public foundational AI models without your explicit, written consent.</li>
                <li><strong className="text-foreground">Strict Data Isolation:</strong> Each client's AI environment is heavily sandboxed. Data from one tenant cannot cross-contaminate or influence the AI outputs of another tenant.</li>
                <li><strong className="text-foreground">Prompt Privacy:</strong> The prompts and automation workflows you build using our "Prompt-to-Build" systems are treated as your intellectual property and are fully encrypted at rest.</li>
                <li><strong className="text-foreground">Ephemeral Processing:</strong> Where possible, AI inferences are performed ephemerally, meaning the data used to generate an AI response is immediately purged from active memory after the task completes.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. Information We Collect</h2>
              <p>
                We may collect personal information such as your name, email address, phone number, and business details when you submit contact forms, book appointments, or interact with our CRM tools.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide, operate, and maintain our services.</li>
                <li>To improve, personalize, and expand our platform.</li>
                <li>To communicate with you regarding updates, support, and promotional offers (only if opted-in).</li>
                <li>To detect and prevent fraudulent activities.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. Data Security</h2>
              <p>
                We implement robust, enterprise-grade security measures to protect your data from unauthorized access, alteration, disclosure, or destruction. This includes SSL/TLS encryption, secure database architectures, and regular security audits.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 text-foreground">6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or our AI data practices, please contact us at: <a href="mailto:contact@anastechnology.co.uk" className="text-primary hover:underline">contact@anastechnology.co.uk</a>.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
