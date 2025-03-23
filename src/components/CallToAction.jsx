
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center text-white animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to collaborate with other developers?</h2>
          <p className="text-lg mb-8 text-white/80">
            Join thousands of developers who are already enhancing their skills, expanding their network, and building amazing projects together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-primary hover:bg-white/90 group"
            >
              Get Started Now <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-black hover:bg-white/10 hover:text-white"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
