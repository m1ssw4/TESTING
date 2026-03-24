/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Phone, 
  MapPin, 
  Star, 
  CheckCircle2, 
  ArrowRight, 
  Users, 
  Search, 
  MousePointer2, 
  MessageSquare,
  ChevronDown,
  Clock,
  ShieldCheck,
  TrendingUp,
  Mail
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

const AGENCY_NAME = "LocalGrowth Marketing";
const CITY = "Your City";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-orange-100 selection:text-orange-900">
      <Navbar />
      <Hero />
      <SocialProof />
      <Services />
      <CaseStudies />
      <HowWeWork />
      <Pricing />
      <About />
      <Blog />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">{AGENCY_NAME}</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">Services</a>
            <a href="#results" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">Results</a>
            <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-orange-600 transition-colors">Pricing</a>
            <button className="bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-700 transition-all shadow-sm">
              Get More Customers
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative pt-20 pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-orange-600 uppercase bg-orange-50 rounded-full">
              Helping {CITY} Businesses Win
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              We Make Your Phone Ring With Customers Who Want To Buy.
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Stop wasting your hard-earned money on "marketing experts" who deliver fancy reports instead of actual paying customers.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-orange-600 text-white text-lg font-bold rounded-xl hover:bg-orange-700 transition-all shadow-lg shadow-orange-200 flex items-center justify-center gap-2 group">
                Get More Local Customers
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-sm text-slate-500 font-medium">
                No jargon. No contracts. Just results.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-50 rounded-full blur-3xl -z-10 opacity-50" />
    </section>
  );
}

