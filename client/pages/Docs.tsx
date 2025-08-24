import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Zap, 
  ArrowLeft, 
  Search, 
  BookOpen, 
  Code, 
  Download,
  Upload,
  Settings,
  CreditCard,
  Shield,
  Rocket,
  FileText,
  ExternalLink,
  Copy,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Docs() {
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const gettingStartedGuides = [
    {
      title: "Welcome to TemplateHub",
      description: "Learn the basics of our marketplace",
      icon: Rocket,
      time: "5 min read",
      content: "Getting familiar with TemplateHub features and navigation"
    },
    {
      title: "Buying Your First Template",
      description: "Step-by-step guide to purchasing templates",
      icon: Download,
      time: "3 min read",
      content: "From browsing to downloading your template files"
    },
    {
      title: "Setting Up Templates",
      description: "How to install and configure templates",
      icon: Settings,
      time: "10 min read",
      content: "Installation guides for different frameworks"
    },
    {
      title: "Payment & Billing",
      description: "Understanding payments and subscriptions",
      icon: CreditCard,
      time: "4 min read",
      content: "Payment methods, billing cycles, and refunds"
    }
  ];

  const creatorGuides = [
    {
      title: "Becoming a Creator",
      description: "Start selling your templates",
      icon: Upload,
      time: "8 min read",
      content: "How to join our creator program and submit templates"
    },
    {
      title: "Template Quality Guidelines",
      description: "Standards for template approval",
      icon: Shield,
      time: "12 min read",
      content: "Code quality, design standards, and best practices"
    },
    {
      title: "Pricing Your Templates",
      description: "Strategies for competitive pricing",
      icon: CreditCard,
      time: "6 min read",
      content: "Market research and pricing recommendations"
    },
    {
      title: "Creator Dashboard",
      description: "Managing your templates and earnings",
      icon: Settings,
      time: "7 min read",
      content: "Analytics, payouts, and template management"
    }
  ];

  const apiEndpoints = [
    {
      method: "GET",
      endpoint: "/api/templates",
      description: "Retrieve all templates with optional filtering",
      params: ["category", "search", "sort", "limit", "offset"]
    },
    {
      method: "GET",
      endpoint: "/api/templates/:id",
      description: "Get detailed information about a specific template",
      params: ["include_files", "include_reviews"]
    },
    {
      method: "POST",
      endpoint: "/api/auth/login",
      description: "Authenticate user and receive access token",
      params: ["email", "password"]
    },
    {
      method: "POST",
      endpoint: "/api/purchases",
      description: "Create a new template purchase",
      params: ["template_id", "payment_method"]
    }
  ];

  const codeExamples = {
    javascript: `// Fetch templates with JavaScript
const response = await fetch('/api/templates?category=react&limit=10');
const templates = await response.json();

console.log('Found templates:', templates.data);`,
    
    python: `# Fetch templates with Python
import requests

response = requests.get('https://api.templatehub.com/templates', 
                       params={'category': 'react', 'limit': 10})
templates = response.json()

print(f"Found {len(templates['data'])} templates")`,
    
    curl: `# Fetch templates with cURL
curl -X GET "https://api.templatehub.com/templates?category=react&limit=10" \\
     -H "Authorization: Bearer YOUR_API_KEY" \\
     -H "Content-Type: application/json"`
  };

  const quickLinks = [
    { title: "API Reference", icon: Code, link: "#api", description: "Complete API documentation" },
    { title: "Getting Started", icon: Rocket, link: "#getting-started", description: "New user guides" },
    { title: "Creator Guides", icon: Upload, link: "#creator-guides", description: "For template creators" },
    { title: "Code Examples", icon: FileText, link: "#examples", description: "Implementation examples" },
    { title: "Support", icon: BookOpen, link: "/help", description: "Get help and support" },
    { title: "Contact", icon: ExternalLink, link: "/contact", description: "Contact our team" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/3 via-blue-500/3 to-indigo-500/3"></div>
      <div className="absolute top-20 left-1/6 w-96 h-96 bg-gradient-to-br from-sky-300/10 to-blue-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/6 w-96 h-96 bg-gradient-to-br from-indigo-300/10 to-purple-300/10 rounded-full blur-3xl"></div>
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
          <div className="flex items-center justify-center mb-4">
            <BookOpen className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Documentation
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Everything you need to know about using TemplateHub, from getting started to advanced integrations
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
            <Input
              placeholder="Search documentation..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Quick Links */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Quick Navigation</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
                  <Link to={link.link}>
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
                  </Link>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Main Documentation */}
        <Tabs defaultValue="getting-started" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
            <TabsTrigger value="creator-guides">Creator Guides</TabsTrigger>
            <TabsTrigger value="api">API Reference</TabsTrigger>
            <TabsTrigger value="examples">Code Examples</TabsTrigger>
          </TabsList>

          {/* Getting Started */}
          <TabsContent value="getting-started" id="getting-started">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Getting Started</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  New to TemplateHub? Start here to learn the basics of our platform
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {gettingStartedGuides.map((guide, index) => {
                  const Icon = guide.icon;
                  return (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-start space-x-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-lg">{guide.title}</CardTitle>
                              <Badge variant="outline">{guide.time}</Badge>
                            </div>
                            <CardDescription className="mt-2">
                              {guide.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-slate-600 mb-4">{guide.content}</p>
                        <Button variant="outline" size="sm">
                          Read Guide
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </TabsContent>

          {/* Creator Guides */}
          <TabsContent value="creator-guides" id="creator-guides">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Creator Guides</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  Learn how to create, submit, and manage your templates on our marketplace
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {creatorGuides.map((guide, index) => {
                  const Icon = guide.icon;
                  return (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardHeader>
                        <div className="flex items-start space-x-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-lg">{guide.title}</CardTitle>
                              <Badge variant="outline">{guide.time}</Badge>
                            </div>
                            <CardDescription className="mt-2">
                              {guide.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-slate-600 mb-4">{guide.content}</p>
                        <Button variant="outline" size="sm">
                          Read Guide
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </TabsContent>

          {/* API Reference */}
          <TabsContent value="api" id="api">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">API Reference</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  Complete API documentation for integrating with TemplateHub
                </p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Authentication</CardTitle>
                  <CardDescription>
                    All API requests require authentication using API keys
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-slate-100 p-4 rounded-lg">
                    <p className="text-sm text-slate-700 mb-2">Include your API key in the Authorization header:</p>
                    <code className="text-sm">Authorization: Bearer YOUR_API_KEY</code>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>API Endpoints</CardTitle>
                  <CardDescription>
                    Available endpoints for accessing TemplateHub data
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {apiEndpoints.map((endpoint, index) => (
                      <div key={index} className="border rounded-lg p-4">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge variant={endpoint.method === 'GET' ? 'default' : 'secondary'}>
                            {endpoint.method}
                          </Badge>
                          <code className="text-sm font-mono">{endpoint.endpoint}</code>
                        </div>
                        <p className="text-sm text-slate-600 mb-3">{endpoint.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {endpoint.params.map((param) => (
                            <Badge key={param} variant="outline" className="text-xs">
                              {param}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Code Examples */}
          <TabsContent value="examples" id="examples">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Code Examples</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  Implementation examples in different programming languages
                </p>
              </div>

              <div className="space-y-6">
                {Object.entries(codeExamples).map(([language, code]) => (
                  <Card key={language}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="capitalize">{language}</CardTitle>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(code, language)}
                        >
                          {copiedCode === language ? (
                            <>
                              <CheckCircle className="w-4 h-4 mr-2" />
                              Copied
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4 mr-2" />
                              Copy
                            </>
                          )}
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <pre className="bg-slate-100 p-4 rounded-lg overflow-x-auto">
                        <code className="text-sm">{code}</code>
                      </pre>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Additional Resources */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Additional Resources</CardTitle>
            <CardDescription>
              More ways to get help and stay updated
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <BookOpen className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Help Center</h3>
                <p className="text-sm text-slate-600 mb-3">
                  FAQ and troubleshooting guides
                </p>
                <Link to="/help">
                  <Button variant="outline" size="sm">Visit Help Center</Button>
                </Link>
              </div>

              <div className="text-center">
                <ExternalLink className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Community Forum</h3>
                <p className="text-sm text-slate-600 mb-3">
                  Connect with other developers
                </p>
                <Button variant="outline" size="sm">Join Forum</Button>
              </div>

              <div className="text-center">
                <FileText className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Changelog</h3>
                <p className="text-sm text-slate-600 mb-3">
                  Latest updates and features
                </p>
                <Button variant="outline" size="sm">View Changelog</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
