import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Upload, Calendar, Code, Smartphone, Globe, Zap, Clock, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function Custom() {
  const [formData, setFormData] = useState({
    projectType: "website",
    businessName: "",
    contactEmail: "",
    contactPhone: "",
    projectTitle: "",
    description: "",
    features: [] as string[],
    budget: "",
    timeline: "",
    hasDesign: false,
    designFiles: [] as File[],
    additionalNotes: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypes = [
    { value: "website", label: "Website", icon: Globe },
    { value: "webapp", label: "Web Application", icon: Code },
    { value: "mobile", label: "Mobile App", icon: Smartphone },
    { value: "ecommerce", label: "E-commerce Store", icon: Globe },
    { value: "other", label: "Other", icon: Code }
  ];

  const commonFeatures = [
    "User Authentication",
    "Payment Integration",
    "Admin Dashboard",
    "Content Management",
    "Search Functionality",
    "Real-time Updates",
    "Email Notifications",
    "Analytics & Reporting",
    "Social Media Integration",
    "Multi-language Support",
    "Mobile Responsive",
    "SEO Optimization"
  ];

  const budgetRanges = [
    "Under $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "Over $50,000"
  ];

  const timelineOptions = [
    "1-2 weeks",
    "3-4 weeks",
    "1-2 months",
    "3-6 months",
    "6+ months"
  ];

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleFeature = (feature: string) => {
    const currentFeatures = formData.features;
    if (currentFeatures.includes(feature)) {
      handleInputChange("features", currentFeatures.filter(f => f !== feature));
    } else {
      handleInputChange("features", [...currentFeatures, feature]);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files || []);
    setFormData(prev => ({ ...prev, designFiles: [...prev.designFiles, ...selectedFiles] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Implement actual project request submission
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      alert("Project request submitted successfully! Our team will contact you within 24 hours.");
      
      // Reset form
      setFormData({
        projectType: "website",
        businessName: "",
        contactEmail: "",
        contactPhone: "",
        projectTitle: "",
        description: "",
        features: [],
        budget: "",
        timeline: "",
        hasDesign: false,
        designFiles: [],
        additionalNotes: ""
      });
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error submitting request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/4 via-purple-500/4 to-indigo-500/4"></div>
      <div className="absolute top-20 left-1/5 w-80 h-80 bg-gradient-to-br from-violet-300/12 to-purple-300/12 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-1/5 w-80 h-80 bg-gradient-to-br from-indigo-300/12 to-blue-300/12 rounded-full blur-3xl"></div>
      <div className="absolute top-2/3 left-2/3 w-72 h-72 bg-gradient-to-br from-purple-300/8 to-violet-300/8 rounded-full blur-3xl"></div>
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
            <Link to="/custom" className="text-sm font-medium text-primary">
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
            Custom Development Services
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            Need something unique? Our expert developers will create a custom solution tailored to your business needs
          </p>
          
          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Fast Delivery</h3>
              <p className="text-sm text-slate-600">2-8 weeks typical turnaround</p>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Quality Guaranteed</h3>
              <p className="text-sm text-slate-600">100% satisfaction guarantee</p>
            </div>
            <div className="text-center">
              <Star className="w-8 h-8 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Expert Team</h3>
              <p className="text-sm text-slate-600">Vetted professional developers</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Request Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Project Request Form</CardTitle>
                <CardDescription>
                  Tell us about your project and we'll provide a detailed proposal within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Project Type */}
                  <div className="space-y-3">
                    <Label>Project Type *</Label>
                    <RadioGroup
                      value={formData.projectType}
                      onValueChange={(value) => handleInputChange("projectType", value)}
                      className="grid md:grid-cols-2 gap-4"
                    >
                      {projectTypes.map((type) => {
                        const Icon = type.icon;
                        return (
                          <div key={type.value} className="flex items-center space-x-2 border rounded-lg p-3">
                            <RadioGroupItem value={type.value} id={type.value} />
                            <Icon className="w-5 h-5 text-primary" />
                            <Label htmlFor={type.value} className="flex-1 cursor-pointer">
                              {type.label}
                            </Label>
                          </div>
                        );
                      })}
                    </RadioGroup>
                  </div>

                  {/* Business Info */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="businessName">Business/Organization Name *</Label>
                      <Input
                        id="businessName"
                        placeholder="Your Company Name"
                        value={formData.businessName}
                        onChange={(e) => handleInputChange("businessName", e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="contactEmail">Contact Email *</Label>
                      <Input
                        id="contactEmail"
                        type="email"
                        placeholder="contact@company.com"
                        value={formData.contactEmail}
                        onChange={(e) => handleInputChange("contactEmail", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="projectTitle">Project Title *</Label>
                      <Input
                        id="projectTitle"
                        placeholder="e.g., E-commerce Website for Fashion Store"
                        value={formData.projectTitle}
                        onChange={(e) => handleInputChange("projectTitle", e.target.value)}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="contactPhone">Phone Number (Optional)</Label>
                      <Input
                        id="contactPhone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.contactPhone}
                        onChange={(e) => handleInputChange("contactPhone", e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Project Description */}
                  <div className="space-y-2">
                    <Label htmlFor="description">Project Description *</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your project goals, target audience, and key requirements..."
                      rows={4}
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      required
                    />
                  </div>

                  {/* Features Checklist */}
                  <div className="space-y-3">
                    <Label>Required Features (Select all that apply)</Label>
                    <div className="grid md:grid-cols-2 gap-2">
                      {commonFeatures.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <Checkbox
                            id={feature}
                            checked={formData.features.includes(feature)}
                            onCheckedChange={() => toggleFeature(feature)}
                          />
                          <Label htmlFor={feature} className="text-sm">
                            {feature}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Budget and Timeline */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Budget Range *</Label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range} value={range}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Preferred Timeline *</Label>
                      <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          {timelineOptions.map((timeline) => (
                            <SelectItem key={timeline} value={timeline}>
                              {timeline}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Design Files */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="hasDesign"
                        checked={formData.hasDesign}
                        onCheckedChange={(checked) => handleInputChange("hasDesign", checked as boolean)}
                      />
                      <Label htmlFor="hasDesign">
                        I have existing designs/mockups to share
                      </Label>
                    </div>

                    {formData.hasDesign && (
                      <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center">
                        <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                        <p className="text-sm text-slate-600 mb-2">
                          Upload design files, mockups, or references
                        </p>
                        <input
                          type="file"
                          multiple
                          accept=".pdf,.jpg,.jpeg,.png,.gif,.figma,.sketch,.ai,.psd"
                          onChange={handleFileUpload}
                          className="hidden"
                          id="design-upload"
                        />
                        <label htmlFor="design-upload">
                          <Button type="button" variant="outline" size="sm">
                            Choose Files
                          </Button>
                        </label>
                        
                        {formData.designFiles.length > 0 && (
                          <div className="mt-4 space-y-2">
                            {formData.designFiles.map((file, index) => (
                              <div key={index} className="text-sm text-slate-600">
                                {file.name}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Additional Notes */}
                  <div className="space-y-2">
                    <Label htmlFor="additionalNotes">Additional Notes (Optional)</Label>
                    <Textarea
                      id="additionalNotes"
                      placeholder="Any additional requirements, preferences, or questions..."
                      rows={3}
                      value={formData.additionalNotes}
                      onChange={(e) => handleInputChange("additionalNotes", e.target.value)}
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting Request..." : "Submit Project Request"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Process */}
            <Card>
              <CardHeader>
                <CardTitle>Our Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-medium">Submit Request</h4>
                    <p className="text-sm text-slate-600">Fill out the form with your project details</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-medium">Get Proposal</h4>
                    <p className="text-sm text-slate-600">Receive detailed proposal within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-medium">Development</h4>
                    <p className="text-sm text-slate-600">Our team builds your custom solution</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold">
                    4
                  </div>
                  <div>
                    <h4 className="font-medium">Delivery</h4>
                    <p className="text-sm text-slate-600">Testing, deployment, and handover</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pricing Info */}
            <Card>
              <CardHeader>
                <CardTitle>Pricing Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <h4 className="font-medium mb-1">Simple Websites</h4>
                  <p className="text-slate-600">$1,000 - $5,000</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">Web Applications</h4>
                  <p className="text-slate-600">$5,000 - $25,000</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">E-commerce Stores</h4>
                  <p className="text-slate-600">$3,000 - $15,000</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">Mobile Apps</h4>
                  <p className="text-slate-600">$10,000 - $50,000+</p>
                </div>
                
                <p className="text-slate-500 text-xs pt-2">
                  Final pricing depends on complexity and requirements
                </p>
              </CardContent>
            </Card>

            {/* Testimonial */}
            <Card>
              <CardHeader>
                <CardTitle>Client Success</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-700">
                    "TemplateHub delivered our e-commerce platform on time and within budget. 
                    The quality exceeded our expectations!"
                  </p>
                  <div>
                    <p className="font-medium text-sm">Sarah Johnson</p>
                    <p className="text-xs text-slate-600">CEO, Fashion Forward</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Support */}
            <Card>
              <CardHeader>
                <CardTitle>Have Questions?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/contact" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    Contact Sales Team
                  </Button>
                </Link>
                <Link to="/portfolio" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    View Our Portfolio
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
