import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Zap, ArrowLeft, Shield, Eye, Lock, Database, Globe, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-gray-50 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/2 via-slate-500/2 to-gray-500/2"></div>
      <div className="absolute top-20 left-1/3 w-96 h-96 bg-gradient-to-br from-blue-300/8 to-slate-300/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/3 w-96 h-96 bg-gradient-to-br from-gray-300/8 to-zinc-300/8 rounded-full blur-3xl"></div>
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
            <Shield className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-slate-500 mt-2">
            Last updated: January 1, 2024
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-slate max-w-none">
              {/* Introduction */}
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Eye className="w-5 h-5 text-primary mr-2" />
                  1. Introduction
                </h2>
                <p className="text-slate-700 mb-4">
                  TemplateHub Inc. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
                </p>
                <p className="text-slate-700">
                  By using our Service, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with our policies and practices, do not use our Service.
                </p>
              </section>

              <Separator className="my-6" />

              {/* Information We Collect */}
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Database className="w-5 h-5 text-primary mr-2" />
                  2. Information We Collect
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">2.1 Personal Information</h3>
                    <p className="text-slate-700 mb-2">We may collect personal information that you voluntarily provide, including:</p>
                    <ul className="list-disc pl-6 space-y-1 text-slate-700">
                      <li>Name and contact information (email address, phone number)</li>
                      <li>Account credentials (username, password)</li>
                      <li>Payment information (processed securely through third-party providers)</li>
                      <li>Profile information (bio, profile picture, social media links)</li>
                      <li>Communication preferences and settings</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">2.2 Usage Data</h3>
                    <p className="text-slate-700 mb-2">We automatically collect certain information when you use our Service:</p>
                    <ul className="list-disc pl-6 space-y-1 text-slate-700">
                      <li>Device information (IP address, browser type, operating system)</li>
                      <li>Usage patterns (pages visited, time spent, click patterns)</li>
                      <li>Location data (general geographic location based on IP)</li>
                      <li>Cookie and tracking data (as described in our Cookie Policy)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">2.3 Creator Content</h3>
                    <p className="text-slate-700">
                      If you're a creator, we collect information about your templates, including descriptions, files, pricing, and performance analytics.
                    </p>
                  </div>
                </div>
              </section>

              <Separator className="my-6" />

              {/* How We Use Information */}
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Lock className="w-5 h-5 text-primary mr-2" />
                  3. How We Use Your Information
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">3.1 Service Provision</h3>
                    <ul className="list-disc pl-6 space-y-1 text-slate-700">
                      <li>Create and manage your account</li>
                      <li>Process transactions and payments</li>
                      <li>Deliver purchased templates and services</li>
                      <li>Provide customer support</li>
                      <li>Communicate about your account and our services</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">3.2 Platform Improvement</h3>
                    <ul className="list-disc pl-6 space-y-1 text-slate-700">
                      <li>Analyze usage patterns to improve our platform</li>
                      <li>Develop new features and services</li>
                      <li>Conduct research and analytics</li>
                      <li>Troubleshoot technical issues</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">3.3 Marketing and Communication</h3>
                    <ul className="list-disc pl-6 space-y-1 text-slate-700">
                      <li>Send promotional emails and newsletters (with your consent)</li>
                      <li>Personalize your experience and recommendations</li>
                      <li>Display relevant advertisements</li>
                      <li>Notify you about platform updates and new features</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">3.4 Legal and Security</h3>
                    <ul className="list-disc pl-6 space-y-1 text-slate-700">
                      <li>Comply with legal obligations</li>
                      <li>Protect against fraud and abuse</li>
                      <li>Enforce our Terms of Service</li>
                      <li>Investigate and prevent security incidents</li>
                    </ul>
                  </div>
                </div>
              </section>

              <Separator className="my-6" />

              {/* Information Sharing */}
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Users className="w-5 h-5 text-primary mr-2" />
                  4. Information Sharing and Disclosure
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">4.1 Service Providers</h3>
                    <p className="text-slate-700">
                      We may share your information with trusted third-party service providers who assist us in operating our platform, including payment processors, hosting providers, and analytics services.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">4.2 Business Transfers</h3>
                    <p className="text-slate-700">
                      In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">4.3 Legal Requirements</h3>
                    <p className="text-slate-700">
                      We may disclose your information if required to do so by law or in response to valid requests by public authorities.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">4.4 Public Information</h3>
                    <p className="text-slate-700">
                      Information you choose to make public (such as your creator profile, template descriptions, and reviews) will be visible to other users.
                    </p>
                  </div>
                </div>
              </section>

              <Separator className="my-6" />

              {/* Data Security */}
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Shield className="w-5 h-5 text-primary mr-2" />
                  5. Data Security
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">5.1 Security Measures</h3>
                    <p className="text-slate-700 mb-2">We implement appropriate security measures to protect your information:</p>
                    <ul className="list-disc pl-6 space-y-1 text-slate-700">
                      <li>Encryption of data in transit and at rest</li>
                      <li>Regular security audits and assessments</li>
                      <li>Access controls and employee training</li>
                      <li>Secure payment processing through certified providers</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">5.2 Data Breach Response</h3>
                    <p className="text-slate-700">
                      In the event of a data breach, we will notify affected users and relevant authorities as required by applicable law.
                    </p>
                  </div>
                </div>
              </section>

              <Separator className="my-6" />

              {/* Your Rights */}
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">6. Your Privacy Rights</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">6.1 Access and Portability</h3>
                    <p className="text-slate-700">
                      You have the right to access your personal information and request a copy of your data in a portable format.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">6.2 Correction and Updates</h3>
                    <p className="text-slate-700">
                      You can update your account information at any time through your profile settings or by contacting us.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">6.3 Deletion</h3>
                    <p className="text-slate-700">
                      You may request deletion of your account and personal information, subject to certain legal and business requirements.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">6.4 Marketing Opt-out</h3>
                    <p className="text-slate-700">
                      You can unsubscribe from marketing communications at any time by clicking the unsubscribe link in emails or updating your preferences.
                    </p>
                  </div>
                </div>
              </section>

              <Separator className="my-6" />

              {/* Cookies and Tracking */}
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">7. Cookies and Tracking Technologies</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">7.1 Cookie Usage</h3>
                    <p className="text-slate-700 mb-2">We use cookies and similar technologies for:</p>
                    <ul className="list-disc pl-6 space-y-1 text-slate-700">
                      <li>Authentication and session management</li>
                      <li>Remembering your preferences</li>
                      <li>Analytics and performance monitoring</li>
                      <li>Personalized content and advertisements</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">7.2 Cookie Control</h3>
                    <p className="text-slate-700">
                      You can control cookie settings through your browser preferences. However, disabling certain cookies may affect the functionality of our Service.
                    </p>
                  </div>
                </div>
              </section>

              <Separator className="my-6" />

              {/* Third-Party Services */}
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Globe className="w-5 h-5 text-primary mr-2" />
                  8. Third-Party Services
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">8.1 External Links</h3>
                    <p className="text-slate-700">
                      Our Service may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">8.2 Integration Partners</h3>
                    <p className="text-slate-700">
                      We integrate with various third-party services (payment processors, analytics providers, etc.) that have their own privacy policies.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">8.3 OAuth Providers</h3>
                    <p className="text-slate-700">
                      If you sign in using third-party services (Google, GitHub, etc.), we receive limited information as authorized by you and permitted by those services.
                    </p>
                  </div>
                </div>
              </section>

              <Separator className="my-6" />

              {/* Children's Privacy */}
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">9. Children's Privacy</h2>
                <p className="text-slate-700">
                  Our Service is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us.
                </p>
              </section>

              <Separator className="my-6" />

              {/* International Data Transfers */}
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">10. International Data Transfers</h2>
                <p className="text-slate-700">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your personal information in accordance with applicable data protection laws.
                </p>
              </section>

              <Separator className="my-6" />

              {/* Data Retention */}
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">11. Data Retention</h2>
                <p className="text-slate-700">
                  We retain your personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements.
                </p>
              </section>

              <Separator className="my-6" />

              {/* Changes to Privacy Policy */}
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">12. Changes to This Privacy Policy</h2>
                <p className="text-slate-700">
                  We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
                </p>
              </section>

              <Separator className="my-6" />

              {/* Contact Information */}
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">13. Contact Us</h2>
                <p className="text-slate-700 mb-4">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="text-slate-700">
                    <strong>Email:</strong> privacy@templatehub.com<br />
                    <strong>Address:</strong> 123 Template Street, Design City, DC 12345<br />
                    <strong>Phone:</strong> +1 (555) 123-4567<br />
                    <strong>Data Protection Officer:</strong> dpo@templatehub.com
                  </p>
                </div>
              </section>

              {/* Regional Privacy Rights */}
              <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">14. Regional Privacy Rights</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">14.1 GDPR (European Union)</h3>
                    <p className="text-slate-700">
                      If you are a resident of the European Union, you have additional rights under the General Data Protection Regulation (GDPR), including the right to object to processing and the right to be forgotten.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">14.2 CCPA (California)</h3>
                    <p className="text-slate-700">
                      California residents have specific rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information is collected and the right to opt-out of the sale of personal information.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-slate-900 mb-2">14.3 Other Jurisdictions</h3>
                    <p className="text-slate-700">
                      We comply with applicable privacy laws in all jurisdictions where we operate. Contact us for specific information about your rights.
                    </p>
                  </div>
                </div>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
