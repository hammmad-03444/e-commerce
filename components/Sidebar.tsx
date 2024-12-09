'use client'
import React, { useState } from 'react';

const categories = [
  'Women’s Fashion',
  'Men’s Fashion',
  'Electronics',
  'Home & Lifestyle',
  'Medicine',
  'Sports & Outdoor',
  'Baby’s & Toys',
  'Groceries & Pets',
];

export default function Sidebar() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <aside className="w-64 bg-green-100 py-6">
      <ul className="space-y-4 px-4">
        {categories.map((category) => (
          <li key={category} className="group">
            <button
              className="flex justify-between w-full text-gray-700 font-semibold hover:text-green-700"
              onClick={() =>
                setActiveCategory(activeCategory === category ? null : category)
              }
            >
              {category}
              
            </button>
            {/* Subcategories (Example) */}
            {activeCategory === category && (
              <ul className="mt-2 ml-4 space-y-2">
                <li className="text-gray-500">Subcategory 1</li>
                <li className="text-gray-500">Subcategory 2</li>
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
