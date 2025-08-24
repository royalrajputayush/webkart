import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Upload, Plus, X, DollarSign, Zap, Star, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sell() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    price: "",
    demoUrl: "",
    tags: [] as string[],
    licenseType: "MIT"
  });
  
  const [newTag, setNewTag] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    "e-commerce",
    "portfolio",
    "blog",
    "restaurant",
    "business",
    "landing-page", 
    "dashboard",
    "saas",
    "education",
    "healthcare",
    "real-estate",
    "nonprofit"
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    setFiles(prev => [...prev, ...selectedFiles]);
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Implement actual template upload
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form
      setFormData({
        title: "",
        description: "",
        category: "",
        price: "",
        demoUrl: "",
        tags: [],
        licenseType: "MIT"
      });
      setFiles([]);
      
      alert("Template submitted successfully! It will be reviewed by our team.");
    } catch (error) {
      console.error("Upload error:", error);
      alert("Error uploading template. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/3 via-rose-500/3 to-orange-500/3"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-300/12 to-rose-300/12 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-300/12 to-amber-300/12 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-gradient-to-br from-rose-300/8 to-pink-300/8 rounded-full blur-3xl"></div>
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
            <Link to="/sell" className="text-sm font-medium text-primary">
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
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Start Selling Your Templates
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Join our community of creators and turn your design and development skills into a profitable business
          </p>
          
          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <DollarSign className="w-6 h-6 text-primary mr-2" />
                <span className="text-2xl font-bold text-slate-900">70%</span>
              </div>
              <p className="text-sm text-slate-600">Revenue Share</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-primary mr-2" />
                <span className="text-2xl font-bold text-slate-900">50K+</span>
              </div>
              <p className="text-sm text-slate-600">Active Buyers</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-6 h-6 text-primary mr-2" />
                <span className="text-2xl font-bold text-slate-900">$2.5M+</span>
              </div>
              <p className="text-sm text-slate-600">Creator Earnings</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Upload Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Upload Your Template</CardTitle>
                <CardDescription>
                  Fill out the details below to submit your template for review
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Template Title */}
                  <div className="space-y-2">
                    <Label htmlFor="title">Template Title *</Label>
                    <Input
                      id="title"
                      placeholder="e.g., Modern E-commerce Store"
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      required
                    />
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description">Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your template, its features, and what makes it unique..."
                      rows={4}
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      required
                    />
                  </div>

                  {/* Category and Price */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Category *</Label>
                      <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((category) => (
                            <SelectItem key={category} value={category}>
                              {category.split("-").map(word => 
                                word.charAt(0).toUpperCase() + word.slice(1)
                              ).join(" ")}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="price">Price (USD) *</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
                        <Input
                          id="price"
                          type="number"
                          placeholder="49"
                          min="1"
                          max="999"
                          className="pl-10"
                          value={formData.price}
                          onChange={(e) => handleInputChange("price", e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Demo URL */}
                  <div className="space-y-2">
                    <Label htmlFor="demoUrl">Live Demo URL *</Label>
                    <Input
                      id="demoUrl"
                      type="url"
                      placeholder="https://your-demo-site.com"
                      value={formData.demoUrl}
                      onChange={(e) => handleInputChange("demoUrl", e.target.value)}
                      required
                    />
                  </div>

                  {/* Tags */}
                  <div className="space-y-2">
                    <Label>Technologies & Tags</Label>
                    <div className="flex gap-2 mb-2">
                      <Input
                        placeholder="Add tag (e.g., React, TailwindCSS)"
                        value={newTag}
                        onChange={(e) => setNewTag(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addTag())}
                      />
                      <Button type="button" onClick={addTag} size="sm">
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {formData.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                          {tag}
                          <button
                            type="button"
                            onClick={() => removeTag(tag)}
                            className="ml-1 hover:text-destructive"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* License Type */}
                  <div className="space-y-2">
                    <Label>License Type</Label>
                    <Select value={formData.licenseType} onValueChange={(value) => handleInputChange("licenseType", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="MIT">MIT License</SelectItem>
                        <SelectItem value="GPL">GPL License</SelectItem>
                        <SelectItem value="Proprietary">Proprietary License</SelectItem>
                        <SelectItem value="Creative Commons">Creative Commons</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* File Upload */}
                  <div className="space-y-2">
                    <Label>Template Files *</Label>
                    <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                      <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                      <p className="text-sm text-slate-600 mb-2">
                        Upload your template files (ZIP format recommended)
                      </p>
                      <input
                        type="file"
                        multiple
                        accept=".zip,.rar,.tar,.gz,.js,.ts,.jsx,.tsx,.html,.css,.json"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                      />
                      <label htmlFor="file-upload">
                        <Button type="button" variant="outline" size="sm">
                          Choose Files
                        </Button>
                      </label>
                    </div>
                    
                    {files.length > 0 && (
                      <div className="space-y-2">
                        <Label>Uploaded Files:</Label>
                        {files.map((file, index) => (
                          <div key={index} className="flex items-center justify-between p-2 border rounded">
                            <span className="text-sm">{file.name}</span>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFile(index)}
                            >
                              <X className="w-4 h-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Terms */}
                  <div className="flex items-start space-x-2">
                    <Checkbox id="terms" required />
                    <Label htmlFor="terms" className="text-sm leading-5">
                      I confirm that this template is my original work and I have the right to sell it. 
                      I agree to the{" "}
                      <Link to="/creator-terms" className="text-primary hover:underline">
                        Creator Terms
                      </Link>{" "}
                      and{" "}
                      <Link to="/content-policy" className="text-primary hover:underline">
                        Content Policy
                      </Link>
                    </Label>
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Template for Review"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>Why Sell With Us?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <DollarSign className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">70% Revenue Share</h4>
                    <p className="text-sm text-slate-600">Keep most of what you earn</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Large Audience</h4>
                    <p className="text-sm text-slate-600">50,000+ active buyers</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Quality First</h4>
                    <p className="text-sm text-slate-600">We promote high-quality work</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <TrendingUp className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <h4 className="font-medium">Marketing Support</h4>
                    <p className="text-sm text-slate-600">Featured in newsletters & social</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle>Submission Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <h4 className="font-medium mb-1">Code Quality</h4>
                  <p className="text-slate-600">Clean, well-documented, and production-ready code</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">Design Standards</h4>
                  <p className="text-slate-600">Modern, responsive, and accessible designs</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">Documentation</h4>
                  <p className="text-slate-600">Clear setup instructions and feature documentation</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">Originality</h4>
                  <p className="text-slate-600">Original work or properly licensed components</p>
                </div>
              </CardContent>
            </Card>

            {/* Support */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/creator-guide" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    Creator Guide
                  </Button>
                </Link>
                <Link to="/contact" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    Contact Support
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
