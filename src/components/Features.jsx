
import React from 'react';
import { 
  Video, Users, Code, Globe, MessageSquare, Github, 
  Lightbulb, ShieldCheck, Zap 
} from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="group p-6 rounded-xl transition-all duration-300 hover:glass-effect border border-transparent hover:border-white/20 hover:shadow-lg">
      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-primary/20">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Video,
      title: "Real-time Video Collaboration",
      description: "Connect face-to-face with developers while coding together to solve problems faster and more efficiently."
    },
    {
      icon: Code,
      title: "Collaborative Code Editor",
      description: "Write, edit and debug code simultaneously with multiple developers in a shared workspace."
    },
    {
      icon: Users,
      title: "Developer Community",
      description: "Join a thriving community of developers to learn, share knowledge, and grow professionally."
    },
    {
      icon: Github,
      title: "GitHub Integration",
      description: "Seamlessly connect your GitHub repositories to collaborate on existing projects with your team."
    },
    {
      icon: MessageSquare,
      title: "Chat & Discussions",
      description: "Communicate through text channels alongside your code sessions to discuss ideas and solutions."
    },
    {
      icon: Globe,
      title: "Global Talent Network",
      description: "Connect with developers worldwide, breaking geographical barriers for collaborative innovation."
    },
    {
      icon: ShieldCheck,
      title: "Secure Workspace",
      description: "End-to-end encryption ensures your code and conversations remain private and secure."
    },
    {
      icon: Lightbulb,
      title: "Knowledge Sharing",
      description: "Learn from peers through code reviews, pair programming, and interactive learning sessions."
    },
    {
      icon: Zap,
      title: "Productivity Tools",
      description: "Boost your workflow with integrated tools for project management, documentation, and more."
    }
  ];

  return (
    <section id="features" className="py-20 bg-secondary/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Collaboration Tools</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to code, collaborate, and build amazing projects together
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
