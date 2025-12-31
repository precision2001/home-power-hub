import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Understanding Solar Battery Storage: A Complete Guide",
    excerpt: "Learn everything you need to know about solar battery storage systems and how they can benefit your home.",
    date: "Dec 28, 2025",
    readTime: "8 min read",
    category: "Education",
  },
  {
    title: "BLUETTI EP760 vs EP2000: Which Is Right for You?",
    excerpt: "A comprehensive comparison of BLUETTI's flagship home energy storage systems.",
    date: "Dec 25, 2025",
    readTime: "6 min read",
    category: "Product Comparison",
  },
  {
    title: "Solar Incentives in Australia 2025: What You Need to Know",
    excerpt: "An overview of federal and state solar rebates, feed-in tariffs, and incentive programs available this year.",
    date: "Dec 20, 2025",
    readTime: "10 min read",
    category: "News",
  },
  {
    title: "How to Maximize Your Solar System's Efficiency",
    excerpt: "Tips and best practices for getting the most out of your solar panel and battery system.",
    date: "Dec 15, 2025",
    readTime: "5 min read",
    category: "Tips",
  },
  {
    title: "The Future of Home Energy: Trends to Watch",
    excerpt: "Exploring emerging technologies and trends shaping the future of residential energy.",
    date: "Dec 10, 2025",
    readTime: "7 min read",
    category: "Industry",
  },
  {
    title: "Real Customer Stories: Going Solar with EasyLink",
    excerpt: "Hear from Australian homeowners who made the switch to solar with EasyLink Solar.",
    date: "Dec 5, 2025",
    readTime: "4 min read",
    category: "Case Studies",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-background to-primary/5" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
                Solar Insights & News
              </h1>
              <p className="text-xl text-muted-foreground">
                Stay informed with the latest solar energy news, tips, and industry updates from EasyLink Solar.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.article
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-xl overflow-hidden hover:bg-card/80 transition-colors group cursor-pointer"
                >
                  <div className="h-48 bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4">
                      {post.excerpt}
                    </p>
                    <span className="text-accent text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="heroOutline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
