import React, { useState } from 'react';
import { toast } from 'sonner';

export default function ContactUs() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const emailTo = "acbenterprises16@gmail.com"; // Updated recipient email

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${emailTo}`, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen pt-12 pb-24 md:pt-20 md:pb-32 flex flex-col items-center">
      <div className="w-full max-w-[1269px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-[50px] font-semibold text-[#211f64] mb-2">Contact Us</h1>
          <p className="text-lg md:text-xl text-gray-500 font-medium">Message us for more details</p>
        </div>
        <form
          className="flex flex-col gap-[23px]"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full bg-[#f0f0f0] rounded-[25px] h-[65px] px-8 text-lg md:text-[24px] text-[#211f64] placeholder:text-[#737373]/75 focus:outline-none focus:ring-2 focus:ring-[#211f64]/50 transition-shadow font-['Roboto',sans-serif]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full bg-[#f0f0f0] rounded-[25px] h-[65px] px-8 text-lg md:text-[24px] text-[#211f64] placeholder:text-[#737373]/75 focus:outline-none focus:ring-2 focus:ring-[#211f64]/50 transition-shadow font-['Roboto',sans-serif]"
          />
          <input
            type="text"
            name="_subject"
            placeholder="Subject"
            required
            className="w-full bg-[#f0f0f0] rounded-[25px] h-[65px] px-8 text-lg md:text-[24px] text-[#211f64] placeholder:text-[#737373]/75 focus:outline-none focus:ring-2 focus:ring-[#211f64]/50 transition-shadow font-['Roboto',sans-serif]"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full bg-[#f0f0f0] rounded-[25px] h-[209px] px-8 py-6 text-lg md:text-[24px] text-[#211f64] placeholder:text-[#737373]/75 focus:outline-none focus:ring-2 focus:ring-[#211f64]/50 transition-shadow resize-none font-['Roboto',sans-serif]"
          />
          <div className="flex justify-end w-full">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-[#211f64] text-white rounded-[25px] h-[67px] w-full sm:w-[337px] text-xl md:text-[25px] font-medium hover:bg-[#1a1850] transition-colors font-['Roboto',sans-serif] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Sending...' : 'Send now'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}