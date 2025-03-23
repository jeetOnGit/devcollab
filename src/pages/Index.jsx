
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Community from '../components/Community';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";

const Index = () => {
  // Add page transition effect
  useEffect(() => {
    document.body.classList.add('page-transition-wrapper');
    
    return () => {
      document.body.classList.remove('page-transition-wrapper');
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <div className="py-10 bg-primary/10 text-center">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Experience Real-Time Collaboration</h2>
          <p className="mb-6 text-lg max-w-2xl mx-auto">
            Try our interactive demo to see how you can code together with other developers in real-time using video chat.
          </p>
          <Button size="lg" asChild>
            <Link to="/demo">Try Demo Now</Link>
          </Button>
        </div>
      </div>
      <Features />
      <Community />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
