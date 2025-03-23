
import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin, ExternalLink } from 'lucide-react';

const DeveloperCard = ({ name, role, image, github, twitter, linkedin }) => {
  return (
    <div className="group rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 bg-cover" 
        />
        <div className="absolute bottom-4 left-4 right-4 z-20">
          <h3 className="text-white font-semibold text-lg">{name}</h3>
          <p className="text-white/80 text-sm">{role}</p>
        </div>
      </div>
      <div className="p-4 bg-white dark:bg-black/20 border-t border-border">
        <div className="flex gap-3">
          {github && (
            <a 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={18} />
            </a>
          )}
          {twitter && (
            <a 
              href={twitter} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter size={18} />
            </a>
          )}
          {linkedin && (
            <a 
              href={linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Community = () => {
  const developers = [
    {
      name: "Alex Chen",
      role: "Frontend Developer",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=300&h=200&auto=format&fit=crop",
      github: "#",
      twitter: "#",
      linkedin: "#"
    },
    {
      name: "Sophia Martinez",
      role: "Backend Engineer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&h=200&auto=format&fit=crop",
      github: "#",
      twitter: "#",
      linkedin: "#"
    },
    {
      name: "David Kim",
      role: "Full Stack Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=200&auto=format&fit=crop",
      github: "#",
      twitter: "#",
      linkedin: "#"
    },
    {
      name: "Emily Johnson",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&h=200&auto=format&fit=crop",
      github: "#",
      twitter: "#",
      linkedin: "#"
    },
    {
      name: "Michael Rodriguez",
      role: "Mobile Developer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&h=200&auto=format&fit=crop",
      github: "#",
      twitter: "#",
      linkedin: "#"
    },
    {
      name: "Sarah Park",
      role: "DevOps Engineer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&h=200&auto=format&fit=crop",
      github: "#",
      twitter: "#",
      linkedin: "#"
    }
  ];

  return (
    <section id="community" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Developer Community</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with talented developers worldwide. Learn, collaborate, and grow together.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 animate-fade-in">
          {developers.map((developer, index) => (
            <DeveloperCard 
              key={index} 
              name={developer.name} 
              role={developer.role} 
              image={developer.image}
              github={developer.github}
              twitter={developer.twitter}
              linkedin={developer.linkedin}
            />
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Button size="lg" className="group">
            Explore Full Community <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Community;
