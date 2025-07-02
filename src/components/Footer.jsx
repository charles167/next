
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { FacebookIcon } from '@/components/icons/FacebookIcon';

const Footer = () => {
  const handleNewsletterSignup = (e) => {
    e.preventDefault();
    toast({
      title: "📧 Stay Inspired!",
      description: "Thanks for joining! You'll receive updates soon.",
    });
  };

  const socialLinks = {
    instagram: 'https://www.instagram.com/mayoher?igsh=MTNmZ2ZjdmRlOWswcQ%3D%3D&utm_source=qr',
    facebook: 'https://www.facebook.com/share/15ZqYrnSWJ/?mibextid=wwXIfr',
    youtube: 'https://youtube.com/@mayoher?si=s8R16ZmKYukaw6B4',
  };

  const handleSearch = () => {
    toast({
      title: "🔍 Search Feature",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
   <footer>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="flex flex-col lg:flex-row justify-between gap-12 flex-wrap">
      {/* Branding and Socials */}
      <div className="flex-1 min-w-[220px]">
        <h3 className="font-display text-3xl font-bold mb-4 text-heading-indigo">Mayoher</h3>
        <p className="text-muted-foreground mb-4">
          Inspiration for the Journey. Creativity for the Soul.
        </p>
        <div className="flex space-x-4">
          <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-6 w-6" /></a>
          <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><FacebookIcon className="h-6 w-6" /></a>
          <a href={socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Youtube className="h-6 w-6" /></a>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 min-w-[220px]">
        <span className="font-bold uppercase tracking-wider text-sm mb-4 block">Navigate</span>
        <div className="space-y-3">
          <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors">Home</Link>
          <Link to="/shop" className="block text-muted-foreground hover:text-primary transition-colors">Shop</Link>
          <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors">About</Link>
          <Link to="/events" className="block text-muted-foreground hover:text-primary transition-colors">Events</Link>
          <Link to="/blog" className="block text-muted-foreground hover:text-primary transition-colors">Blog</Link>
          <Link to="/contact" className="block text-muted-foreground hover:text-primary transition-colors">Connect</Link>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="flex-1 min-w-[220px]">
        <span className="font-bold uppercase tracking-wider text-sm mb-4 block">Stay Inspired</span>
        <form onSubmit={handleNewsletterSignup} className="flex flex-col space-y-2">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          />
          <Button type="submit" className="w-full rounded-lg">
            Join the List
          </Button>
        </form>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
      <p className="text-muted-foreground mb-4 md:mb-0">© 2025 Mayoher. All rights reserved.</p>
      <div className="flex items-center space-x-4">
        <button onClick={handleSearch} className="text-muted-foreground hover:text-primary transition-colors">
          <Search className="h-5 w-5" />
        </button>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;
