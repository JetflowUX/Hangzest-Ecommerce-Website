import React from 'react';
import { Hero } from '../components/home/Hero';
import { TrustBar } from '../components/home/TrustBar';
import { BenefitsGrid } from '../components/home/BenefitsGrid';
import { LifestyleGallery } from '../components/home/LifestyleGallery';
import { FeaturedProduct } from '../components/home/FeaturedProduct';
import { WhyHangzest } from '../components/home/WhyHangzest';
import { Testimonials } from '../components/home/Testimonials';
import { FaqPreview } from '../components/home/FaqPreview';
import { Newsletter } from '../components/home/Newsletter';
export function Home() {
  return (
    <div className="bg-offwhite">
      <Hero />
      <TrustBar />
      <BenefitsGrid />
      <LifestyleGallery />
      <FeaturedProduct />
      <WhyHangzest />
      <Testimonials />
      <FaqPreview />
      <Newsletter />
    </div>);

}