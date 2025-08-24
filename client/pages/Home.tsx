import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Zap, Shield, Users, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const featuredTemplates = [
    {
      id: 1,
      title: "Modern E-commerce Store",
      description: "Complete online store with shopping cart and payments",
      price: 49,
      category: "E-commerce",
      rating: 4.8,
      image: "https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg",
      tags: ["React", "TailwindCSS", "Stripe"]
    },
    {
      id: 2,
      title: "Creative Portfolio",
      description: "Stunning portfolio for designers and photographers",
      price: 29,
      category: "Portfolio",
      rating: 4.9,
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
      tags: ["Next.js", "Framer Motion", "TypeScript"]
    },
    {
      id: 3,
      title: "Restaurant Website",
      description: "Modern restaurant site with menu and reservations",
      price: 39,
      category: "Restaurant",
      rating: 4.7,
      image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg",
      tags: ["React", "TailwindCSS", "Firebase"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content: "Found the perfect e-commerce template that saved me weeks of development time.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/25651531/pexels-photo-25651531.jpeg"
    },
    {
      name: "Mike Chen",
      role: "Freelance Developer",
      content: "Great platform to sell my templates. The commission rates are fair and payments are quick.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/19987431/pexels-photo-19987431.jpeg"
    },
    {
      name: "Emily Rodriguez",
      role: "Startup Founder",
      content: "Affordable, high-quality templates that helped us launch quickly without breaking the bank.",
      rating: 5,
      avatar: "https://images.pexels.com/photos/10850704/pexels-photo-10850704.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl">TemplateHub</span>
          </div>
          
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

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-100 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-purple-500/5 to-indigo-500/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-violet-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Ready-Made Websites &amp; Apps
            <span className="block text-primary">Built by Experts</span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Buy professional templates or sell your creations. Get your business online in minutes, not months.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/browse">
              <Button size="lg" className="w-full sm:w-auto">
                Browse Templates
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link to="/sell">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Start Selling
              </Button>
            </Link>
          </div>

          <div className="mt-12 flex justify-center items-center space-x-8 text-slate-500">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span className="text-sm">10,000+ Happy Customers</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-sm">4.9/5 Average Rating</span>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1181346/pexels-photo-1181346.jpeg"
                alt="Team collaborating on web development projects"
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Collaborative Template Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-emerald-300/30 to-teal-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-cyan-300/30 to-blue-300/30 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Simple steps to get your business online or start earning from your skills
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Browse &amp; Choose</h3>
              <p className="text-slate-600 mb-4">
                Explore our curated collection of professional templates across various categories
              </p>
              <div className="max-w-xs mx-auto rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://images.pexels.com/photos/16675631/pexels-photo-16675631.jpeg"
                  alt="Browse templates on mobile"
                  className="w-full h-32 object-cover"
                />
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Purchase &amp; Download</h3>
              <p className="text-slate-600 mb-4">
                Secure payment and instant access to source code and documentation
              </p>
              <div className="max-w-xs mx-auto rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg"
                  alt="Download and access templates"
                  className="w-full h-32 object-cover"
                />
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Deploy &amp; Launch</h3>
              <p className="text-slate-600 mb-4">
                Customize and deploy your website with our documentation and support
              </p>
              <div className="max-w-xs mx-auto rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg"
                  alt="Deploy and launch your website"
                  className="w-full h-32 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Templates */}
      <section className="py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 relative">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-rose-300/20 to-pink-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-orange-300/20 to-amber-300/20 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Featured Templates
              </h2>
              <p className="text-xl text-slate-600">
                Hand-picked templates from our top creators
              </p>
            </div>
            <Link to="/browse">
              <Button variant="outline">
                View All
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredTemplates.map((template) => (
              <Card key={template.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <img 
                    src={template.image} 
                    alt={template.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge variant="secondary">{template.category}</Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-slate-600">{template.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{template.title}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {template.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">
                      ${template.price}
                    </span>
                    <Button size="sm">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 relative">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-br from-sky-300/25 to-blue-300/25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-gradient-to-br from-indigo-300/25 to-violet-300/25 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose TemplateHub?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We provide the best platform for both buyers and creators
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle className="mb-4">Fast &amp; Affordable</CardTitle>
              <CardDescription className="text-base">
                Get professional websites at a fraction of custom development cost, deployed in minutes
              </CardDescription>
            </Card>

            <Card className="text-center p-8">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle className="mb-4">Quality Guaranteed</CardTitle>
              <CardDescription className="text-base">
                All templates are reviewed by our team for code quality, design, and functionality
              </CardDescription>
            </Card>

            <Card className="text-center p-8">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <CardTitle className="mb-4">Community Driven</CardTitle>
              <CardDescription className="text-base">
                Built by talented developers and designers from around the world
              </CardDescription>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-gradient-to-br from-green-300/20 to-emerald-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-br from-teal-300/20 to-cyan-300/20 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-slate-600">
              Join thousands of satisfied customers and creators
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
                <CardDescription className="text-base mb-6 text-slate-700">
                  "{testimonial.content}"
                </CardDescription>
                <div className="flex items-center space-x-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-violet-500/20 to-indigo-500/20"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-400/30 to-purple-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-indigo-400/30 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of businesses and creators who trust TemplateHub for their digital needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/browse">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                Browse Templates
              </Button>
            </Link>
            <Link to="/sell">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary">
                Start Selling Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-slate-300 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-indigo-900/10 to-purple-900/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl text-white">TemplateHub</span>
              </div>
              <p className="text-sm">
                The marketplace for ready-made websites and apps built by talented creators worldwide.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Marketplace</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/browse" className="hover:text-white transition-colors">Browse Templates</Link></li>
                <li><Link to="/categories" className="hover:text-white transition-colors">Categories</Link></li>
                <li><Link to="/sell" className="hover:text-white transition-colors">Start Selling</Link></li>
                <li><Link to="/custom" className="hover:text-white transition-colors">Custom Development</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link to="/community" className="hover:text-white transition-colors">Community</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/refund" className="hover:text-white transition-colors">Refund Policy</Link></li>
                <li><Link to="/licenses" className="hover:text-white transition-colors">Licenses</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; 2024 TemplateHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
