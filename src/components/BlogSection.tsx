import { ArrowRight } from 'lucide-react';
import farmBlog1 from '@/assets/farm-blog-1.jpg';
import farmBlog2 from '@/assets/farm-blog-2.jpg';
import farmBlog3 from '@/assets/farm-blog-3.jpg';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Sustainable Farming Practices for Better Yields",
      excerpt: "Discover how sustainable farming techniques can improve soil health and increase crop productivity while protecting the environment.",
      image: farmBlog1,
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Precision Agriculture: The Future is Here",
      excerpt: "Learn how modern technology like drones and sensors are revolutionizing farming operations and decision-making processes.",
      image: farmBlog2,
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Soil Health: The Foundation of Success",
      excerpt: "Understanding soil composition and nutrients is crucial for crop selection. Get insights into soil testing and improvement strategies.",
      image: farmBlog3,
      readTime: "6 min read"
    }
  ];

  return (
    <section id="blog" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Farming Insights & Tips
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest farming techniques, technologies, and best practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="farm-card group cursor-pointer">
              <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="bg-farm-green-light px-3 py-1 rounded-full text-farm-green font-medium">
                    Farming Tips
                  </span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground group-hover:text-farm-green transition-colors duration-200">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-farm-green font-medium group-hover:translate-x-1 transition-transform duration-200">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;