import React from 'react';
import { ImageGallery } from '../components/product/ImageGallery';
import { ProductInfo } from '../components/product/ProductInfo';
import { Reviews } from '../components/product/Reviews';
import { RelatedProducts } from '../components/product/RelatedProducts';
export function Product() {
  return (
    <div className="bg-offwhite pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 mb-24">
          <div className="w-full lg:w-1/2">
            <ImageGallery />
          </div>
          <div className="w-full lg:w-1/2">
            <ProductInfo />
          </div>
        </div>
        <Reviews />
        <RelatedProducts />
      </div>
    </div>);

}