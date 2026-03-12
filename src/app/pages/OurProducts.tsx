import React, { useState } from 'react';

import laundrySoap1 from '../../assets/luandary soap/MULLA-POR-WASH-SOAP-225g.jpg';
import laundrySoap2 from '../../assets/luandary soap/MULLA-POR-WASH-SOAP-500g.jpg';
import laundrySoap3 from '../../assets/luandary soap/mulla-colour-XL900.jpg';
import laundrySoap4 from '../../assets/luandary soap/sunveel-XL.jpg';

import handWash1 from '../../assets/liquids/hand wash/mulla-hand-wash-Herbal-3.jpg';
import handWash2 from '../../assets/liquids/hand wash/mulla-hand-wash-blue-1.jpg';
import handWash3 from '../../assets/liquids/hand wash/mulla-hand-wash-orange-2.jpg';

import dishWash1 from '../../assets/liquids/dish wash/Mulla dishwash liquid.jpg';
import dishWash2 from '../../assets/liquids/dish wash/mulla dish wash rystal-Recovered copy.jpg';

import detLiquid1 from '../../assets/liquids/detergent liquid/SUNVEEL DETERGENT LIQUID 1 kg sigel.jpg';
import detLiquid2 from '../../assets/liquids/detergent liquid/SUNVEEL DETERGENT LIQUID 3 kg.jpg';
import detLiquid3 from '../../assets/liquids/detergent liquid/SUNVEEL DETERGENT LIQUID 5 kg sigel.jpg';
import detLiquid4 from '../../assets/liquids/detergent liquid/mulla detergent 1 kg copy.jpg';

import toiletCleaner1 from '../../assets/liquids/toilet cleaner/toilet cleaner.jpeg';

import floorCleaner1 from '../../assets/liquids/floor cleaner/penyal orange copy.jpg';
import floorCleaner2 from '../../assets/liquids/floor cleaner/penyal pink copy.jpeg';
import floorCleaner3 from '../../assets/liquids/floor cleaner/penyal yellow copy.jpg';

import detPowder1 from '../../assets/detergent powder/LIBAS powder 1kg copy.jpg';
import detPowder2 from '../../assets/detergent powder/LIBAS powder 99. 2kg copy.jpg';
import detPowder3 from '../../assets/detergent powder/LIBAS-powder-4kg.jpg';
import detPowder4 from '../../assets/detergent powder/WENTO POWDER 6KG copy_page-0001.jpg';
import detPowder5 from '../../assets/detergent powder/mulla powder 10 ₹ copy.jpg';
import detPowder6 from '../../assets/detergent powder/mulla powder 20 ₹ copy.jpg';
import detPowder7 from '../../assets/detergent powder/mulla powder 5KG.jpg';
import detPowder8 from '../../assets/detergent powder/sunveel powder package 10 ₹.jpg';
import detPowder9 from '../../assets/detergent powder/sunveel powder package 2kg mockups 99.jpg';
import detPowder10 from '../../assets/detergent powder/sunveel powder package 4kg mockups.jpg';
import detPowder11 from '../../assets/detergent powder/sunveel powder package 500kg mockups copy.jpg';
import detPowder12 from '../../assets/detergent powder/sunveel powder package 6kg mockups.jpg';
import detPowder13 from '../../assets/detergent powder/sunveel-powder-package--1kg-mockups.jpg';
import detPowder14 from '../../assets/detergent powder/sunveel-powder-package-10-rs-mockups.jpg';
import detPowder15 from '../../assets/detergent powder/sunveel-powder-package-2kg-mockups.jpg';
import detPowder16 from '../../assets/detergent powder/sunveel-powder-package-4kg-mockups.jpg';
import detPowder17 from '../../assets/detergent powder/sunveel-powder-package-500kg-mockups.jpg';
import detPowder18 from '../../assets/detergent powder/sunveel-powder-package-6kg-mockups.jpg';
import detPowder19 from '../../assets/detergent powder/wanto 4 kg  mockup copy.jpg';
import detPowder20 from '../../assets/detergent powder/wanto 99 ₹ mockup copy_page-0001.jpg';

const filters = ["All", "Laundry Soaps", "Cleaning Liquids", "Detergent Powders"];

const liquidSubcategories = [
  "Hand Wash Liquid",
  "Dish Wash Liquid",
  "Detergent Liquid",
  "Toilet Cleaner",
  "Floor Cleaner"
];

