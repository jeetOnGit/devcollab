
import React from 'react';
import NavBar from '../components/NavBar';
import Community from '../components/Community';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const CommunityPage = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="pt-24 pb-12 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Join Our Developer Community
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Connect with talented developers from around the world. Learn, share, and grow together.
            </p>
          </div>
        </div>
      </div>
      <Community />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default CommunityPage;
