import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services/graphql';
import { ICategoryProps } from '../types';

function Categories() {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    const categoriesFetched = await getCategories();
    setCategories(categoriesFetched);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b border-b-secondary-color pb-4">Categories</h3>
      {categories.map((category: ICategoryProps, index) => (
        <Link key={index} href={/*`/category/${category.slug}`*/ '/'}>
          <span className="cursor-pointer block pb-3 mb-3">{category.name}</span>
        </Link>
      ))}
    </div>
  );
}

export default Categories;