const mockProducts = [
  // Laundry Soaps
  { id: 101, name: "Mulla Power Wash Soap", category: "Laundry Soaps", subcategory: null, image: laundrySoap1, variants: ["225 g"] },
  { id: 102, name: "Mulla Power Wash Soap", category: "Laundry Soaps", subcategory: null, image: laundrySoap2, variants: ["500 g"] },
  { id: 103, name: "Mulla Colour XL900", category: "Laundry Soaps", subcategory: null, image: laundrySoap3, variants: ["900 g"] },
  { id: 104, name: "Sunveel XL", category: "Laundry Soaps", subcategory: null, image: laundrySoap4, variants: ["1 Pc"] },

  // Cleaning Liquids - Hand Wash
  { id: 201, name: "Mulla Herbal Hand Wash", category: "Cleaning Liquids", subcategory: "Hand Wash Liquid", image: handWash1, variants: ["250 ml"] },
  { id: 202, name: "Mulla Blue Hand Wash", category: "Cleaning Liquids", subcategory: "Hand Wash Liquid", image: handWash2, variants: ["250 ml"] },
  { id: 203, name: "Mulla Orange Hand Wash", category: "Cleaning Liquids", subcategory: "Hand Wash Liquid", image: handWash3, variants: ["250 ml"] },

  // Cleaning Liquids - Dish Wash
  { id: 204, name: "Mulla Dishwash Liquid", category: "Cleaning Liquids", subcategory: "Dish Wash Liquid", image: dishWash1, variants: ["500 ml"] },
  { id: 205, name: "Mulla Dish Wash Crystal", category: "Cleaning Liquids", subcategory: "Dish Wash Liquid", image: dishWash2, variants: ["1 L"] },

  // Cleaning Liquids - Detergent Liquid
  { id: 206, name: "Sunveel Detergent Liquid", category: "Cleaning Liquids", subcategory: "Detergent Liquid", image: detLiquid1, variants: ["1 Kg"] },
  { id: 207, name: "Sunveel Detergent Liquid", category: "Cleaning Liquids", subcategory: "Detergent Liquid", image: detLiquid2, variants: ["3 Kg"] },
  { id: 208, name: "Sunveel Detergent Liquid", category: "Cleaning Liquids", subcategory: "Detergent Liquid", image: detLiquid3, variants: ["5 Kg"] },
  { id: 209, name: "Mulla Detergent Liquid", category: "Cleaning Liquids", subcategory: "Detergent Liquid", image: detLiquid4, variants: ["1 Kg"] },

  // Cleaning Liquids - Toilet Cleaner
  { id: 210, name: "Toilet Cleaner", category: "Cleaning Liquids", subcategory: "Toilet Cleaner", image: toiletCleaner1, variants: ["500 ml", "1 L"] },

  // Cleaning Liquids - Floor Cleaner
  { id: 211, name: "Phenyl Orange", category: "Cleaning Liquids", subcategory: "Floor Cleaner", image: floorCleaner1, variants: ["1 L"] },
  { id: 212, name: "Phenyl Pink", category: "Cleaning Liquids", subcategory: "Floor Cleaner", image: floorCleaner2, variants: ["1 L"] },
  { id: 213, name: "Phenyl Yellow", category: "Cleaning Liquids", subcategory: "Floor Cleaner", image: floorCleaner3, variants: ["1 L"] },

  // Detergent Powders
  { id: 301, name: "Libas Powder", category: "Detergent Powders", subcategory: null, image: detPowder1, variants: ["1 Kg"] },
  { id: 302, name: "Libas Powder", category: "Detergent Powders", subcategory: null, image: detPowder2, variants: ["2 Kg"] },
  { id: 303, name: "Libas Powder", category: "Detergent Powders", subcategory: null, image: detPowder3, variants: ["4 Kg"] },
  { id: 304, name: "Wento Powder", category: "Detergent Powders", subcategory: null, image: detPowder4, variants: ["6 Kg"] },
  { id: 305, name: "Mulla Powder", category: "Detergent Powders", subcategory: null, image: detPowder5, variants: ["10 ₹"] },
  { id: 306, name: "Mulla Powder", category: "Detergent Powders", subcategory: null, image: detPowder6, variants: ["20 ₹"] },
  { id: 307, name: "Mulla Powder", category: "Detergent Powders", subcategory: null, image: detPowder7, variants: ["5 Kg"] },
  { id: 308, name: "Sunveel Powder", category: "Detergent Powders", subcategory: null, image: detPowder8, variants: ["10 ₹"] },
  { id: 309, name: "Sunveel Powder", category: "Detergent Powders", subcategory: null, image: detPowder9, variants: ["2 Kg"] },
  { id: 310, name: "Sunveel Powder", category: "Detergent Powders", subcategory: null, image: detPowder10, variants: ["4 Kg"] },
  { id: 311, name: "Sunveel Powder", category: "Detergent Powders", subcategory: null, image: detPowder11, variants: ["500 g"] },
  { id: 312, name: "Sunveel Powder", category: "Detergent Powders", subcategory: null, image: detPowder12, variants: ["6 Kg"] },
  { id: 313, name: "Sunveel Powder", category: "Detergent Powders", subcategory: null, image: detPowder13, variants: ["1 Kg"] },
  { id: 314, name: "Sunveel Powder", category: "Detergent Powders", subcategory: null, image: detPowder14, variants: ["10 rs"] },
  { id: 315, name: "Sunveel Powder", category: "Detergent Powders", subcategory: null, image: detPowder15, variants: ["2 Kg"] },
  { id: 316, name: "Sunveel Powder", category: "Detergent Powders", subcategory: null, image: detPowder16, variants: ["4 Kg"] },
  { id: 317, name: "Sunveel Powder", category: "Detergent Powders", subcategory: null, image: detPowder17, variants: ["500 g"] },
  { id: 318, name: "Sunveel Powder", category: "Detergent Powders", subcategory: null, image: detPowder18, variants: ["6 Kg"] },
  { id: 319, name: "Wanto Powder", category: "Detergent Powders", subcategory: null, image: detPowder19, variants: ["4 Kg"] },
  { id: 320, name: "Wanto Powder", category: "Detergent Powders", subcategory: null, image: detPowder20, variants: ["99 ₹"] }
];

