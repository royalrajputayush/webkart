import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { 
  Zap, 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  Building,
  Globe,
  Twitter,
  Linkedin,
  Github
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Implement actual contact form submission
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      alert("Message sent successfully! We'll get back to you within 24 hours.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        category: "",
        message: ""
      });
    } catch (error) {
      console.error("Contact form error:", error);
      alert("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help from our support team",
      contact: "support@templatehub.com",
      details: "We respond within 24 hours"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with us in real-time",
      contact: "Available 9 AM - 6 PM EST",
      details: "Monday through Friday"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us for urgent matters",
      contact: "+1 (555) 123-4567",
      details: "Business hours only"
    },
    {
      icon: Building,
      title: "Business Inquiries",
      description: "Partnership and business questions",
      contact: "business@templatehub.com",
      details: "Enterprise solutions available"
    }
  ];

  const officeInfo = {
    address: "123 Template Street, Design City, DC 12345",
    hours: "Monday - Friday: 9:00 AM - 6:00 PM EST",
    timezone: "Eastern Standard Time (UTC-5)"
  };

  const socialLinks = [
    { icon: Twitter, name: "Twitter", url: "https://twitter.com/templatehub", handle: "@templatehub" },
    { icon: Linkedin, name: "LinkedIn", url: "https://linkedin.com/company/templatehub", handle: "TemplateHub" },
    { icon: Github, name: "GitHub", url: "https://github.com/templatehub", handle: "templatehub" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 via-green-50 to-emerald-50 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-lime-500/3 via-green-500/3 to-emerald-500/3"></div>
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-gradient-to-br from-lime-300/12 to-green-300/12 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-br from-emerald-300/12 to-teal-300/12 rounded-full blur-3xl"></div>
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 relative z-20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl">TemplateHub</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/browse" className="text-sm font-medium hover:text-primary transition-colors">
              Browse Templates
            </Link>
            <Link to="/sell" className="text-sm font-medium hover:text-primary transition-colors">
              Start Selling
            </Link>
            <Link to="/custom" className="text-sm font-medium hover:text-primary transition-colors">
              Custom Development
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" size="sm">Login</Button>
            </Link>
            <Link to="/signup">
              <Button size="sm">Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Have questions about TemplateHub? We're here to help! Reach out to our team for support, partnerships, or general inquiries.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Inquiry Type *</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="billing">Billing & Payments</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                        <SelectItem value="creator">Creator Support</SelectItem>
                        <SelectItem value="custom">Custom Development</SelectItem>
                        <SelectItem value="press">Press & Media</SelectItem>
                        <SelectItem value="legal">Legal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      placeholder="Brief description of your inquiry"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Send className="w-4 h-4 mr-2 animate-pulse" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-slate-600 text-center">
                    We typically respond within 24 hours during business days
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
                <CardDescription>
                  Choose the best way to reach us
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-slate-900">{method.title}</h4>
                        <p className="text-sm text-slate-600 mb-1">{method.description}</p>
                        <p className="text-sm font-medium text-slate-800">{method.contact}</p>
                        <p className="text-xs text-slate-500">{method.details}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Office Information */}
            <Card>
              <CardHeader>
                <CardTitle>Office Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1">Address</h4>
                    <p className="text-sm text-slate-600">{officeInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1">Business Hours</h4>
                    <p className="text-sm text-slate-600">{officeInfo.hours}</p>
                    <p className="text-xs text-slate-500">{officeInfo.timezone}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Globe className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium text-slate-900 mb-1">Global Reach</h4>
                    <p className="text-sm text-slate-600">Serving customers worldwide</p>
                    <p className="text-xs text-slate-500">24/7 support via email</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle>Follow Us</CardTitle>
                <CardDescription>
                  Connect with us on social media
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        <Icon className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium text-slate-900">{social.name}</p>
                          <p className="text-sm text-slate-600">{social.handle}</p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Link to="/help" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    Help Center
                  </Button>
                </Link>
                <Link to="/terms" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    Terms of Service
                  </Button>
                </Link>
                <Link to="/privacy" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    Privacy Policy
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>
              Quick answers to common questions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-slate-900 mb-2">How quickly do you respond?</h4>
                <p className="text-sm text-slate-600 mb-4">
                  We respond to all inquiries within 24 hours during business days. For urgent technical issues, our live chat provides immediate assistance.
                </p>

                <h4 className="font-medium text-slate-900 mb-2">Do you offer phone support?</h4>
                <p className="text-sm text-slate-600 mb-4">
                  Yes, we offer phone support during business hours (9 AM - 6 PM EST) for urgent matters and premium customers.
                </p>

                <h4 className="font-medium text-slate-900 mb-2">Can you help with custom projects?</h4>
                <p className="text-sm text-slate-600">
                  Absolutely! We offer custom development services. Visit our Custom Development page or contact our business team for a consultation.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-slate-900 mb-2">What about partnership opportunities?</h4>
                <p className="text-sm text-slate-600 mb-4">
                  We're always interested in partnerships. Reach out to business@templatehub.com with your proposal and we'll get back to you.
                </p>

                <h4 className="font-medium text-slate-900 mb-2">Do you offer enterprise solutions?</h4>
                <p className="text-sm text-slate-600 mb-4">
                  Yes, we provide enterprise licensing, custom solutions, and dedicated support for larger organizations.
                </p>

                <h4 className="font-medium text-slate-900 mb-2">How can I report a bug or issue?</h4>
                <p className="text-sm text-slate-600">
                  Use our support form with "Technical Support" category, or email support@templatehub.com with detailed information about the issue.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
