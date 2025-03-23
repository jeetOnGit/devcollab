
import React from 'react';
import NavBar from '../components/NavBar';
import Features from '../components/Features';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const FeaturesPage = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="pt-24 pb-12 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Powerful Features for Developers
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Discover all the tools and features designed to make your collaboration experience seamless and productive.
            </p>
          </div>
        </div>
      </div>
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default FeaturesPage;
