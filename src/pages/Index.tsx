import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import CropRecommendation from '@/components/CropRecommendation';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CropRecommendation />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