function SocialProof() {
  return (
    <section className="bg-slate-50 py-12 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-10">
          Helping local businesses compete and win online
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="flex flex-col items-center text-center">
            <span className="text-4xl font-black text-slate-900 mb-2">12,400+</span>
            <span className="text-sm font-medium text-slate-600">Customer calls generated</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-4xl font-black text-slate-900 mb-2">850+</span>
            <span className="text-sm font-medium text-slate-600">New 5-star Google reviews</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-4xl font-black text-slate-900 mb-2">42%</span>
            <span className="text-sm font-medium text-slate-600">Average monthly lead growth</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: <Search className="w-6 h-6 text-orange-600" />,
      title: "Show Up First on Google",
      frustration: "Tired of seeing your competitors get all the calls while your business is buried on page 5?",
      solution: "We fix your Google profile and website so when local people search for what you do, you're the first one they see.",
      outcome: "Outcome: More people finding you and calling your business every single day.",
      cta: "Get Found on Google"
    },
    {
      icon: <MousePointer2 className="w-6 h-6 text-orange-600" />,
      title: "Google Ads That Actually Work",
      frustration: "Ever tried running ads only to watch your budget disappear with zero new customers to show for it?",
      solution: "We build simple, direct ads that target people in [Your City] who are ready to buy right now.",
      outcome: "Outcome: A steady stream of high-quality leads without the guesswork.",
      cta: "Start Getting Leads"
    },
    {
      icon: <Star className="w-6 h-6 text-orange-600" />,
      title: "Reputation & Review Growth",
      frustration: "Worried that a few bad reviews (or no reviews at all) are scaring away potential customers?",
      solution: "We help you automatically get more 5-star reviews from your happy customers and handle the negative ones for you.",
      outcome: "Outcome: A 5-star reputation that makes you the obvious choice in town.",
      cta: "Boost Your Reputation"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple Services. Real Results.</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">We don't do "branding" or "awareness." We do things that make you money.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:border-orange-200 hover:bg-white hover:shadow-xl transition-all group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
              <p className="text-sm italic text-slate-500 mb-4">"{service.frustration}"</p>
              <p className="text-slate-600 mb-6 leading-relaxed">{service.solution}</p>
              <p className="text-sm font-bold text-orange-600 mb-8">{service.outcome}</p>
              <button className="w-full py-3 px-4 bg-white border border-slate-200 text-slate-900 font-bold rounded-lg hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all">
                {service.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  const cases = [
    {
      type: "Local Plumber",
      problem: "Was relying entirely on expensive, low-quality lead sites and word-of-mouth that had dried up.",
      strategy: "Optimized their Google Business Profile and ran targeted 'Emergency Plumber' ads in their service area.",
      result: "63 new high-value leads in the first 30 days."
    },
    {
      type: "Dental Clinic",
      problem: "Had great service but only a 4.2 rating with very few recent reviews, losing patients to the new clinic down the street.",
      strategy: "Implemented our automated review system to capture feedback from every patient right after their appointment.",
      result: "Rating jumped from 4.2 → 4.8 with 45 new 5-star reviews in 60 days."
    },
    {
      type: "Family Restaurant",
      problem: "Busy on weekends but dead on Tuesday and Wednesday nights.",
      strategy: "Ran a simple 'Mid-Week Special' social media campaign targeting locals within a 5-mile radius.",
      result: "Tuesday night bookings increased by 35% within 3 weeks."
    }
  ];

  return (
    <section id="results" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proof We Get The Job Done</h2>
          <p className="text-slate-400">Real results for real local businesses just like yours.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, idx) => (
            <div key={idx} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-colors">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="text-sm font-bold uppercase tracking-wider text-orange-500">{item.type}</span>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">The Problem</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.problem}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-500 uppercase mb-2">The Strategy</h4>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.strategy}</p>
                </div>
                <div className="pt-4 border-t border-slate-700">
                  <h4 className="text-xs font-bold text-orange-500 uppercase mb-1">The Result</h4>
                  <p className="text-xl font-bold text-white">{item.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -ml-48 -mb-48" />
    </section>
  );
}

function HowWeWork() {
  const steps = [
    {
      title: "1. Discovery Call",
      desc: "A quick 15-minute chat to understand your business, your goals, and see if we're a good fit to work together."
    },
    {
      title: "2. Custom Strategy",
      desc: "We build a simple, no-fluff plan designed to get your phone ringing as quickly as possible."
    },
    {
      title: "3. Launch",
      desc: "We handle all the technical heavy lifting. You just keep doing what you do best — running your business."
    },
    {
      title: "4. Monthly Results",
      desc: "Every month, we show you exactly how many new customers we brought you. No complex jargon, just numbers."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How We Get You More Customers</h2>
          <p className="text-lg text-slate-600">A simple, stress-free process designed for busy owners.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-slate-200" />
              )}
            </div>
          ))}
        </div>
        <div className="mt-16 p-8 bg-orange-50 rounded-2xl border border-orange-100 text-center">
          <p className="text-orange-900 font-medium italic">
            "We know you've probably been burned by agencies before. That's why we don't hide behind complex reports. If your phone isn't ringing more than it was before you hired us, we aren't doing our job."
          </p>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const tiers = [
    {
      name: "Starter",
      desc: "Best for single-location businesses just getting started online.",
      price: "$997",
      features: [
        "Google Business Profile Setup",
        "Local Search Optimization",
        "Basic Review Management",
        "Monthly Performance Summary"
      ],
      cta: "Start Growing"
    },
    {
      name: "Growth",
      desc: "Best for established businesses wanting a steady stream of leads.",
      price: "$1,997",
      popular: true,
      features: [
        "Everything in Starter",
        "Google Ads Management",
        "Automated Review Growth",
        "Competitor Tracking",
        "Priority Support"
      ],
      cta: "Get More Leads"
    },
    {
      name: "Dominator",
      desc: "Best for multi-location businesses or very competitive markets.",
      price: "$3,497",
      features: [
        "Everything in Growth",
        "Social Media Management",
        "Advanced Local SEO",
        "Custom Website Updates",
        "Dedicated Account Manager"
      ],
      cta: "Dominate Your Market"
    }
  ];

  const faqs = [
    {
      q: "How much does this actually cost?",
      a: "We believe in transparent pricing. Our packages start at $997/month. There are no hidden fees, and we'll tell you exactly what your ad budget should be based on your goals."
    },
    {
      q: "I've tried agencies before and it didn't work. Why are you different?",
      a: "Most agencies focus on 'clicks' and 'impressions.' We focus on phone calls and bookings. If our work doesn't result in more customers for you, we haven't succeeded. We work on a month-to-month basis because we believe we should earn your business every single month."
    },
    {
      q: "I don't understand any of this tech stuff. Do I need to be involved?",
      a: "Not at all. We built this agency specifically for busy owners who don't have time to learn marketing. We handle everything. You just need to be ready to answer the phone when new customers call."
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Simple, Fair Pricing</h2>
          <p className="text-lg text-slate-600">No hidden fees. No long-term contracts. Just growth.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {tiers.map((tier, idx) => (
            <div key={idx} className={`relative p-8 rounded-2xl bg-white border ${tier.popular ? 'border-orange-500 shadow-xl scale-105 z-10' : 'border-slate-200 shadow-sm'} flex flex-col`}>
              {tier.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
              <p className="text-sm text-slate-500 mb-6">{tier.desc}</p>
              <div className="mb-8">
                <span className="text-4xl font-black text-slate-900">{tier.price}</span>
                <span className="text-slate-500 font-medium">/mo</span>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${tier.popular ? 'bg-orange-600 text-white hover:bg-orange-700 shadow-lg shadow-orange-200' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Common Questions</h3>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const team = [
    {
      name: "Mike Henderson",
      role: "Founder & Strategy",
      credential: "15 years helping local shops grow their revenue.",
      personality: "Can usually be found at the local diner talking shop with owners."
    },
    {
      name: "Sarah Chen",
      role: "Google Specialist",
      credential: "Certified Google Expert who knows exactly how to get you found.",
      personality: "Obsessed with making sure your business shows up first."
    },
    {
      name: "Dave Miller",
      role: "Customer Success",
      credential: "Your direct line for any questions or updates.",
      personality: "The guy who makes sure you're always happy with the results."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">We Know The Local Struggle</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              We didn't start in a fancy corporate office. We started by helping a local plumber friend who was about to close his doors because he couldn't get the phone to ring. 
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We saw how hard it was for honest, hard-working business owners to compete with big franchises and slick talkers. We decided to change that by offering marketing that actually works, explained in plain English.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/seed/local1/600/800" alt="Local Business" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/local2/600/800" alt="Local Business" className="rounded-2xl shadow-lg mt-8" referrerPolicy="no-referrer" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="text-center p-8 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-6 overflow-hidden">
                <img src={`https://picsum.photos/seed/team${idx}/200/200`} alt={member.name} referrerPolicy="no-referrer" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h4>
              <p className="text-orange-600 font-bold text-sm mb-4 uppercase tracking-wider">{member.role}</p>
              <p className="text-slate-600 text-sm mb-3">{member.credential}</p>
              <p className="text-slate-400 text-xs italic">{member.personality}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Blog() {
  const posts = [
    {
      title: "How to Get More Customers From Google Without Spending a Dime",
      desc: "Learn the 3 simple things you can do to your Google profile today to show up higher in local searches."
    },
    {
      title: "Why Your Competitor is Showing Up First on Google (And How to Beat Them)",
      desc: "We break down exactly why the business down the street is getting the calls and how you can take them back."
    },
    {
      title: "The 5-Minute Trick to Getting More 5-Star Reviews",
      desc: "Stop chasing customers for reviews. Use this simple method to get them to leave a 5-star rating automatically."
    },
    {
      title: "Is Your Website Scaring Away Customers?",
      desc: "Most local business websites are too slow or too confusing. Here's how to tell if yours is costing you money."
    },
    {
      title: "How to Get Your Phone Ringing During Your Slowest Months",
      desc: "Simple strategies to keep your schedule full even when the local market usually quietens down."
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">Free Advice for Local Owners</h2>
            <p className="text-slate-600">No jargon. Just practical tips to help your business grow.</p>
          </div>
          <button className="text-orange-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
            View All Resources <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all flex flex-col">
              <h3 className="text-lg font-bold text-slate-900 mb-4 leading-tight">{post.title}</h3>
              <p className="text-slate-600 text-sm mb-6 flex-grow">{post.desc}</p>
              <button className="text-sm font-bold text-orange-600 flex items-center gap-2 group">
                Read More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-24 bg-orange-600 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-widest text-white uppercase bg-orange-500 rounded-full">
          Limited Availability
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
          Ready to Get More Customers and Less Stress?
        </h2>
        <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
          We only work with one business per industry in {CITY}. Once your spot is taken, it's gone. Don't let your competitor beat you to it.
        </p>
        <div className="flex flex-col items-center gap-6">
          <button className="px-10 py-5 bg-white text-orange-600 text-xl font-black rounded-2xl hover:bg-orange-50 transition-all shadow-2xl shadow-orange-900/20">
            Book My Free Growth Call
          </button>
          <div className="flex items-center gap-4 text-orange-100 text-sm font-medium">
            <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> No contracts</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> No jargon</span>
            <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> Just results</span>
          </div>
        </div>
      </div>
      
      {/* Abstract shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mt-32" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full -mr-48 -mb-48" />
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 py-12 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-orange-600 rounded flex items-center justify-center">
              <TrendingUp className="text-white w-4 h-4" />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">{AGENCY_NAME}</span>
          </div>
          <div className="flex gap-8 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </div>
          <p className="text-xs">
            © {new Date().getFullYear()} {AGENCY_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