export default function OurProducts() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeSubcategory, setActiveSubcategory] = useState(liquidSubcategories[0]);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
    if (filter === "Cleaning Liquids") {
      setActiveSubcategory(liquidSubcategories[0]);
    }
  };

  const filteredProducts = mockProducts.filter((product) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Cleaning Liquids") {
      return product.category === "Cleaning Liquids" && product.subcategory === activeSubcategory;
    }
    return product.category === activeFilter;
  });

  return (
    <div className="bg-white min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Filters */}
        <div className={`flex flex-wrap gap-4 ${activeFilter === "Cleaning Liquids" ? "mb-8" : "mb-16"}`}>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={`px-6 py-2 rounded-full font-semibold text-lg transition-colors ${activeFilter === filter
                ? "bg-[#211f64] text-white"
                : "bg-[#d9d9d9] text-[#211f64]/75 hover:bg-[#c9c9c9]"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Cleaning Liquids Subcategories */}
        {activeFilter === "Cleaning Liquids" && (
          <div className="w-full flex-wrap flex mb-16 shadow-sm rounded-md">
            {liquidSubcategories.map((sub, index) => {
              const isActive = activeSubcategory === sub;
              return (
                <button
                  key={sub}
                  onClick={() => setActiveSubcategory(sub)}
                  className={`relative flex-1 py-4 text-center font-medium transition-colors min-w-[150px] ${index === 0 ? "rounded-l-md" : ""
                    } ${index === liquidSubcategories.length - 1 ? "rounded-r-md" : ""
                    } ${isActive
                      ? "bg-[#2b2b6e] text-white z-10"
                      : "bg-[#e0e0ff] text-[#2b2b6e] hover:bg-[#d0d0f5]"
                    }`}
                >
                  {sub}
                  {isActive && (
                    <div className="absolute left-1/2 -bottom-3 -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-[#2b2b6e]"></div>
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">
          {filteredProducts.map((product) => (
            <div key={product.id} className="flex flex-col items-center group">
              <div className="w-full aspect-[4/5] mb-6 relative overflow-hidden rounded-2xl bg-gray-50 flex items-center justify-center p-4 transition-transform duration-300 group-hover:-translate-y-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain mix-blend-multiply"
                />
              </div>
              <h3 className="text-xl font-semibold text-[#211f64] mb-4 text-center">
                {product.name}
              </h3>
              <div className="flex gap-3 flex-wrap justify-center">
                {product.variants.map((variant) => (
                  <div
                    key={variant}
                    className="border border-[#211f64] rounded-full px-4 py-1.5 text-[#211f64] font-medium text-sm hover:bg-[#211f64] hover:text-white transition-colors cursor-pointer"
                  >
                    {variant}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}