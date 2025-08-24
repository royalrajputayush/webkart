import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Zap, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-500/2 via-gray-500/2 to-zinc-500/2"></div>
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-gradient-to-br from-slate-300/8 to-gray-300/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-gradient-to-br from-zinc-300/8 to-neutral-300/8 rounded-full blur-3xl"></div>
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
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Please read these Terms of Service carefully before using TemplateHub
          </p>
          <p className="text-sm text-slate-500 mt-2">
            Last updated: January 1, 2024
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Terms of Service Agreement</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              {/* Introduction */}
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
                <p className="text-slate-700 mb-4">
                  Welcome to TemplateHub ("we," "our," or "us"). These Terms of Service ("Terms") govern your use of our website and services located at templatehub.com (the "Service") operated by TemplateHub Inc.
                </p>
                <p className="text-slate-700">
                  By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.
                </p>
              </section>

              <Separator className="my-6" />

              {/* Definitions */}
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">2. Definitions</h2>
                <div className="space-y-3">
                  <div>
                    <strong className="text-slate-900">"Service"</strong>
                    <span className="text-slate-700"> refers to the TemplateHub website and marketplace platform.</span>
                  </div>
                  <div>
                    <strong className="text-slate-900">"User," "you," or "your"</strong>
                    <span className="text-slate-700"> refers to the individual or entity using our Service.</span>
                  </div>
                  <div>
                    <strong className="text-slate-900">"Creator"</strong>
                    <span className="text-slate-700"> refers to users who upload and sell templates on our platform.</span>
                  </div>
                  <div>
                    <strong className="text-slate-900">"Buyer"</strong>
                    <span className="text-slate-700"> refers to users who purchase templates from our platform.</span>
                  </div>
                  <div>
                    <strong className="text-slate-900">"Content"</strong>
                    <span className="text-slate-700"> refers to templates, code, designs, and other materials uploaded to our platform.</span>
                  </div>
                </div>
              </section>

              <Separator className="my-6" />

              {/* User Accounts */}
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">3. User Accounts</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">3.1 Account Creation</h3>
                    <p className="text-slate-700">
                      You must create an account to use certain features of our Service. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">3.2 Account Information</h3>
                    <p className="text-slate-700">
                      You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">3.3 Account Termination</h3>
                    <p className="text-slate-700">
                      We reserve the right to suspend or terminate your account at any time for violations of these Terms or for any other reason we deem appropriate.
                    </p>
                  </div>
                </div>
              </section>

              <Separator className="my-6" />

              {/* Marketplace Rules */}
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">4. Marketplace Rules</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">4.1 For Creators</h3>
                    <ul className="list-disc pl-6 space-y-2 text-slate-700">
                      <li>You must own or have proper licensing for all content you upload</li>
                      <li>Content must be original work or properly attributed</li>
                      <li>Templates must be functional and match their descriptions</li>
                      <li>You must provide accurate documentation and setup instructions</li>
                      <li>Pricing must be reasonable and clearly stated</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">4.2 For Buyers</h3>
                    <ul className="list-disc pl-6 space-y-2 text-slate-700">
                      <li>Purchases are final unless otherwise specified</li>
                      <li>You receive usage rights according to the template's license</li>
                      <li>You may not redistribute or resell purchased templates</li>
                      <li>Support is provided as described in the template listing</li>
                    </ul>
                  </div>
                </div>
              </section>

              <Separator className="my-6" />

              {/* Revenue Sharing */}
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">5. Revenue Sharing</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">5.1 Creator Revenue</h3>
                    <p className="text-slate-700">
                      Creators receive 70% of the net revenue from template sales. TemplateHub retains 30% to cover platform costs, payment processing, and support services.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">5.2 Payouts</h3>
                    <p className="text-slate-700">
                      Payouts are processed monthly for earnings above $50. Creators must provide valid payment information and tax documentation as required.
                    </p>
                  </div>
                </div>
              </section>

              <Separator className="my-6" />

              {/* Intellectual Property */}
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">6. Intellectual Property</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">6.1 Creator Content</h3>
                    <p className="text-slate-700">
                      Creators retain ownership of their original content while granting TemplateHub a license to display, distribute, and market their templates on the platform.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">6.2 Platform Rights</h3>
                    <p className="text-slate-700">
                      TemplateHub owns all rights to the platform, including the website, branding, and proprietary technology.
                    </p>
                  </div>
                </div>
              </section>

              <Separator className="my-6" />

              {/* Prohibited Uses */}
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">7. Prohibited Uses</h2>
                <p className="text-slate-700 mb-4">You may not use our Service:</p>
                <ul className="list-disc pl-6 space-y-2 text-slate-700">
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                  <li>To upload or transmit viruses or any other type of malicious code</li>
                  <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                </ul>
              </section>

              <Separator className="my-6" />

              {/* Disclaimers */}
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">8. Disclaimers</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">8.1 Service Availability</h3>
                    <p className="text-slate-700">
                      We do not guarantee that our Service will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Service.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">8.2 Content Quality</h3>
                    <p className="text-slate-700">
                      While we review content for quality, we do not guarantee the functionality, security, or suitability of any templates for specific purposes.
                    </p>
                  </div>
                </div>
              </section>

              <Separator className="my-6" />

              {/* Limitation of Liability */}
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">9. Limitation of Liability</h2>
                <p className="text-slate-700">
                  In no event shall TemplateHub, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Service.
                </p>
              </section>

              <Separator className="my-6" />

              {/* Termination */}
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">10. Termination</h2>
                <p className="text-slate-700">
                  We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
                </p>
              </section>

              <Separator className="my-6" />

              {/* Changes to Terms */}
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">11. Changes to Terms</h2>
                <p className="text-slate-700">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                </p>
              </section>

              <Separator className="my-6" />

              {/* Contact Information */}
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">12. Contact Information</h2>
                <p className="text-slate-700 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="text-slate-700">
                    <strong>Email:</strong> legal@templatehub.com<br />
                    <strong>Address:</strong> 123 Template Street, Design City, DC 12345<br />
                    <strong>Phone:</strong> +1 (555) 123-4567
                  </p>
                </div>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
