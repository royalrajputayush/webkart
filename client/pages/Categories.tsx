import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  ArrowLeft, 
  ShoppingCart, 
  Briefcase, 
  Camera, 
  Utensils, 
  BookOpen,
  BarChart3,
  Stethoscope,
  GraduationCap,
  Home,
  Heart,
  Code,
  Palette
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Categories() {
  const categories = [
    {
      id: "e-commerce",
      name: "E-commerce",
      description: "Online stores, shopping carts, and marketplace templates",
      icon: ShoppingCart,
      count: 45,
      color: "bg-blue-500",
      popularTags: ["Stripe", "PayPal", "Shopping Cart", "Inventory"]
    },
    {
      id: "business",
      name: "Business",
      description: "Corporate websites, consulting, and professional services",
      icon: Briefcase,
      count: 38,
      color: "bg-slate-600",
      popularTags: ["Corporate", "Professional", "Services", "About Us"]
    },
    {
      id: "portfolio",
      name: "Portfolio",
      description: "Creative portfolios for designers, photographers, and artists",
      icon: Camera,
      count: 52,
      color: "bg-purple-500",
      popularTags: ["Gallery", "Creative", "Photography", "Showcase"]
    },
    {
      id: "restaurant",
      name: "Restaurant",
      description: "Food service, cafes, restaurants, and catering websites",
      icon: Utensils,
      count: 28,
      color: "bg-orange-500",
      popularTags: ["Menu", "Reservations", "Food", "Catering"]
    },
    {
      id: "blog",
      name: "Blog",
      description: "Personal blogs, news sites, and content publishing platforms",
      icon: BookOpen,
      count: 35,
      color: "bg-green-500",
      popularTags: ["CMS", "Articles", "Publishing", "Content"]
    },
    {
      id: "dashboard",
      name: "Dashboard",
      description: "Admin panels, analytics dashboards, and data visualization",
      icon: BarChart3,
      count: 22,
      color: "bg-indigo-500",
      popularTags: ["Analytics", "Admin", "Charts", "Data"]
    },
    {
      id: "healthcare",
      name: "Healthcare",
      description: "Medical practices, clinics, and health service websites",
      icon: Stethoscope,
      count: 18,
      color: "bg-teal-500",
      popularTags: ["Medical", "Appointments", "Health", "Clinic"]
    },
    {
      id: "education",
      name: "Education",
      description: "Schools, online courses, and educational platforms",
      icon: GraduationCap,
      count: 31,
      color: "bg-yellow-500",
      popularTags: ["Courses", "Learning", "School", "Training"]
    },
    {
      id: "real-estate",
      name: "Real Estate",
      description: "Property listings, real estate agencies, and rental platforms",
      icon: Home,
      count: 26,
      color: "bg-red-500",
      popularTags: ["Properties", "Listings", "Rentals", "Agency"]
    },
    {
      id: "nonprofit",
      name: "Nonprofit",
      description: "Charity organizations, NGOs, and community websites",
      icon: Heart,
      count: 15,
      color: "bg-pink-500",
      popularTags: ["Charity", "Donations", "Volunteer", "Community"]
    },
    {
      id: "saas",
      name: "SaaS",
      description: "Software as a Service landing pages and web applications",
      icon: Code,
      count: 33,
      color: "bg-cyan-500",
      popularTags: ["Landing Page", "SaaS", "Software", "App"]
    },
    {
      id: "landing-page",
      name: "Landing Page",
      description: "Marketing pages, product launches, and conversion-focused designs",
      icon: Palette,
      count: 41,
      color: "bg-violet-500",
      popularTags: ["Marketing", "Conversion", "Product", "Launch"]
    }
  ];

  const totalTemplates = categories.reduce((sum, category) => sum + category.count, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/4 via-teal-500/4 to-cyan-500/4"></div>
      <div className="absolute top-10 left-1/6 w-80 h-80 bg-gradient-to-br from-emerald-300/15 to-teal-300/15 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-1/6 w-80 h-80 bg-gradient-to-br from-cyan-300/15 to-blue-300/15 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-teal-300/8 to-emerald-300/8 rounded-full blur-3xl"></div>
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
            Browse by Categories
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-6">
            Discover templates organized by industry and use case to find exactly what you need
          </p>
          <div className="flex items-center justify-center space-x-4 text-sm text-slate-500">
            <span>{categories.length} Categories</span>
            <span>•</span>
            <span>{totalTemplates} Templates</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary mb-1">{totalTemplates}</div>
              <div className="text-sm text-slate-600">Total Templates</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary mb-1">{categories.length}</div>
              <div className="text-sm text-slate-600">Categories</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary mb-1">1,200+</div>
              <div className="text-sm text-slate-600">Happy Customers</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary mb-1">150+</div>
              <div className="text-sm text-slate-600">Creators</div>
            </CardContent>
          </Card>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.id} className="hover:shadow-lg transition-all duration-200 group cursor-pointer">
                <Link to={`/browse?category=${category.id}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`p-3 rounded-lg ${category.color} text-white group-hover:scale-110 transition-transform`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <CardTitle className="text-lg group-hover:text-primary transition-colors">
                            {category.name}
                          </CardTitle>
                          <Badge variant="secondary" className="mt-1">
                            {category.count} templates
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-sm leading-relaxed">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium text-slate-700 mb-2">Popular Tags:</h4>
                        <div className="flex flex-wrap gap-1">
                          {category.popularTags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-2 border-t">
                        <Button variant="ghost" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          Browse {category.name} Templates
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            );
          })}
        </div>

        {/* Popular Categories Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Most Popular Categories
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {categories
              .sort((a, b) => b.count - a.count)
              .slice(0, 4)
              .map((category) => {
                const Icon = category.icon;
                return (
                  <Link key={category.id} to={`/browse?category=${category.id}`}>
                    <Card className="hover:shadow-md transition-shadow cursor-pointer text-center">
                      <CardContent className="pt-6 pb-4">
                        <div className={`w-12 h-12 rounded-lg ${category.color} text-white mx-auto mb-3 flex items-center justify-center`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="font-semibold text-slate-900 mb-1">{category.name}</h3>
                        <p className="text-sm text-slate-600">{category.count} templates</p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
            <CardContent className="py-12">
              <h2 className="text-2xl font-bold mb-4">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                Browse all templates or request a custom development project tailored to your specific needs
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/browse">
                  <Button size="lg" variant="secondary">
                    Browse All Templates
                  </Button>
                </Link>
                <Link to="/custom">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    Request Custom Development
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
