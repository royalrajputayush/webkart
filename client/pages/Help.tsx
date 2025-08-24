import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  ArrowLeft, 
  Search, 
  MessageCircle, 
  Mail, 
  Phone, 
  FileText, 
  Download,
  CreditCard,
  Upload,
  Settings,
  Shield,
  HelpCircle,
  BookOpen,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Help() {
  const [searchQuery, setSearchQuery] = useState("");

  const buyerFAQs = [
    {
      question: "How do I purchase a template?",
      answer: "Browse our templates, click on one you like, review the details, and click 'Buy Now'. You'll be taken through our secure checkout process. Once payment is complete, you'll receive download links immediately."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through Stripe."
    },
    {
      question: "Can I get a refund?",
      answer: "We offer a 30-day money-back guarantee. If you're not satisfied with your purchase, contact our support team within 30 days for a full refund."
    },
    {
      question: "What comes with my template purchase?",
      answer: "You'll receive the complete source code, documentation, setup instructions, and basic support from the creator. Some templates also include design files and additional assets."
    },
    {
      question: "Can I customize the templates?",
      answer: "Yes! All templates come with full source code that you can modify to fit your needs. Many include customization guides to help you get started."
    },
    {
      question: "Do I need technical knowledge to use templates?",
      answer: "Basic web development knowledge is helpful, but many templates include detailed documentation and setup guides. For complex customizations, you might want to hire a developer."
    }
  ];

  const creatorFAQs = [
    {
      question: "How do I start selling templates?",
      answer: "Create an account, go to the 'Start Selling' page, fill out the template submission form with your details, and upload your files. Our team will review your submission within 2-3 business days."
    },
    {
      question: "What's the revenue split?",
      answer: "Creators keep 70% of the sale price, and TemplateHub takes 30%. This covers payment processing, platform maintenance, marketing, and customer support."
    },
    {
      question: "When do I get paid?",
      answer: "Payments are processed monthly for earnings over $50. You'll receive payment via PayPal or bank transfer by the 15th of each month for the previous month's sales."
    },
    {
      question: "What are the quality requirements?",
      answer: "Templates must be original work, well-documented, responsive, and production-ready. Code should be clean and follow best practices. Designs should be modern and professional."
    },
    {
      question: "Can I update my templates after they're live?",
      answer: "Yes! You can upload new versions of your templates at any time. Existing customers will be notified of updates and can download the latest version."
    },
    {
      question: "How do I price my templates?",
      answer: "Consider the complexity, time invested, and market demand. Most templates range from $25-$100. Research similar templates to find competitive pricing."
    }
  ];

  const technicalFAQs = [
    {
      question: "What technologies are supported?",
      answer: "We support templates built with popular frameworks like React, Vue, Angular, Next.js, WordPress, HTML/CSS/JS, and more. Include clear documentation about requirements."
    },
    {
      question: "How do I report a bug in a template?",
      answer: "Contact the template creator directly through their profile, or reach out to our support team if you can't resolve the issue. Include details about the problem and your setup."
    },
    {
      question: "Are templates mobile responsive?",
      answer: "All approved templates are required to be mobile responsive. Look for the 'Mobile Responsive' tag in template listings to confirm."
    },
    {
      question: "Do templates include hosting?",
      answer: "No, templates are source code only. You'll need to arrange your own hosting. Many templates include deployment guides for popular hosting services."
    },
    {
      question: "Can I use templates for client projects?",
      answer: "Yes, most templates come with commercial licenses that allow use in client projects. Check the specific license terms for each template."
    },
    {
      question: "What if a template doesn't work?",
      answer: "First, check the documentation and requirements. If you still have issues, contact the creator or our support team. We'll help resolve the problem or arrange a refund if needed."
    }
  ];

  const quickLinks = [
    {
      title: "Getting Started Guide",
      description: "New to TemplateHub? Start here",
      icon: BookOpen,
      link: "/getting-started"
    },
    {
      title: "Creator Guidelines",
      description: "Learn how to create and sell templates",
      icon: Upload,
      link: "/creator-guide"
    },
    {
      title: "Template Licenses",
      description: "Understand usage rights and restrictions",
      icon: Shield,
      link: "/licenses"
    },
    {
      title: "Payment & Billing",
      description: "Manage your payments and subscriptions",
      icon: CreditCard,
      link: "/billing"
    },
    {
      title: "Account Settings",
      description: "Update your profile and preferences",
      icon: Settings,
      link: "/settings"
    },
    {
      title: "Community Forum",
      description: "Connect with other users and creators",
      icon: Users,
      link: "/community"
    }
  ];

  const filteredContent = (faqs: typeof buyerFAQs) => {
    if (!searchQuery) return faqs;
    return faqs.filter(
      faq =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/3 via-yellow-500/3 to-orange-500/3"></div>
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-gradient-to-br from-amber-300/10 to-yellow-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-gradient-to-br from-orange-300/10 to-red-300/10 rounded-full blur-3xl"></div>
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
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <HelpCircle className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Help Center
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Find answers to common questions, guides, and get support for your TemplateHub experience
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
            <Input
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Quick Links
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-base">{link.title}</CardTitle>
                        <CardDescription className="text-sm">
                          {link.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>

        {/* FAQ Sections */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Frequently Asked Questions</CardTitle>
            <CardDescription>
              Find answers to the most common questions about TemplateHub
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="buyers" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="buyers">For Buyers</TabsTrigger>
                <TabsTrigger value="creators">For Creators</TabsTrigger>
                <TabsTrigger value="technical">Technical</TabsTrigger>
              </TabsList>

              <TabsContent value="buyers" className="mt-6">
                <Accordion type="single" collapsible className="w-full">
                  {filteredContent(buyerFAQs).map((faq, index) => (
                    <AccordionItem key={index} value={`buyer-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>

              <TabsContent value="creators" className="mt-6">
                <Accordion type="single" collapsible className="w-full">
                  {filteredContent(creatorFAQs).map((faq, index) => (
                    <AccordionItem key={index} value={`creator-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>

              <TabsContent value="technical" className="mt-6">
                <Accordion type="single" collapsible className="w-full">
                  {filteredContent(technicalFAQs).map((faq, index) => (
                    <AccordionItem key={index} value={`technical-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-slate-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Contact Support */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Still Need Help?</CardTitle>
              <CardDescription>
                Can't find what you're looking for? Our support team is here to help
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start space-x-3">
                <MessageCircle className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium">Live Chat</h4>
                  <p className="text-sm text-slate-600 mb-2">
                    Get instant help from our support team
                  </p>
                  <Button size="sm">Start Chat</Button>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium">Email Support</h4>
                  <p className="text-sm text-slate-600 mb-2">
                    Send us an email and we'll respond within 24 hours
                  </p>
                  <p className="text-sm font-mono text-slate-700">
                    support@templatehub.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <h4 className="font-medium">Phone Support</h4>
                  <p className="text-sm text-slate-600 mb-2">
                    Call us Monday-Friday, 9 AM - 6 PM EST
                  </p>
                  <p className="text-sm font-mono text-slate-700">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Popular Resources</CardTitle>
              <CardDescription>
                Helpful guides and documentation to get you started
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Link to="/getting-started" className="flex items-center justify-between p-3 border rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span className="font-medium">Getting Started Guide</span>
                  </div>
                  <Badge variant="outline">Popular</Badge>
                </Link>

                <Link to="/creator-guide" className="flex items-center justify-between p-3 border rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Upload className="w-4 h-4 text-primary" />
                    <span className="font-medium">Creator Guidelines</span>
                  </div>
                  <Badge variant="outline">New</Badge>
                </Link>

                <Link to="/api-docs" className="flex items-center justify-between p-3 border rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-4 h-4 text-primary" />
                    <span className="font-medium">API Documentation</span>
                  </div>
                </Link>

                <Link to="/downloads" className="flex items-center justify-between p-3 border rounded-lg hover:bg-slate-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <Download className="w-4 h-4 text-primary" />
                    <span className="font-medium">Download Center</span>
                  </div>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Status */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>System Status</CardTitle>
            <CardDescription>
              Current status of TemplateHub services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Platform Status</span>
                <Badge className="bg-green-100 text-green-800">Operational</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Payment Processing</span>
                <Badge className="bg-green-100 text-green-800">Operational</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>File Downloads</span>
                <Badge className="bg-green-100 text-green-800">Operational</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span>Email Delivery</span>
                <Badge className="bg-green-100 text-green-800">Operational</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
