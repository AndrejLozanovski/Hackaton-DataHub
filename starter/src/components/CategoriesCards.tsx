"use client";
import React, { useEffect, useState } from "react";
import "../components/ComponentsStyle/categoriesCards.css";
import Link from "next/link";

interface SubSubCategory {
  id: string;
  name: string;
}

interface SubCategory {
  id: string;
  name: string;
  image: string;
  subsubcategories: SubSubCategory[];
}

interface Category {
  id: string;
  name: string;
  subcategories: SubCategory[];
}

export const CategoriesCards = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5002/categories");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);

        if (data.bela_tehnika) {
          setCategories([data.bela_tehnika]);
        } else {
          console.log("Categories not found in the expected format:", data);
          setCategories([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const renderCategoryCards = () => {
    return categories.map((category: Category) => (
      <div key={category.id}>
        {category.subcategories.map((subcat: SubCategory, idx: number) => (
          <div key={idx} className="customCard  m-3">
            <div className="bgCard">
              <img src={`/assets/${subcat.image}`} alt={subcat.name} />
            </div>
            <div className="card-body">
              <h3>{subcat.name}</h3>
              <>
                <Link href="/ProductListing"> Двокрилни ладилници</Link>
                <br />
                <Link href="/ProductListing"> Двокрилни ладилници</Link>
                <br />
                <Link href="/ProductListing"> Двокрилни ладилници</Link>
              </>
              <br />
              <Link href="/ProductListing" className="fw-bold mt-2 ">
                Show all (00)
              </Link>
            </div>
          </div>
        ))}
      </div>
    ));
  };

  return <div>{renderCategoryCards()}</div>;
};
