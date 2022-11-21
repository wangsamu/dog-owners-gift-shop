import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview';
import Category from '../Category/Category';
import {
  getCategoriesAndDocuments,
  addCollectionAndDocuments,
} from '../../utils/firebase/firebase.utils';
import { setCategories } from '../../store/categories/category.action';
import { useDispatch } from 'react-redux';
import shopData from '../../shop-data';

function Shop() {
  const dispatch = useDispatch();

  useEffect(() => {
    // const refreshCategories = async () => {
    //   await addCollectionAndDocuments('pet-categories', shopData);
    // };

    // refreshCategories();

    const getCategoriesMap = async () => {
      const categoriesArray = await getCategoriesAndDocuments('pet-categories');
      dispatch(setCategories(categoriesArray));
    };

    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
}

export default Shop;
