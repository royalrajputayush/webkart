import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Zap, 
  ArrowLeft, 
  Search, 
  Users, 
  MessageCircle, 
  Heart,
  Share2,
  Calendar,
  Trophy,
  Star,
  TrendingUp,
  Code,
  Palette,
  Coffee,
  BookOpen,
  ExternalLink,
  Plus,
  Eye,
  ThumbsUp,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Community() {
  const [searchQuery, setSearchQuery] = useState("");

  const communityStats = {
    totalMembers: "12,500+",
    activeCreators: "850+",
    totalPosts: "45,000+",
    templatesShared: "2,800+"
  };

  const featuredCreators = [
    {
      name: "Sarah Johnson",
      username: "sarahdesigns",
      avatar: "/placeholder.svg",
      specialty: "React Components",
      templates: 42,
      followers: 1250,
      featured: true,
      verified: true
    },
    {
      name: "Mike Chen",
      username: "mikecodes",
      avatar: "/placeholder.svg",
      specialty: "Next.js Apps",
      templates: 38,
      followers: 980,
      featured: true,
      verified: true
    },
    {
      name: "Emily Rodriguez",
      username: "emilyux",
      avatar: "/placeholder.svg",
      specialty: "UI/UX Design",
      templates: 56,
      followers: 1890,
      featured: true,
      verified: true
    },
    {
      name: "Alex Thompson",
      username: "alextech",
      avatar: "/placeholder.svg",
      specialty: "Vue.js",
      templates: 29,
      followers: 720,
      featured: false,
      verified: true
    }
  ];

  const discussionTopics = [
    {
      id: 1,
      title: "Best practices for React component libraries",
      author: "sarah_designs",
      category: "Development",
      replies: 23,
      views: 1240,
      lastActivity: "2 hours ago",
      isHot: true,
      tags: ["React", "Components", "Best Practices"]
    },
    {
      id: 2,
      title: "How to price your templates competitively?",
      author: "mike_creates",
      category: "Business",
      replies: 45,
      views: 2100,
      lastActivity: "4 hours ago",
      isHot: true,
      tags: ["Pricing", "Strategy", "Business"]
    },
    {
      id: 3,
      title: "Showcase: My latest e-commerce template",
      author: "emily_ux",
      category: "Showcase",
      replies: 18,
      views: 890,
      lastActivity: "6 hours ago",
      isHot: false,
      tags: ["E-commerce", "Showcase", "UI Design"]
    },
    {
      id: 4,
      title: "Looking for feedback on my dashboard design",
      author: "alex_dev",
      category: "Feedback",
      replies: 12,
      views: 560,
      lastActivity: "8 hours ago",
      isHot: false,
      tags: ["Dashboard", "Feedback", "Design"]
    },
    {
      id: 5,
      title: "Tips for optimizing template performance",
      author: "performance_guru",
      category: "Tutorial",
      replies: 34,
      views: 1560,
      lastActivity: "1 day ago",
      isHot: false,
      tags: ["Performance", "Optimization", "Tutorial"]
    }
  ];

  const showcaseItems = [
    {
      title: "Modern SaaS Dashboard",
      creator: "Sarah Johnson",
      image: "/placeholder.svg",
      likes: 156,
      views: 2400,
      category: "Dashboard",
      tags: ["React", "TailwindCSS", "Charts"]
    },
    {
      title: "E-commerce Mobile App",
      creator: "Mike Chen",
      image: "/placeholder.svg",
      likes: 203,
      views: 3200,
      category: "Mobile",
      tags: ["React Native", "E-commerce", "Mobile"]
    },
    {
      title: "Creative Portfolio Site",
      creator: "Emily Rodriguez",
      image: "/placeholder.svg",
      likes: 189,
      views: 2800,
      category: "Portfolio",
      tags: ["Next.js", "Animation", "Portfolio"]
    },
    {
      title: "Restaurant Website Template",
      creator: "Alex Thompson",
      image: "/placeholder.svg",
      likes: 142,
      views: 1900,
      category: "Restaurant",
      tags: ["Vue.js", "Restaurant", "Booking"]
    }
  ];

  const upcomingEvents = [
    {
      title: "Monthly Creator Meetup",
      date: "March 15, 2024",
      time: "2:00 PM EST",
      type: "Virtual",
      attendees: 124,
      description: "Join fellow creators for networking and knowledge sharing"
    },
    {
      title: "Design System Workshop",
      date: "March 22, 2024",
      time: "1:00 PM EST",
      type: "Workshop",
      attendees: 89,
      description: "Learn how to build scalable design systems"
    },
    {
      title: "Q1 Template Contest Results",
      date: "March 30, 2024",
      time: "3:00 PM EST",
      type: "Announcement",
      attendees: 256,
      description: "Announcing winners of our quarterly template contest"
    }
  ];

  const categories = [
    { name: "General Discussion", icon: MessageCircle, posts: 1240, color: "bg-blue-500" },
    { name: "Showcase", icon: Star, posts: 890, color: "bg-yellow-500" },
    { name: "Development", icon: Code, posts: 2100, color: "bg-green-500" },
    { name: "Design", icon: Palette, posts: 1560, color: "bg-purple-500" },
    { name: "Business", icon: TrendingUp, posts: 780, color: "bg-red-500" },
    { name: "Feedback", icon: Heart, posts: 560, color: "bg-pink-500" },
    { name: "Tutorials", icon: BookOpen, posts: 920, color: "bg-indigo-500" },
    { name: "Off-topic", icon: Coffee, posts: 340, color: "bg-gray-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/3 via-pink-500/3 to-rose-500/3"></div>
      <div className="absolute top-0 left-1/5 w-96 h-96 bg-gradient-to-br from-purple-300/12 to-pink-300/12 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/5 w-96 h-96 bg-gradient-to-br from-rose-300/12 to-orange-300/12 rounded-full blur-3xl"></div>
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
            <Users className="w-12 h-12 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Community
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Connect with fellow creators, share your work, get feedback, and learn from the best in the industry
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
            <Input
              placeholder="Search discussions, creators, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Community Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <Card className="text-center">
            <CardContent className="pt-6">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-slate-900 mb-1">{communityStats.totalMembers}</div>
              <div className="text-sm text-slate-600">Community Members</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Star className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-slate-900 mb-1">{communityStats.activeCreators}</div>
              <div className="text-sm text-slate-600">Active Creators</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <MessageCircle className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-slate-900 mb-1">{communityStats.totalPosts}</div>
              <div className="text-sm text-slate-600">Discussion Posts</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Code className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold text-slate-900 mb-1">{communityStats.templatesShared}</div>
              <div className="text-sm text-slate-600">Templates Shared</div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="discussions" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="discussions">Discussions</TabsTrigger>
            <TabsTrigger value="showcase">Showcase</TabsTrigger>
            <TabsTrigger value="creators">Creators</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>

          {/* Discussions */}
          <TabsContent value="discussions">
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-slate-900">Latest Discussions</h2>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    New Topic
                  </Button>
                </div>

                <div className="space-y-4">
                  {discussionTopics.map((topic) => (
                    <Card key={topic.id} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <Badge variant="outline">{topic.category}</Badge>
                              {topic.isHot && <Badge variant="destructive">Hot</Badge>}
                            </div>
                            <h3 className="font-semibold text-lg text-slate-900 mb-2 hover:text-primary cursor-pointer">
                              {topic.title}
                            </h3>
                            <div className="flex flex-wrap gap-2 mb-3">
                              {topic.tags.map((tag) => (
                                <Badge key={tag} variant="secondary" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-slate-600">
                              <span>by @{topic.author}</span>
                              <div className="flex items-center space-x-1">
                                <MessageCircle className="w-4 h-4" />
                                <span>{topic.replies} replies</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Eye className="w-4 h-4" />
                                <span>{topic.views} views</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span>{topic.lastActivity}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Categories Sidebar */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Categories</CardTitle>
                    <CardDescription>Browse discussions by topic</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {categories.map((category) => {
                      const Icon = category.icon;
                      return (
                        <div key={category.name} className="flex items-center justify-between p-2 hover:bg-slate-50 rounded-lg cursor-pointer">
                          <div className="flex items-center space-x-3">
                            <div className={`p-1 rounded ${category.color} text-white`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <span className="text-sm font-medium">{category.name}</span>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {category.posts}
                          </Badge>
                        </div>
                      );
                    })}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Showcase */}
          <TabsContent value="showcase">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Community Showcase</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  Discover amazing templates and projects created by our community members
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {showcaseItems.map((item, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <Badge variant="outline" className="mb-2">{item.category}</Badge>
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-slate-600 mb-3">by {item.creator}</p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {item.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-sm text-slate-600">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span>{item.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{item.views}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Creators */}
          <TabsContent value="creators">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Featured Creators</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  Meet the talented creators who make our marketplace amazing
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredCreators.map((creator, index) => (
                  <Card key={index} className="text-center hover:shadow-md transition-shadow">
                    <CardContent className="pt-6">
                      <div className="relative inline-block mb-4">
                        <Avatar className="w-16 h-16 mx-auto">
                          <AvatarImage src={creator.avatar} />
                          <AvatarFallback>{creator.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        {creator.verified && (
                          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                            <Star className="w-3 h-3 text-primary-foreground" />
                          </div>
                        )}
                      </div>
                      <h3 className="font-semibold text-lg mb-1">{creator.name}</h3>
                      <p className="text-sm text-slate-600 mb-2">@{creator.username}</p>
                      <Badge variant="outline" className="mb-3">{creator.specialty}</Badge>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="font-semibold text-slate-900">{creator.templates}</div>
                          <div className="text-slate-600">Templates</div>
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">{creator.followers}</div>
                          <div className="text-slate-600">Followers</div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm" className="mt-4 w-full">
                        View Profile
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Events */}
          <TabsContent value="events">
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Upcoming Events</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  Join our community events, workshops, and meetups
                </p>
              </div>

              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Badge variant="outline">{event.type}</Badge>
                            <div className="flex items-center space-x-1 text-sm text-slate-600">
                              <Users className="w-4 h-4" />
                              <span>{event.attendees} attending</span>
                            </div>
                          </div>
                          <h3 className="font-semibold text-lg text-slate-900 mb-2">{event.title}</h3>
                          <p className="text-slate-600 mb-3">{event.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-slate-600">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{event.time}</span>
                            </div>
                          </div>
                        </div>
                        <Button>Join Event</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Community Guidelines */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle>Community Guidelines</CardTitle>
            <CardDescription>
              Help us maintain a positive and productive community
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-slate-900 mb-2">✅ Do</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Be respectful and constructive in your feedback</li>
                  <li>• Share your knowledge and help others learn</li>
                  <li>• Use descriptive titles for your posts</li>
                  <li>• Search before asking to avoid duplicates</li>
                  <li>• Credit others when sharing their work</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 mb-2">❌ Don't</h4>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Post spam or promotional content</li>
                  <li>• Share copyrighted material without permission</li>
                  <li>• Be rude or disrespectful to other members</li>
                  <li>• Post off-topic discussions in wrong categories</li>
                  <li>• Share personal information publicly</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
