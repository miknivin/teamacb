import React from 'react';
import imgRectangle11 from "../../assets/Rectangle11.png"

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

const WhyChooseUsItem = ({ title, desc, mtClass }: { title: string, desc: string, mtClass: string }) => (
  <div className={`flex flex-col items-center text-center w-full md:w-56 lg:w-64 relative z-10 ${mtClass}`}>
    <div className="w-14 h-14 rounded-full bg-[#211f64] shadow-[0_0_0_8px_#dfdeff] mb-6 flex-shrink-0" />
    <h4 className="text-xl md:text-2xl font-semibold text-[#211f64] mb-3">{title}</h4>
    <p className="text-[#211f64]/75 text-sm md:text-base leading-relaxed">{desc}</p>
  </div>
);

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[450px] md:h-[590px] w-full flex items-center pt-24 overflow-hidden -mt-24">
        <div className="absolute inset-0 z-0">
          <img src={imgRectangle11} alt="Factory Background" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-[#211f64]/30 mix-blend-overlay"></div>
        </div>

        {/* Blue Glow Blur */}
        <div className="absolute top-[35%] left-0 md:left-[5%] w-[80%] max-w-[600px] h-[250px] bg-[#4a75a2] blur-[80px] md:blur-[100px] rounded-full pointer-events-none opacity-90 z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <h1 className="text-4xl md:text-[65px] font-semibold text-white mb-6 leading-tight pt-16">
            About Team ACB
          </h1>
          <p className="text-lg md:text-[20px] text-white max-w-xl leading-relaxed">
            Delivering affordable and high-quality cleaning solutions that millions of households trust every day.
          </p>
        </div>
      </section>

      {/* Our History Section */}
      <section className="pt-16 pb-8 md:pt-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-[35px] font-semibold text-[#211f64] mb-6">Our History</h2>
          <p className="text-lg md:text-[20px] text-[#211f64]/75 leading-relaxed mb-16">
            The journey of ACB Group from its humble beginnings to a well-established organization with a number of popular and quality products in its fold has been eventful, with the timeline marked by steady growth. Throughout this journey and in different ventures, ACB Group upheld quality and commitment, thus nurturing the trust and goodwill of its thousands of customers, dealers, and distributors. The origin of ACB Group can be traced back to the year 2004, when two dedicated and insightful entrepreneurs, A. C. Mohammed and A. C. Jabir, decided to tread new paths. They came up with a venture which was unheard of at that time: the branding and marketing of dry fish. Till that time, dry fish used to be stored in unhygienic conditions and it was difficult to trace the producers. The new venture of ACB Group changed this situation. Well-processed and cleaned dry fish reached the customers in neat packages with a brand name. The business mainly concentrated on the rural areas of Kerala.
          </p>

          {/* Timeline Circles */}
          <div className="flex flex-col lg:flex-row justify-between items-center relative py-8 lg:py-12">
            {/* Connecting lines */}
            <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-[3px] bg-[#211f64]/80 -z-10 transform -translate-y-1/2" />
            <div className="lg:hidden absolute left-1/2 top-[5%] bottom-[5%] w-[3px] bg-[#211f64]/80 -z-10 transform -translate-x-1/2" />

            {[
              { year: '2004', text: 'Company Founded' },
              { year: '2009', text: 'ACB Marketing launched' },
              { year: '2013', text: 'Mulla brand introduced' },
              { year: 'Now', text: 'Trusted cleaning brand in Kerala' }
            ].map((item, i) => (
              <div key={i} className="relative bg-[#f0f0f0] rounded-full w-48 h-48 md:w-[215px] md:h-[215px] flex flex-col items-center justify-center shadow-md border-[6px] border-white z-10 my-4 lg:my-0 hover:-translate-y-2 transition-transform duration-300">
                <span className="text-3xl md:text-[35px] font-semibold text-[#211f64] mb-2">{item.year}</span>
                <span className="text-sm md:text-[20px] font-medium text-[#211f64]/75 text-center px-4 leading-tight">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="my-12 md:my-20 border-t-[5px] border-[#211f64] max-w-5xl mx-auto w-11/12" />

      {/* Why Choose Us Section */}
      <section className="pb-16 md:pb-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-[35px] font-semibold text-[#211f64] mb-12">Why Choose Us</h2>

          {/* Responsive Wavy Timeline */}
          <div className="relative min-h-[800px] lg:h-[500px] mt-16 md:mt-24 px-2 sm:px-4">
            {/* SVG Background Curve */}
            <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
              <svg width="100%" height="100%" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="h-full w-full">
                {/* Mobile Path (more vertical) */}
                <path d="M100,20 C200,20 800,120 800,220 C800,320 200,450 200,550 C200,650 800,780 800,900" stroke="#211F64" strokeWidth="4" strokeOpacity="0.4" className="lg:hidden" />
                {/* Desktop Path (horizontal wave) - Coordinates match dot % (top and left) multiplied by 10 */}
                <path d="M80,300 C150,300 180,400 310,400 C430,400 480,750 540,750 C600,750 680,600 770,600 C860,600 880,250 940,250" stroke="#211F64" strokeWidth="4" strokeOpacity="0.4" className="hidden lg:block" fill="none" />
              </svg>
            </div>

            {/* 1. Premium Quality Products */}
            <div className="absolute group z-10 top-[2%] lg:top-[30%] left-[10%] lg:left-[8%]" style={{ pointerEvents: 'auto' }}>
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-[#211f64] shadow-[0_0_20px_rgba(33,31,100,0.5)] border-4 border-white transform transition-transform group-hover:scale-110" />
              <div className="absolute top-1/2 -translate-y-1/2 left-12 lg:top-full lg:translate-y-0 lg:mt-8 lg:left-1/2 lg:-translate-x-1/2 lg:w-52 w-[200px] sm:w-64">
                <h4 className="text-[16px] lg:text-[18px] font-bold text-[#211f64] mb-1 lg:mb-2">Premium Quality Products</h4>
                <p className="text-[#211f64]/75 text-[12px] lg:text-[14px] leading-relaxed">
                  We specialize in high-quality detergents and cleaning solutions that effectively remove stains.
                </p>
              </div>
            </div>

            {/* 2. Affordable for Every Household */}
            <div className="absolute group z-10 top-[22%] lg:top-[40%] right-[10%] lg:left-[31%] lg:right-auto" style={{ pointerEvents: 'auto' }}>
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-[#211f64] shadow-[0_0_20px_rgba(33,31,100,0.5)] border-4 border-white transform transition-transform group-hover:scale-110" />
              <div className="absolute top-1/2 -translate-y-1/2 right-12 text-right lg:top-full lg:translate-y-0 lg:mt-8 lg:left-1/2 lg:-translate-x-1/2 lg:w-52 lg:text-center w-[200px] sm:w-64">
                <h4 className="text-[16px] lg:text-[18px] font-bold text-[#211f64] mb-1 lg:mb-2">Affordable for Every Household</h4>
                <p className="text-[#211f64]/75 text-[12px] lg:text-[14px] leading-relaxed">
                  Our products are priced to be accessible for families without compromising on quality.
                </p>
              </div>
            </div>

            {/* 3. Trusted by Thousands */}
            <div className="absolute group z-10 top-[45%] lg:top-[75%] left-[10%] lg:left-[54%]" style={{ pointerEvents: 'auto' }}>
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-[#211f64] shadow-[0_0_20px_rgba(33,31,100,0.5)] border-4 border-white transform transition-transform group-hover:scale-110" />
              <div className="absolute top-1/2 -translate-y-1/2 left-12 lg:top-full lg:translate-y-0 lg:mt-8 lg:left-1/2 lg:-translate-x-1/2 lg:w-52 lg:text-center w-[200px] sm:w-64">
                <h4 className="text-[16px] lg:text-[18px] font-bold text-[#211f64] mb-1 lg:mb-2">Trusted by Thousands</h4>
                <p className="text-[#211f64]/75 text-[12px] lg:text-[14px] leading-relaxed">
                  Over the years, our brand has built strong trust through consistent quality and results.
                </p>
              </div>
            </div>

            {/* 4. Customer-Focused Approach */}
            <div className="absolute group z-10 top-[68%] lg:top-[60%] right-[10%] lg:left-[77%] lg:right-auto" style={{ pointerEvents: 'auto' }}>
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-[#211f64] shadow-[0_0_20px_rgba(33,31,100,0.5)] border-4 border-white transform transition-transform group-hover:scale-110" />
              <div className="absolute top-1/2 -translate-y-1/2 right-12 text-right lg:left-1/2 lg:-translate-x-1/2 lg:top-full lg:translate-y-0 lg:mt-8 lg:w-52 lg:text-center w-[200px] sm:w-64">
                <h4 className="text-[16px] lg:text-[18px] font-bold text-[#211f64] mb-1 lg:mb-2">Customer-Focused Approach</h4>
                <p className="text-[#211f64]/75 text-[12px] lg:text-[14px] leading-relaxed">
                  Customer satisfaction is at the center of everything we do, from development to support.
                </p>
              </div>
            </div>

            {/* 5. Commitment to Hygiene & Care */}
            <div className="absolute group z-10 top-[90%] lg:top-[25%] left-[10%] lg:left-[94%]" style={{ pointerEvents: 'auto' }}>
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-[#211f64] shadow-[0_0_20px_rgba(33,31,100,0.5)] border-4 border-white transform transition-transform group-hover:scale-110" />
              <div className="absolute top-1/2 -translate-y-1/2 left-12 lg:top-full lg:translate-y-0 lg:mt-8 lg:left-1/2 lg:-translate-x-1/2 lg:w-52 lg:text-center w-[200px] sm:w-64">
                <h4 className="text-[16px] lg:text-[18px] font-bold text-[#211f64] mb-1 lg:mb-2">Commitment to Hygiene & Care</h4>
                <p className="text-[#211f64]/75 text-[12px] lg:text-[14px] leading-relaxed">
                  Our products promote better hygiene and a healthier living environment for all families.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Brand & Vision/Mission */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-[35px] font-semibold text-[#211f64] mb-8 max-w-2xl leading-tight">
            Top soap and detergent brand for quality.
          </h2>
          <p className="text-lg md:text-[20px] text-[#211f64]/75 leading-relaxed">
            Team ACB Group succeeded in gifting affordable yet quality cleaning products for everyday use. The products were instantly appealing to common people and in no time, developed a strong customer base, especially in the Malabar region of Kerala. The brand name Mulla was adopted in 2013 and today, Mulla is the favourite soap and detergent brand in millions of households. We are extremely proud that we have achieved ISO 9001:2015 certification and that marks the utmost quality of our products and services.
          </p>

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

      {/* Social Commitment */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-[35px] font-semibold text-[#211f64] mb-8">
            Our Social Commitment
          </h2>
          <div className="text-lg md:text-[20px] text-[#211f64]/75 leading-relaxed max-w-4xl">
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