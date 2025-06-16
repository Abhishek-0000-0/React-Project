import { Outlet } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
const Layout = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Smoother transition
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Auto-scroll enabled
    autoplaySpeed: 5000, // 5-second interval
    fade: true, // Smooth fade effect
    pauseOnHover: false, // Prevents stuttering on hover
    arrows: false, // Cleaner look (optional)
  };

  // Optional: Reset autoplay when tab becomes visible again
  useEffect(() => {
    // Optionally, you can trigger a window resize event to reset the slider autoplay
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        window.dispatchEvent(new Event("resize"));
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  const slides = [
    {
      img: "/Images/about.jpg",
      title: "Discover Our Story",
      subtitle: "Learn about our journey and mission",
      cta: "Explore More",
    },
    {
      img: "/Images/ban-2.jpg",
      title: "Special Offers",
      subtitle: "Limited time deals just for you",
      cta: "Shop Now",
    },
    {
      img: "/Images/auth-1.jpg",
      title: "Join Our Community",
      subtitle: "Create an account for exclusive benefits",
      cta: "Sign Up",
    },
  ];

  return (
    <main className="relative">
      {/* Slider with Text Overlays */}
      <div className="w-full h-[70vh] min-h-[400px] max-h-[800px] overflow-hidden">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative h-full ">
              {/* Background Image */}
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />

              {/* Text Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center">
                <div className="text-white px-4 animate-fadeInUp">
                  <h2 className="text-4xl md:text-6xl font-bold mb-3">
                    {slide.title}
                  </h2>
                  <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">
                    {slide.subtitle}
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all">
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Outlet />
      </div>

      {/* Optional: Add this to your global CSS for fade-in animation */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }
      `}</style>
    </main>
  );
};

export default Layout;
