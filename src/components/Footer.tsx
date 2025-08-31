import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-card border-t border-border/50" style={{ backgroundColor: 'hsl(var(--footer-bg))', borderColor: 'hsl(var(--footer-border))' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-farm-green">Eco-CropAdvisor</h3>
            <p className="text-muted-foreground leading-relaxed">
              Empowering farmers with data-driven insights for smarter crop selection and sustainable agriculture practices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-lg hover:bg-accent transition-colors duration-200">
                <Facebook className="h-5 w-5 text-muted-foreground hover:text-farm-green" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:bg-accent transition-colors duration-200">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-farm-green" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:bg-accent transition-colors duration-200">
                <Instagram className="h-5 w-5 text-muted-foreground hover:text-farm-green" />
              </a>
              <a href="#" className="p-2 rounded-lg hover:bg-accent transition-colors duration-200">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-farm-green" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About Us', 'Crop Recommendation', 'Blog', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="block text-muted-foreground hover:text-farm-green transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Services</h4>
            <div className="space-y-2">
              {['Soil Analysis', 'Crop Consulting', 'Weather Monitoring', 'Yield Prediction', 'Farm Management'].map((service) => (
                <a
                  key={service}
                  href="#"
                  className="block text-muted-foreground hover:text-farm-green transition-colors duration-200"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-farm-green" />
                <span className="text-muted-foreground">info@cropwise.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-farm-green" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-farm-green mt-0.5" />
                <span className="text-muted-foreground">
                  123 Agriculture Way<br />
                  Farmville, CA 90210
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Eco-CropAdvisor. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-farm-green text-sm transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-farm-green text-sm transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-farm-green text-sm transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;