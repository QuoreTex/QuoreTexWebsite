import {
  Code2,
  Globe,
  Smartphone,
  Cloud,
  Wrench,
  Brain,
  Zap,
  ArrowRight
} from "lucide-react";

// Mock data for services
const SERVICES = [
  {
    id: 1,
    title: "Custom Software Development",
    description: "Tailored solutions built from the ground up to meet your specific business requirements and objectives.",
    icon: "Code2"
  },
  {
    id: 2,
    title: "Web Development",
    description: "Modern, responsive websites and web applications that deliver exceptional user experiences.",
    icon: "Globe"
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android devices.",
    icon: "Smartphone"
  },
  {
    id: 4,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to optimize your business operations.",
    icon: "Cloud"
  },
  {
    id: 5,
    title: "Maintenance & Support",
    description: "Ongoing technical support and maintenance to keep your systems running smoothly.",
    icon: "Wrench"
  },
  {
    id: 6,
    title: "AI & Machine Learning",
    description: "Intelligent solutions that leverage artificial intelligence and machine learning technologies.",
    icon: "Brain"
  },
  {
    id: 7,
    title: "Performance Optimization",
    description: "Speed up your applications and improve user experience with our optimization techniques.",
    icon: "Zap"
  }
];

const ServicesSection = () => {
  const getIcon = (iconName: string) => {
    const iconProps = { className: "h-8 w-8 text-white transition-all duration-300 group-hover:scale-110" };
    
    switch (iconName) {
      case "Code2":
        return <Code2 {...iconProps} />;
      case "Globe":
        return <Globe {...iconProps} />;
      case "Smartphone":
        return <Smartphone {...iconProps} />;
      case "Cloud":
        return <Cloud {...iconProps} />;
      case "Wrench":
        return <Wrench {...iconProps} />;
      case "Brain":
        return <Brain {...iconProps} />;
      case "Zap":
        return <Zap {...iconProps} />;
      default:
        return <Code2 {...iconProps} />;
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#168AAD]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-[#1E3A8A]/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#1E3A8A] relative">
              Our{' '}
              <span className="text-[#168AAD] relative">
                Services
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#168AAD] to-[#1A759F] rounded-full transform scale-x-0 animate-pulse"></div>
              </span>
            </h2>
          </div>
          
          <div className="w-32 h-1 bg-gradient-to-r from-[#168AAD] to-[#1A759F] mx-auto mb-8 rounded-full shadow-lg"></div>
          
          <p className="text-lg md:text-xl text-[#168AAD] leading-relaxed max-w-3xl mx-auto">
            We offer comprehensive software development services tailored to meet your unique business needs.
            From initial concept to deployment and ongoing support, we're with you at every step.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className={`group cursor-pointer transform transition-all duration-500 hover:-translate-y-3 hover:scale-105 ${
                index === SERVICES.length - 1 && SERVICES.length % 3 === 1 ? "lg:col-start-2" : ""
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className="h-full bg-gradient-to-br from-[#1A759F] to-[#168AAD] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-32 h-32 border border-white/20 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-125 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 border border-white/20 rounded-full transform -translate-x-12 translate-y-12 group-hover:scale-125 transition-transform duration-700"></div>
                </div>

                {/* Icon container */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:bg-white/30">
                    {getIcon(service.icon)}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-ping"></div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-white group-hover:text-white/95 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-white/90 mb-8 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Learn More Button */}
                  <div className="flex items-center justify-between">
                    <button className="inline-flex items-center px-6 py-3 bg-white/20 hover:bg-white hover:text-[#1A759F] text-white font-semibold rounded-xl backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg border border-white/30 hover:border-white">
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                    
                    <div className="w-2 h-2 bg-white/50 rounded-full group-hover:bg-white transition-colors duration-300"></div>
                  </div>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#1E3A8A] to-[#168AAD] text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer">
            <span>Explore All Services</span>
            <ArrowRight className="ml-2 h-5 w-5" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .container > div:first-child {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;