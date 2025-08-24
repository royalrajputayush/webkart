import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Zap, 
  ArrowLeft, 
  FileText, 
  Shield, 
  Users, 
  Building, 
  Globe,
  Check,
  X,
  AlertCircle,
  Download,
  Eye,
  Edit,
  Share2,
  DollarSign
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Licenses() {
  const licenseTypes = [
    {
      id: "standard",
      name: "Standard License",
      price: "Included",
      description: "Perfect for personal projects and small businesses",
      icon: Users,
      color: "bg-blue-500",
      popular: true,
      features: {
        allowed: [
          "Use in personal projects",
          "Use in commercial projects (single end product)",
          "Modify and customize the template",
          "Use for client work",
          "Create one end product"
        ],
        notAllowed: [
          "Redistribute or resell the template",
          "Use in multiple projects",
          "Share with other developers",
          "Create multiple end products",
          "Sublicense to others"
        ]
      },
      useCases: [
        "Personal websites",
        "Small business sites",
        "Client projects",
        "Portfolio websites",
        "Startup landing pages"
      ]
    },
    {
      id: "extended",
      name: "Extended License",
      price: "+$50",
      description: "For products where end users are charged",
      icon: DollarSign,
      color: "bg-green-500",
      popular: false,
      features: {
        allowed: [
          "All Standard License permissions",
          "Use in products sold to end users",
          "Charge end users for access",
          "SaaS applications",
          "Premium memberships",
          "Paid mobile apps"
        ],
        notAllowed: [
          "Redistribute as a template",
          "Sell the template itself",
          "Use in competing template marketplaces",
          "Create template generators",
          "Wholesale distribution"
        ]
      },
      useCases: [
        "SaaS platforms",
        "Premium web applications",
        "Paid mobile apps",
        "Subscription services",
        "E-learning platforms"
      ]
    },
    {
      id: "enterprise",
      name: "Enterprise License",
      price: "Contact Sales",
      description: "For large organizations and unlimited usage",
      icon: Building,
      color: "bg-purple-500",
      popular: false,
      features: {
        allowed: [
          "All Extended License permissions",
          "Unlimited projects and end products",
          "Multiple developer access",
          "White-label solutions",
          "Custom license terms",
          "Priority support"
        ],
        notAllowed: [
          "Redistribute as competing templates",
          "Sell or license to third parties",
          "Create derivative template products",
          "Use in template marketplaces"
        ]
      },
      useCases: [
        "Large corporations",
        "Multi-project agencies",
        "Enterprise software",
        "White-label platforms",
        "Custom solutions"
      ]
    },
    {
      id: "open-source",
      name: "Open Source",
      price: "Free",
      description: "MIT/GPL licensed templates for open projects",
      icon: Globe,
      color: "bg-orange-500",
      popular: false,
      features: {
        allowed: [
          "Use in any project",
          "Modify and distribute",
          "Commercial use",
          "Private use",
          "Fork and contribute",
          "No attribution required (MIT)"
        ],
        notAllowed: [
          "Hold creators liable",
          "Use creator's name without permission",
          "Remove original license",
          "Claim ownership of original work"
        ]
      },
      useCases: [
        "Open source projects",
        "Educational purposes",
        "Community contributions",
        "Non-profit organizations",
        "Research projects"
      ]
    }
  ];

  const commonQuestions = [
    {
      question: "Can I use templates for client work?",
      answer: "Yes, with Standard License or higher, you can use templates for client projects. The client receives the rights to the final product, but cannot redistribute the original template."
    },
    {
      question: "What happens if I need to upgrade my license?",
      answer: "You can upgrade your license at any time by paying the difference. Contact our support team to process the upgrade for your existing purchase."
    },
    {
      question: "Can I modify the template's code?",
      answer: "Yes, all licenses allow you to modify and customize the template code to suit your needs. You own the customized version, but not the original template."
    },
    {
      question: "Do I need Extended License for a SaaS product?",
      answer: "Yes, if you're charging users to access your SaaS application that uses our template, you need an Extended License or higher."
    },
    {
      question: "Can multiple developers work on the same template?",
      answer: "Standard License allows one developer. For multiple developers, you need Enterprise License or separate licenses for each developer."
    },
    {
      question: "What about mobile app store distribution?",
      answer: "Standard License covers free apps. For paid apps or apps with in-app purchases, you need an Extended License."
    }
  ];

  const comparisonFeatures = [
    { feature: "Personal Use", standard: true, extended: true, enterprise: true, openSource: true },
    { feature: "Commercial Use", standard: true, extended: true, enterprise: true, openSource: true },
    { feature: "Client Projects", standard: true, extended: true, enterprise: true, openSource: true },
    { feature: "Modify Code", standard: true, extended: true, enterprise: true, openSource: true },
    { feature: "Single End Product", standard: true, extended: true, enterprise: true, openSource: true },
    { feature: "Charge End Users", standard: false, extended: true, enterprise: true, openSource: true },
    { feature: "SaaS Applications", standard: false, extended: true, enterprise: true, openSource: true },
    { feature: "Unlimited Projects", standard: false, extended: false, enterprise: true, openSource: true },
    { feature: "Multiple Developers", standard: false, extended: false, enterprise: true, openSource: true },
    { feature: "White-label Rights", standard: false, extended: false, enterprise: true, openSource: true },
    { feature: "Redistribute Code", standard: false, extended: false, enterprise: false, openSource: true },
    { feature: "Priority Support", standard: false, extended: false, enterprise: true, openSource: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/3 via-purple-500/3 to-pink-500/3"></div>
      <div className="absolute top-0 left-1/6 w-80 h-80 bg-gradient-to-br from-indigo-300/10 to-purple-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/6 w-80 h-80 bg-gradient-to-br from-pink-300/10 to-rose-300/10 rounded-full blur-3xl"></div>
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
            <FileText className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Template Licenses
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Understand the different license types and choose the right one for your project needs
          </p>
        </div>

        {/* License Types Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {licenseTypes.map((license) => {
            const Icon = license.icon;
            return (
              <Card key={license.id} className={`relative overflow-hidden hover:shadow-lg transition-shadow ${license.popular ? 'ring-2 ring-primary' : ''}`}>
                {license.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center">
                  <div className={`w-12 h-12 rounded-lg ${license.color} text-white mx-auto mb-3 flex items-center justify-center`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg">{license.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{license.price}</div>
                  <CardDescription className="text-sm">
                    {license.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant={license.popular ? "default" : "outline"}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Detailed License Information */}
        <Tabs defaultValue="details" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="details">License Details</TabsTrigger>
            <TabsTrigger value="comparison">Comparison</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>

          {/* License Details */}
          <TabsContent value="details">
            <div className="space-y-8">
              {licenseTypes.map((license) => {
                const Icon = license.icon;
                return (
                  <Card key={license.id}>
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${license.color} text-white`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{license.name}</CardTitle>
                          <CardDescription>{license.description}</CardDescription>
                        </div>
                        <div className="ml-auto">
                          <Badge variant="outline" className="text-lg px-3 py-1">
                            {license.price}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-6">
                        {/* What's Allowed */}
                        <div>
                          <h4 className="font-medium text-green-700 mb-3 flex items-center">
                            <Check className="w-4 h-4 mr-2" />
                            What's Allowed
                          </h4>
                          <ul className="space-y-2">
                            {license.features.allowed.map((feature, index) => (
                              <li key={index} className="flex items-start space-x-2 text-sm">
                                <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* What's Not Allowed */}
                        <div>
                          <h4 className="font-medium text-red-700 mb-3 flex items-center">
                            <X className="w-4 h-4 mr-2" />
                            What's Not Allowed
                          </h4>
                          <ul className="space-y-2">
                            {license.features.notAllowed.map((feature, index) => (
                              <li key={index} className="flex items-start space-x-2 text-sm">
                                <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Use Cases */}
                        <div>
                          <h4 className="font-medium text-blue-700 mb-3 flex items-center">
                            <Eye className="w-4 h-4 mr-2" />
                            Common Use Cases
                          </h4>
                          <ul className="space-y-2">
                            {license.useCases.map((useCase, index) => (
                              <li key={index} className="flex items-start space-x-2 text-sm">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span>{useCase}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* License Comparison */}
          <TabsContent value="comparison">
            <Card>
              <CardHeader>
                <CardTitle>License Comparison</CardTitle>
                <CardDescription>
                  Compare features across all license types to find the right fit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 font-medium">Feature</th>
                        <th className="text-center py-3 px-4 font-medium">Standard</th>
                        <th className="text-center py-3 px-4 font-medium">Extended</th>
                        <th className="text-center py-3 px-4 font-medium">Enterprise</th>
                        <th className="text-center py-3 px-4 font-medium">Open Source</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonFeatures.map((row, index) => (
                        <tr key={index} className="border-b hover:bg-slate-50">
                          <td className="py-3 px-4 font-medium">{row.feature}</td>
                          <td className="text-center py-3 px-4">
                            {row.standard ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-red-500 mx-auto" />
                            )}
                          </td>
                          <td className="text-center py-3 px-4">
                            {row.extended ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-red-500 mx-auto" />
                            )}
                          </td>
                          <td className="text-center py-3 px-4">
                            {row.enterprise ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-red-500 mx-auto" />
                            )}
                          </td>
                          <td className="text-center py-3 px-4">
                            {row.openSource ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-red-500 mx-auto" />
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* FAQ */}
          <TabsContent value="faq">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
                <p className="text-slate-600">
                  Common questions about template licenses and usage rights
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {commonQuestions.map((item, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{item.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600">{item.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Important Notes */}
        <Card className="mt-12 border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="flex items-center text-amber-800">
              <AlertCircle className="w-5 h-5 mr-2" />
              Important License Information
            </CardTitle>
          </CardHeader>
          <CardContent className="text-amber-700">
            <div className="space-y-3">
              <p>
                <strong>License Verification:</strong> All purchases include license documentation. Keep your purchase receipt as proof of licensing.
              </p>
              <p>
                <strong>Usage Monitoring:</strong> We may monitor usage to ensure compliance with license terms. Violations may result in license termination.
              </p>
              <p>
                <strong>Updates & Support:</strong> License level determines support priority and access to template updates.
              </p>
              <p>
                <strong>Legal Questions:</strong> For specific legal questions about licensing, contact our legal team at legal@templatehub.com.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact & Support */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Need Help Choosing?</CardTitle>
              <CardDescription>
                Not sure which license is right for your project?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-slate-600">
                Our team can help you choose the right license based on your specific use case and requirements.
              </p>
              <div className="space-y-2">
                <Button className="w-full">
                  Contact Sales Team
                </Button>
                <Button variant="outline" className="w-full">
                  Schedule Consultation
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>License Resources</CardTitle>
              <CardDescription>
                Additional resources and documentation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link to="/docs" className="flex items-center justify-between p-3 border rounded-lg hover:bg-slate-50 transition-colors">
                <div className="flex items-center space-x-3">
                  <FileText className="w-4 h-4 text-primary" />
                  <span className="font-medium">License Documentation</span>
                </div>
              </Link>
              
              <Link to="/help" className="flex items-center justify-between p-3 border rounded-lg hover:bg-slate-50 transition-colors">
                <div className="flex items-center space-x-3">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="font-medium">Legal FAQ</span>
                </div>
              </Link>
              
              <Link to="/contact" className="flex items-center justify-between p-3 border rounded-lg hover:bg-slate-50 transition-colors">
                <div className="flex items-center space-x-3">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="font-medium">Contact Legal Team</span>
                </div>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
