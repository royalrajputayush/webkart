import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Star, Search, Filter, Grid, List } from "lucide-react";
import { Link } from "react-router-dom";

export default function Browse() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const categories = [
    "all",
    "e-commerce",
    "portfolio",
    "blog",
    "restaurant",
    "business",
    "landing-page",
    "dashboard",
    "saas"
  ];

  const templates = [
    {
      id: 1,
      title: "Modern E-commerce Store",
      description: "Complete online store with shopping cart, payments, and admin dashboard",
      price: 49,
      category: "e-commerce",
      rating: 4.8,
      reviews: 124,
      image: "https://images.pexels.com/photos/38519/macbook-laptop-ipad-apple-38519.jpeg",
      tags: ["React", "TailwindCSS", "Stripe", "Firebase"],
      creator: "Sarah Johnson",
      createdAt: "2024-01-15"
    },
    {
      id: 2,
      title: "Creative Portfolio",
      description: "Stunning portfolio template for designers and photographers",
      price: 29,
      category: "portfolio",
      rating: 4.9,
      reviews: 89,
      image: "https://images.pexels.com/photos/4974922/pexels-photo-4974922.jpeg",
      tags: ["Next.js", "Framer Motion", "TypeScript"],
      creator: "Mike Chen",
      createdAt: "2024-01-10"
    },
    {
      id: 3,
      title: "Restaurant Website",
      description: "Modern restaurant site with menu, reservations, and online ordering",
      price: 39,
      category: "restaurant",
      rating: 4.7,
      reviews: 67,
      image: "https://images.pexels.com/photos/27811290/pexels-photo-27811290.jpeg",
      tags: ["React", "TailwindCSS", "Firebase"],
      creator: "Emily Rodriguez",
      createdAt: "2024-01-08"
    },
    {
      id: 4,
      title: "SaaS Landing Page",
      description: "High-converting landing page template for SaaS products",
      price: 35,
      category: "landing-page",
      rating: 4.8,
      reviews: 156,
      image: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
      tags: ["React", "TailwindCSS", "Framer Motion"],
      creator: "Alex Thompson",
      createdAt: "2024-01-12"
    },
    {
      id: 5,
      title: "Business Dashboard",
      description: "Complete admin dashboard with charts, tables, and analytics",
      price: 55,
      category: "dashboard",
      rating: 4.6,
      reviews: 98,
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg",
      tags: ["React", "TailwindCSS", "Chart.js", "TypeScript"],
      creator: "Lisa Wang",
      createdAt: "2024-01-05"
    },
    {
      id: 6,
      title: "Blog Template",
      description: "Clean and minimal blog template with CMS integration",
      price: 25,
      category: "blog",
      rating: 4.9,
      reviews: 203,
      image: "https://images.pexels.com/photos/267363/pexels-photo-267363.jpeg",
      tags: ["Next.js", "Markdown", "TailwindCSS"],
      creator: "David Kim",
      createdAt: "2024-01-14"
    }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || template.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const sortedTemplates = [...filteredTemplates].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "popular":
        return b.reviews - a.reviews;
      case "newest":
      default:
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/3 via-indigo-500/3 to-purple-500/3"></div>
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-300/10 to-indigo-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-300/10 to-pink-300/10 rounded-full blur-3xl"></div>
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 relative z-20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold">T</span>
            </div>
            <span className="font-bold text-xl">TemplateHub</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/browse" className="text-sm font-medium text-primary">
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
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Browse Templates
          </h1>
          <p className="text-xl text-slate-600">
            Discover professional website and app templates from our community of creators
          </p>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="grid md:grid-cols-4 gap-4 mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Search templates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : 
                     category.split("-").map(word => 
                       word.charAt(0).toUpperCase() + word.slice(1)
                     ).join(" ")
                    }
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="text-sm text-slate-600">
            Showing {sortedTemplates.length} of {templates.length} templates
          </div>
        </div>

        {/* Templates Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedTemplates.map((template) => (
              <Card key={template.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                  <img 
                    src={template.image} 
                    alt={template.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">
                      {template.category.split("-").map(word => 
                        word.charAt(0).toUpperCase() + word.slice(1)
                      ).join(" ")}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm text-slate-600">{template.rating}</span>
                      <span className="text-xs text-slate-500">({template.reviews})</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{template.title}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                  <p className="text-sm text-slate-500">by {template.creator}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {template.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {template.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{template.tags.length - 3} more
                      </Badge>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">
                      ${template.price}
                    </span>
                    <Link to={`/template/${template.id}`}>
                      <Button size="sm">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {sortedTemplates.map((template) => (
              <Card key={template.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="flex">
                  <div className="w-48 h-32 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                    <img 
                      src={template.image} 
                      alt={template.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4 mb-2">
                          <Badge variant="secondary">
                            {template.category.split("-").map(word => 
                              word.charAt(0).toUpperCase() + word.slice(1)
                            ).join(" ")}
                          </Badge>
                          <div className="flex items-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            <span className="text-sm text-slate-600">{template.rating}</span>
                            <span className="text-xs text-slate-500">({template.reviews} reviews)</span>
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{template.title}</h3>
                        <p className="text-slate-600 mb-2">{template.description}</p>
                        <p className="text-sm text-slate-500 mb-4">by {template.creator}</p>
                        <div className="flex flex-wrap gap-2">
                          {template.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="text-right ml-6">
                        <div className="text-2xl font-bold text-primary mb-4">
                          ${template.price}
                        </div>
                        <Link to={`/template/${template.id}`}>
                          <Button>
                            View Details
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {sortedTemplates.length === 0 && (
          <div className="text-center py-12">
            <Filter className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">No templates found</h3>
            <p className="text-slate-600 mb-4">
              Try adjusting your search criteria or browse all categories
            </p>
            <Button onClick={() => {
              setSearchTerm("");
              setSelectedCategory("all");
            }}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
