
import React from 'react';
import NavBar from '../components/NavBar';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

const PricingTier = ({ name, price, description, features, isPopular, buttonText }) => {
  return (
    <div className={`rounded-xl border ${isPopular ? 'border-primary shadow-lg relative' : 'border-border'} p-6 animate-slide-up`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs font-semibold py-1 px-3 rounded-full">
          Most Popular
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <div className="text-3xl font-bold mb-2">${price}<span className="text-sm font-normal text-muted-foreground">/month</span></div>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Button 
        className={`w-full ${isPopular ? '' : 'bg-secondary text-primary hover:bg-secondary/80'}`}
        variant={isPopular ? 'default' : 'outline'}
      >
        {buttonText}
      </Button>
    </div>
  );
};

const PricingPage = () => {
  const tiers = [
    {
      name: "Free",
      price: "0",
      description: "For individual developers getting started",
      features: [
        "Up to 3 video collaborations per month",
        "Basic code editor features",
        "Community access",
        "1 private project",
        "Email support"
      ],
      isPopular: false,
      buttonText: "Start for Free"
    },
    {
      name: "Pro",
      price: "29",
      description: "For professional developers and small teams",
      features: [
        "Unlimited video collaborations",
        "Advanced code editor features",
        "Priority community access",
        "10 private projects",
        "GitHub integration",
        "Priority support"
      ],
      isPopular: true,
      buttonText: "Get Started"
    },
    {
      name: "Team",
      price: "99",
      description: "For development teams and organizations",
      features: [
        "Everything in Pro",
        "Unlimited private projects",
        "Team management tools",
        "Advanced security features",
        "Usage analytics",
        "Custom integrations",
        "Dedicated support"
      ],
      isPopular: false,
      buttonText: "Contact Sales"
    }
  ];

  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="pt-24 pb-12 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Choose the plan that's right for you or your team. All plans include a 14-day free trial.
            </p>
          </div>
        </div>
      </div>
      
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => (
              <PricingTier 
                key={index}
                name={tier.name}
                price={tier.price}
                description={tier.description}
                features={tier.features}
                isPopular={tier.isPopular}
                buttonText={tier.buttonText}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center max-w-3xl mx-auto animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">Enterprise Solutions</h3>
            <p className="text-muted-foreground mb-6">
              Need a custom solution for your large team or organization? Contact our sales team for a custom quote.
            </p>
            <Button size="lg" variant="outline" className='hover:text-white'>Contact Enterprise Sales</Button>
          </div>
        </div>
      </section>
      
      <CallToAction />
      <Footer />
    </div>
  );
};

export default PricingPage;
