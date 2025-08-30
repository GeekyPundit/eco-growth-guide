import heroImage from '@/assets/farming-hero.jpg';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative h-96 md:h-[500px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Smart Farming,
            <br />
            <span className="text-farm-accent">Better Yields</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Harness the power of data-driven agriculture to optimize your crop selection and maximize productivity
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;