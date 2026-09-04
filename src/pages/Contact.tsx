import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin, ChevronRight, Check, Send, X, Calendar as CalendarIcon, ChevronLeft } from "lucide-react"; // Added ChevronLeft icon
import { useToast } from "@/hooks/use-toast";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();
  const [showAddressPopup, setShowAddressPopup] = useState(false); // State for address popup

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/contact@anastechnology.co.uk", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            _subject: `New Contact Form Submission: ${formData.subject}`,
            Name: formData.name,
            Email: formData.email,
            Message: formData.message,
            RequestType: "Contact Form"
        })
      });

      if (response.ok) {
        toast({
          title: "Message Sent!",
          description: "We've received your message and will get back to you soon.",
        });

        // Reset contact form
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const fullAddress = (
    <>
      <p className="mb-2"><span className="font-semibold">UK Office:</span> The Sandon Complex, 166-182 Oakfield Road, Anfield, Liverpool, L4 0UH</p>
      <p><span className="font-semibold">Pakistan Office:</span> Islamabad, Pakistan</p>
    </>
  );

  const timeSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM']; // Example time slots

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Main content area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-16">
        {/* Top Section: Header, Description, Social Icons */}
        <div className="bg-card border border-border rounded-3xl p-8 lg:p-12 shadow-sm relative overflow-hidden mb-12" data-aos="fade-up">
          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            {/* Left: Heading and Description */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                We Would Love to Hear from You
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Thank you for your interest in Anas Technology UK. We value your thoughts, questions, and feedback. Please don't hesitate to reach out to us. Our dedicated team is here to assist you.
              </p>
            </div>
            {/* Right: Social Icons */}
            <div className="flex justify-start md:justify-end space-x-4">
              <a href="https://linkedin.com/company/anas-technology" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://facebook.com/anastechnology" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com/anastechnology" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Middle Section: Contact Info Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Address Card - Clickable for popup */}
          <div 
            className="bg-card border border-border rounded-xl p-6 shadow-sm flex flex-col justify-between min-h-[180px] cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => setShowAddressPopup(true)}
            data-aos="fade-up" data-aos-delay="100"
          >
            <div className="flex items-center justify-between mb-4">
              <MapPin className="w-6 h-6 text-primary" />
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Address</h3>
            {/* Display a shorter version or hint text */}
            <div className="text-sm text-muted-foreground">
              <p>Click to see full address...</p>
            </div>
          </div>

          {/* Email Card - Added min-h-[180px] for consistent height */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex flex-col justify-between min-h-[180px]" data-aos="fade-up" data-aos-delay="200">
              <div className="flex items-center justify-between mb-4">
                <Mail className="w-6 h-6 text-primary" />
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Email Us</h3>
              <p className="text-sm text-muted-foreground">contact@anastechnology.co.uk</p>
            </div>

            {/* Phone Card */}
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex flex-col justify-between min-h-[180px]" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-center justify-between mb-4">
                <Phone className="w-6 h-6 text-accent" />
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Call Us</h3>
              <div className="text-xs text-muted-foreground space-y-1">
                <p>UK: +44 7435 918000</p>
                <p>PK: +92 310 3358691</p>
              </div>
            </div>

          {/* Working Hours Card - Added min-h-[180px] for consistent height */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm flex flex-col justify-between min-h-[180px]" data-aos="fade-up" data-aos-delay="400">
            <div className="flex items-center justify-between mb-4">
              <Clock className="w-6 h-6 text-primary-glow" />
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Availability</h3>
            <p className="text-sm text-muted-foreground">Available 24/7</p>
          </div>
        </div>

        {/* Bottom Section: Image and Contact Form */}
        <div className="bg-card border border-border rounded-3xl p-8 lg:p-12 shadow-sm grid lg:grid-cols-2 gap-8 items-stretch" data-aos="fade-up">
          {/* Left: Image */}
          <div className="flex flex-col h-full">
            <div className="rounded-2xl overflow-hidden flex-grow flex items-center justify-center">
              <img
                src="/handshake.jpg"
                alt="Hands shaking"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            <h2 className="text-3xl font-display font-bold mb-8 gradient-text">
              Leave us your info
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-card-foreground mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  className="bg-background border-border focus:border-primary rounded-lg"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-card-foreground mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your email"
                  className="bg-background border-border focus:border-primary rounded-lg"
                  required
                />
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-card-foreground mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  className="bg-background border-border focus:border-primary rounded-lg"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-card-foreground mb-2">
                  Your message (optional)
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message"
                  className="bg-background border-border focus:border-primary min-h-[120px] rounded-lg"
                />
              </div>

              {/* Checkbox for terms and privacy policy */}
              <div className="flex items-center space-x-2 mt-auto">
                <input type="checkbox" id="terms" className="form-checkbox h-4 w-4 text-primary rounded border-gray-300 focus:ring-primary" />
                <label htmlFor="terms" className="text-sm text-muted-foreground">
                  I agree with terms of use and privacy policy
                </label>
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-elegant transition-all duration-300 group relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform z-10" />
                  {isSubmitting ? "Sending..." : "Send Your Message"}
                  {/* Subtle hover effect */}
                  <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Appointment Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="bg-card border border-border rounded-3xl shadow-sm overflow-hidden" data-aos="fade-up">
          <div className="p-8 pb-4">
            <h2 className="text-3xl font-display font-bold mb-2 gradient-text text-center">
              Book a Strategy Call
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Pick a time on our calendar to discuss your digital transformation needs.
            </p>
          </div>
          <div className="w-full bg-white relative">
            <iframe 
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2_dG1au4THNXeZ0p3t5-KvYoaZikIq7swKIKBV4yWTDN0zeYdOsjbBb77kS_cKk2OS9HUeWbWG?gv=true" 
              style={{ border: 0 }} 
              width="100%" 
              height="600" 
              frameBorder="0"
              title="Google Calendar Booking"
            ></iframe>
          </div>
        </Card>
      </section>

      <Footer />

      {/* Address Popup Modal */}
      {showAddressPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-card p-8 rounded-lg shadow-xl relative max-w-md w-full border border-border">
            <button
              onClick={() => setShowAddressPopup(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={24} />
            </button>
            <h3 className="text-xl font-bold text-foreground mb-4">Our Locations</h3>
            <div className="text-muted-foreground space-y-2">
              {fullAddress}
            </div>
            <Button onClick={() => setShowAddressPopup(false)} className="mt-6 w-full bg-gradient-primary">
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
