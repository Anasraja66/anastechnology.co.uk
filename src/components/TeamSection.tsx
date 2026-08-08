import { Linkedin, Mail, ExternalLink } from "lucide-react";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import anasRajaImg from '@/assets/anas_raja.jpg';
import grahamMichaelImg from '@/assets/graham_michael.jpg';

const founders = [
  {
    name: "Graham Michael",
    role: "Co-Founder",
    expertise: "Business Strategy & Client Relations",
    image: grahamMichaelImg,
    bio: "Based in our UK office, Graham leads the business side of Anas Technology UK. He excels in meeting clients, deeply understanding their problems, and architecting strategic solutions that drive growth and digital transformation.",
    social: {
      linkedin: "https://uk.linkedin.com/in/graham-michael-35b404393",
      email: "gray@anastechnology.co.uk"
    }
  },
  {
    name: "Anas Raja",
    role: "Founder & CTO",
    expertise: "System Architecture & Product Vision",
    image: anasRajaImg,
    bio: "As the Chief Technology Officer, Anas drives the technical vision of the company. He specializes in complex system architecture, product understanding, and leading high-level technical meetings to ensure flawless execution.",
    social: {
      linkedin: "https://ae.linkedin.com/in/anas-raja66",
      email: "anasraja@anastechnology.co.uk"
    }
  }
];

const TeamSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic',
    });
    AOS.refresh();
  }, []);

  return (
    <section id="team" className="py-32 relative overflow-hidden bg-[#0A0A0A]">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-24" data-aos="fade-up">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white tracking-tight">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Founders</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            The visionary leaders behind Anas Technology UK, combining business acumen with deep technical expertise.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <div
              key={founder.name}
              className="group relative rounded-3xl p-1 bg-gradient-to-b from-white/10 to-transparent hover:from-white/20 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.1)]"
              data-aos={index === 0 ? "fade-right" : "fade-left"}
            >
              <div className="bg-[#111111] h-full rounded-[23px] p-8 lg:p-12 relative overflow-hidden flex flex-col items-center text-center">
                
                {/* Subtle animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Profile Image */}
                <div className="relative mb-8 z-10">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden p-1 bg-gradient-to-br from-gray-300 to-gray-700 group-hover:rotate-12 transition-transform duration-700">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover rounded-full group-hover:-rotate-12 group-hover:scale-110 transition-all duration-700"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="z-10 flex-1 flex flex-col">
                  <h3 className="text-3xl font-display font-bold text-white mb-2 tracking-tight">
                    {founder.name}
                  </h3>

                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500 font-semibold text-lg mb-2">
                    {founder.role}
                  </p>

                  <p className="text-gray-400 text-sm font-medium mb-6 uppercase tracking-wider">
                    {founder.expertise}
                  </p>

                  <p className="text-gray-400 text-base leading-relaxed mb-10 flex-1">
                    {founder.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4 mt-auto">
                    <a
                      href={founder.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-12 h-12 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 text-white"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${founder.social.email}`}
                      className="flex items-center justify-center w-12 h-12 bg-white/5 border border-white/10 rounded-full hover:bg-white hover:text-black hover:scale-110 transition-all duration-300 text-white"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;