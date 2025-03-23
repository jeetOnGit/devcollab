
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Video, Code, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-10">
          <div className="space-y-4 max-w-3xl mx-auto animate-scale-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Collaborate, Code, Create <span className="text-primary">Together</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              A platform for developers to join forces, share knowledge, and build amazing projects through real-time video collaboration.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button size="lg" className="group" asChild>
              <Link to="/demo">
                Start Collaborating <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className='hover:text-white'>
              <Link to="/community">
                Explore Community
              </Link>
            </Button>
          </div>

          <div className="pt-8 w-full max-w-5xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-xl blur-xl"></div>
              <div className="glass-effect rounded-xl shadow-xl overflow-hidden relative border border-white/20">
                <div className="bg-black/5 absolute inset-0"></div>
                <div className="relative p-2 md:p-4">
                  <div className="flex items-center gap-2 p-2 mb-4">
                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                    <div className="ml-4 text-xs text-muted-foreground">collaborative-project.js</div>
                  </div>
                  <div className="h-[300px] sm:h-[400px] bg-black/80 rounded-lg flex items-center justify-center">
                    <div className="text-white/90 text-center flex flex-col items-center gap-6">
                      <Video className="h-16 w-16 text-primary" />
                      <p className="max-w-md font-medium">
                        Video coding sessions with peers make problem-solving faster and learning more effective
                      </p>
                      <Button asChild>
                        <Link to="/demo">Try Interactive Demo</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mx-auto pt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Video className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Video Collaboration</h3>
              <p className="text-sm text-muted-foreground">
                Code together in real-time through seamless video chats
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Shared Workspaces</h3>
              <p className="text-sm text-muted-foreground">
                Code simultaneously in a collaborative environment
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold">Developer Community</h3>
              <p className="text-sm text-muted-foreground">
                Connect with like-minded developers across the globe
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
