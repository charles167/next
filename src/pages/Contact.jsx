import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Send, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { FacebookIcon } from '@/components/icons/FacebookIcon';
import { TiktokIcon } from '@/components/icons/TiktokIcon';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "📧 Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleSocialClick = (platform) => {
    toast({
      title: `🔗 ${platform} Link`,
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact - Mayoher</title>
        <meta name="description" content="Have a question, a testimony to share, or an invitation to collaborate? I would love to hear from you." />
      </Helmet>

      <div className="pt-20 bg-background">
        <section className="py-20 lg:py-32 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 text-heading-royal">Let’s Connect</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Have a question, a testimony to share, or an invitation to collaborate? I would love to hear from you.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="pb-20 lg:pb-32">
          <div className="max-w-4xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-secondary p-8 md:p-12 rounded-2xl shadow-lg"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="sr-only">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-4 py-3 bg-background border-border border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your Name *" />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-4 py-3 bg-background border-border border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your Email *" />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="sr-only">Subject</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required className="w-full px-4 py-3 bg-background border-border border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Subject *" />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={6} className="w-full px-4 py-3 bg-background border-border border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none" placeholder="Your Message *"></textarea>
                </div>
                <div className="text-center">
                  <Button type="submit" size="lg" className="rounded-full px-10">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </section>
        
        <section className="py-20 lg:py-32 bg-secondary text-center">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="font-display text-3xl font-bold mb-4 text-heading-indigo">Find me on social media</h2>
                <p className="text-muted-foreground mb-8">Email: <a href="mailto:hello@mayoher.com" className="text-primary hover:underline">hello@mayoher.com</a></p>
                <div className="flex justify-center space-x-6">
                  <button onClick={() => handleSocialClick('Instagram')} className="text-foreground hover:text-primary transition-colors"><Instagram className="h-8 w-8" /></button>
                  <button onClick={() => handleSocialClick('Facebook')} className="text-foreground hover:text-primary transition-colors"><FacebookIcon className="h-8 w-8" /></button>
                  <button onClick={() => handleSocialClick('YouTube')} className="text-foreground hover:text-primary transition-colors"><Youtube className="h-8 w-8" /></button>
                  <button onClick={() => handleSocialClick('TikTok')} className="text-foreground hover:text-primary transition-colors"><TiktokIcon className="h-8 w-8" /></button>
                </div>
            </div>
        </section>
      </div>
    </>
  );
};

export default Contact;