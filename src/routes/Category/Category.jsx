import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';
import ProductCard from '../../components/product-card/ProductCard';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import {
  CategoryContainer,
  CategoryItemsContainer,
  CategoryTitle,
} from './category.styles';

function Category() {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <CategoryContainer>
      <CategoryTitle>DOGO {category.toUpperCase()}</CategoryTitle>
      <CategoryItemsContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryItemsContainer>
    </CategoryContainer>
  );
}

export default Category;
