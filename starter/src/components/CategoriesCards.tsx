"use client";

import React from "react";
import "../components/ComponentsStyle/categoriesCards.css";
import Link from "next/link";

interface SubSubcategory {
  id: string;
  name: string;
}

interface Subcategory {
  id: string;
  name: string;
  image?: string;
  subcategories: SubSubcategory[];
}

interface Category {
  id: string;
  name: string;
  subcategories: Subcategory[];
}

interface CategoryCardProps {
  category: Category;
}

export const CategoriesCards = ({ category }: CategoryCardProps) => {
  return (
    <div>
      <h1 className="fw-bolder">{category.name}</h1>
      {category.subcategories.map((subcat) => (
        <div key={subcat.id} className="card m-3">
          <div className="bgCard">
            <img
              className="text-center"
              src={`/assets/${subcat.image}`}
              alt={subcat.name}
            />
          </div>
          <h3 className="mt-3">{subcat.name}</h3>
          {subcat.subcategories.map((subsubcat) => (
            <>
              <Link href="/ProductListing"> {subsubcat.name}</Link>
              <Link href="/ProductListing"> {subsubcat.name}</Link>
              <Link href="/ProductListing"> {subsubcat.name}</Link>
            </>
          ))}

          <Link href="/ProductListing" className="fw-bold mt-2 ">
            Show all (00)
          </Link>
        </div>
      ))}
    </div>
  );
};
