import React from 'react';
import { slides3 } from "@/data/heroslides";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router";
import imgDetergent13817991 from "figma:asset/70d309dd56922292e331111411376b4ba899b893.png";
import imgLiquidDetergent181628991 from "figma:asset/f70e9f081d1cb7fa3707a661905c48d104867f62.png";
import imgDetergent24287271 from "figma:asset/3ed46b89f5526418f4b1f5d09838cb8970cebbbd.png";
import imgProfessionalCleaning from "../../assets/img1.jpeg"

const ScallopedEdge = ({ top }: { top?: boolean }) => (
  <div className={`absolute left-0 w-full h-[60px] md:h-[90px] ${top ? '-top-1 rotate-180' : '-bottom-1'} overflow-hidden flex z-10 pointer-events-none`}>
    <div className="w-[120%] flex h-full ml-[-10%] items-end justify-between">
      {Array.from({ length: 15 }).map((_, i) => (
        <div key={i} className="flex-shrink-0 w-[10vw] h-[10vw] max-w-[120px] max-h-[120px] min-w-[80px] min-h-[80px] bg-white rounded-full translate-y-1/2"></div>
      ))}
    </div>
  </div>
);

const VisionMissionCard = ({ title, items, inverted = false }: { title: string, items: string[], inverted?: boolean }) => {
  return (
    <div className={`relative mt-16 rounded-[25px] p-8 md:p-12 pt-16 ${inverted ? 'bg-[#211f64] text-white' : 'bg-[#f0f0f0] text-[#211f64]'}`}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#d9d9d9] px-8 md:px-12 py-3 rounded-full shadow-[0px_4px_15px_rgba(0,0,0,0.1)]">
        <h3 className="text-2xl md:text-[35px] font-semibold text-[#211f64] whitespace-nowrap">{title}</h3>
      </div>
      <ul className={`list-disc pl-6 space-y-3 text-base md:text-[20px] ${inverted ? 'text-white/80' : 'text-[#211f64]/75'}`}>
        {items.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
    </div>
  )
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="tf-slideshow slider-home-4 slider-effect-fade position-relative w-full overflow-hidden">
        <Swiper
          dir="ltr"
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          speed={1000}
          autoHeight={true}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true, el: ".spd120" }}
          className="tf-sw-slideshow w-full"
        >
          {slides3.map((slide: any, index: number) => (
            <SwiperSlide key={index}>
              <div className="wrap-slider relative w-full">
                <Link
                  to={slide.link}
                  className="block w-full"
                >
                  <img
                    alt={slide.alt}
                    src={slide.imgSrc}
                    className="w-full h-auto block"
                  />
                </Link>

                <div className="box-content relative z-10 w-full">
                  <div className="container max-w-7xl mx-auto">
                    {/* Slide content removed to show full banner image as per user request */}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="wrap-pagination sw-absolute-3 absolute bottom-4 left-0 w-full flex justify-center z-20">
          <div className="sw-dots style-2 sw-pagination-slider spd120 flex gap-2" />
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 lg:py-32 relative bg-white z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 lg:gap-20">
            {/* Product 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 mb-6 md:mb-8 rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.1)] flex items-center justify-center bg-white transform group-hover:-translate-y-2 transition-transform duration-300">
                <img src={imgDetergent13817991} alt="Detergent Powders" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-[#211f64] mb-4 md:mb-6">Detergent Powders</h3>
              <Link to="/products" className="bg-[#211f64] text-white font-medium text-base md:text-lg px-6 md:px-8 py-3 rounded-[15px] hover:bg-[#1a1850] transition-colors w-full max-w-[180px] md:max-w-[218px] inline-flex justify-center items-center">
                View Products
              </Link>
            </div>

            {/* Product 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="relative w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 mb-6 md:mb-8 rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.1)] flex items-center justify-center bg-white transform group-hover:-translate-y-2 transition-transform duration-300">
                <img src={imgLiquidDetergent181628991} alt="Cleaning Liquids" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-[#211f64] mb-4 md:mb-6">Cleaning Liquids</h3>
              <Link to="/products" className="bg-[#211f64] text-white font-medium text-base md:text-lg px-6 md:px-8 py-3 rounded-[15px] hover:bg-[#1a1850] transition-colors w-full max-w-[180px] md:max-w-[218px] inline-flex justify-center items-center">
                View Products
              </Link>
            </div>

            {/* Product 3 */}
            <div className="flex flex-col items-center text-center group sm:col-span-2 md:col-span-1">
              <div className="relative w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 mb-6 md:mb-8 rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.1)] flex items-center justify-center bg-white transform group-hover:-translate-y-2 transition-transform duration-300 mx-auto">
                <img src={imgDetergent24287271} alt="Laundry Soaps" className="w-20 h-20 md:w-24 md:h-24 object-contain" />
              </div>
              <h3 className="text-xl md:text-2xl font-medium text-[#211f64] mb-4 md:mb-6">Laundry Soaps</h3>
              <Link to="/products" className="bg-[#211f64] text-white font-medium text-base md:text-lg px-6 md:px-8 py-3 rounded-[15px] hover:bg-[#1a1850] transition-colors w-full max-w-[180px] md:max-w-[218px] inline-flex justify-center items-center">
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Image Divider with Scalloped Edges */}
      <section className="relative w-full h-[400px] md:h-[600px] lg:h-[700px] bg-gray-200 mt-10">
        <ScallopedEdge top />
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img src={imgProfessionalCleaning} alt="Professional Cleaning" className="w-full h-full object-cover object-center" />
        </div>
        <ScallopedEdge />
      </section>

      {/* About & Quality Section */}
      <section className="py-20 lg:py-24 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-[35px] font-semibold text-[#211f64] mb-8 max-w-2xl">
            Top soap and detergent brand for quality.
          </h2>
          <p className="text-lg lg:text-[20px] text-[#211f64]/75 leading-relaxed max-w-6xl">
            Team ACB Group succeeded in gifting affordable yet quality cleaning products for everyday use. The products were instantly appealing to common people and in no time, developed a strong customer base, especially in the Malabar region of Kerala. The brand name Mulla was adopted in 2013 and today, Mulla is the favourite soap and detergent brand in millions of households. We are extremely proud that we have achieved ISO 9001:2015 certification and that marks the utmost quality of our products and services.
          </p>

          {/* Vision & Mission */}
          <div className="mt-16 max-w-5xl mx-auto space-y-16">
            <VisionMissionCard
              title="Our Vision"
              items={[
                "To become the No.1 soaps and detergents brand in quality, affordability, and trust.",
                "To build ACB Group into a ₹100 Crore business group in the coming years while setting new benchmarks in innovation and customer satisfaction.",
                "To be a trusted local brand that delivers results equal to international standards — at a price everyone can afford."
              ]}
            />

            <VisionMissionCard
              title="Our Mission"
              inverted={true}
              items={[
                "Deliver high-quality, affordable cleaning solutions for everyday households.",
                "Earn and retain customer trust by consistently delivering superior results.",
                "Develop safe, health-conscious, and environmentally responsible products.",
                "Offer diverse product choices that suit different needs and lifestyles.",
                "Strengthen confidence in locally manufactured goods and contribute to national growth."
              ]}
            />
          </div>
        </div>
      </section>

      {/* Social Commitment Section */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-[35px] font-semibold text-[#211f64] mb-6">
            Our Social Commitment
          </h2>
          <div className="text-lg lg:text-[20px] text-[#211f64]/75 leading-relaxed max-w-5xl">
            <p className="mb-4">At ACB Group, growth is not just about numbers — it's about people.</p>
            <p className="mb-4">We are committed to:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>Improving the standard of living of our employees and partners as the organization grows.</li>
              <li>Supporting the poor and needy through meaningful initiatives under our Corporate Social Responsibility.</li>
              <li>Expanding our social impact activities in proportion to the company's future growth.</li>
            </ul>
            <p>Our belief is simple:<br /> Success must uplift everyone connected to the journey.</p>
          </div>
        </div>
      </section>
    </>
  );
}