import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Main Background Container */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
          {/* Background Image */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80")',
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
          </div>

          {/* Content Grid */}
          <div className="relative z-10 grid md:grid-cols-2 gap-8 p-8 md:p-12 lg:p-16">
            
            {/* Left Box: Transform Your Product */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[2rem] border-2 border-white/40 bg-black/20 backdrop-blur-md p-8 md:p-10 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Transform Your Product
                </h2>
                <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-10">
                  Are you seed stage Ai StartUp? Join forces with a dedicated group of AI enthusiasts ready to bring innovative AI solutions to your product.
                </p>
              </div>
              <Link to="/contact" className="inline-block mt-auto">
                <button className="bg-white text-black font-bold text-lg rounded-2xl px-8 py-4 flex items-center justify-center gap-3 w-full sm:w-auto hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                  Connect Now
                  <ArrowRight className="w-6 h-6" strokeWidth={2.5} />
                </button>
              </Link>
            </motion.div>

            {/* Right Box: Kickstart Your AI Career */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-[2rem] border-2 border-white/40 bg-black/20 backdrop-blur-md p-8 md:p-10 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Kickstart Your AI Career
                </h2>
                <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-10">
                  Are you an AI enthusiast eager to apply your knowledge and skills to real-world products? Join our fellowship program and collaborate with AI product owners.
                </p>
              </div>
              <Link to="/careers" className="inline-block mt-auto">
                <button className="bg-white text-black font-bold text-lg rounded-2xl px-8 py-4 flex items-center justify-center gap-3 w-full sm:w-auto hover:bg-gray-100 hover:scale-105 transition-all duration-300">
                  Apply Now
                  <ArrowRight className="w-6 h-6" strokeWidth={2.5} />
                </button>
              </Link>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
