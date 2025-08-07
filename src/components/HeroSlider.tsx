import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { ChevronDown, ArrowRight, Phone } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const HeroSlider: React.FC = () => {
  const swiperRef = useRef<any>(null);
  const navigate = useNavigate();

  const slides = [
    {
      image:
        "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Discover Luxury Living",
      subtitle:
        "Premium properties in the most prestigious locations worldwide",
      cta: "Explore Properties",
      action: () => navigate("/properties"),
    },
    {
      image:
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Your Dream Home Awaits",
      subtitle: "Exceptional homes crafted for the most discerning clients",
      cta: "View Collection",
      action: () => navigate("/properties"),
    },
    {
      image:
        "https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Expert Real Estate Services",
      subtitle: "Over 15 years of trusted expertise in luxury real estate",
      cta: "Contact Us Today",
      action: () => navigate("/contact"),
    },
  ];

  useEffect(() => {
    const handleScrollDown = () => {
      const nextSection = document.getElementById("stats-section");
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    };

    const scrollButton = document.getElementById("scroll-down-btn");
    if (scrollButton) {
      scrollButton.addEventListener("click", handleScrollDown);
    }

    return () => {
      if (scrollButton) {
        scrollButton.removeEventListener("click", handleScrollDown);
      }
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={1200}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          renderBullet: (index, className) => {
            return `<span class="${className} !bg-luxury-gold !w-4 !h-4 !opacity-60 hover:!opacity-100 transition-all duration-300 !mx-2"></span>`;
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              />

              {/* Enhanced Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/60" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

              {/* Content */}
              <div className="relative h-full flex items-center justify-center">
                <div className="max-w-6xl mx-auto px-4 text-center">
                  <div className="animate-fade-in">
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight tracking-tight">
                      {slide.title}
                    </h1>
                    <p
                      className="text-2xl md:text-2xl text-white/95 mb-12 font-light max-w-4xl mx-auto leading-relaxed animate-slide-up"
                      style={{ animationDelay: "0.3s" }}
                    >
                      {slide.subtitle}
                    </p>
                    <div
                      className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in"
                      style={{ animationDelay: "0.6s" }}
                    >
                      <button
                        className="group bg-gradient-to-r from-luxury-gold to-yellow-500 hover:from-yellow-600 hover:to-luxury-gold text-black px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3"
                        onClick={slide.action}
                      >
                        <span>{slide.cta}</span>
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                      <button
                        onClick={() => navigate("/contact")}
                        className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 hover:bg-white/20 hover:scale-105 flex items-center justify-center space-x-3"
                      >
                        <Phone className="w-6 h-6" />
                        <span>Contact Agent</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="swiper-button-prev-custom absolute left-8 top-1/2 transform -translate-y-1/2 z-10 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-300 hover:scale-110">
        <ChevronDown className="w-8 h-8 text-white rotate-90" />
      </div>
      <div className="swiper-button-next-custom absolute right-8 top-1/2 transform -translate-y-1/2 z-10 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-300 hover:scale-110">
        <ChevronDown className="w-8 h-8 text-white -rotate-90" />
      </div>

      {/* Scroll Down Indicator */}
      <div
        id="scroll-down-btn"
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 cursor-pointer animate-float hover:scale-110 transition-transform duration-300"
      >
        <div className="flex flex-col items-center space-y-3">
          <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center relative">
            <div className="w-2 h-4 bg-white/80 rounded-full mt-3 animate-pulse" />
          </div>
          <ChevronDown className="w-8 h-8 text-white/80 animate-bounce" />
          <span className="text-white/70 text-sm font-medium">Scroll Down</span>
        </div>
      </div>

      {/* Social Links */}
      <div className="absolute left-8 bottom-12 space-y-6">
        <div className="w-px h-20 bg-white/40 mx-auto" />
        <div className="text-white/80 font-medium text-sm transform -rotate-90 origin-center whitespace-nowrap">
          Follow Us
        </div>
      </div>

      {/* Property Count Badge */}
      <div className="absolute right-8 bottom-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
        <div className="text-center">
          <div className="text-3xl font-bold text-white mb-1">500+</div>
          <div className="text-white/80 text-sm font-medium">
            Premium Properties
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
