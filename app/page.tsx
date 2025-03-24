import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Clock,
  Database,
  LineChart,
  MessageSquare,
  PieChart,
  Search,
  TrendingUp,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span>MarketInsight AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm font-medium hover:text-primary"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium hover:text-primary"
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium hover:text-primary"
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium hover:text-primary"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-sm font-medium hover:text-primary"
            >
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
            <Button size="sm">Sign up</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 md:py-32 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter">
                AI-Powered Market Research for Smarter Business Decisions
              </h1>
              <p className="text-xl text-muted-foreground">
                Get real-time insights, competitor analysis, and trend
                predictions—powered by AI and the best market research APIs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="gap-2">
                  Try for Free
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="gap-2">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden border shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="AI Market Research Dashboard"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-muted/50 py-24">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Unlock Powerful Business Insights with AI & Data
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our platform combines cutting-edge AI with comprehensive market
                data to give you the competitive edge.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                icon={<TrendingUp />}
                title="Real-Time Market Trends"
                description="Track industry shifts instantly with our AI-powered trend detection system."
              />
              <FeatureCard
                icon={<Users />}
                title="Competitor Analysis"
                description="Compare pricing, strategy, and market position of your top competitors."
              />
              <FeatureCard
                icon={<Database />}
                title="AI-Powered Insights"
                description="Get smart recommendations tailored specifically to your business needs."
              />
              <FeatureCard
                icon={<MessageSquare />}
                title="Customer Sentiment Analysis"
                description="Understand audience feedback from reviews & social media at scale."
              />
              <FeatureCard
                icon={<BarChart3 />}
                title="Interactive Dashboards"
                description="Visualize complex data with easy-to-read charts and interactive elements."
              />
              <FeatureCard
                icon={<Clock />}
                title="Automated Reports & Alerts"
                description="Receive customized updates and alerts directly in your inbox."
              />
            </div>

            <div className="flex justify-center mt-12">
              <Button size="lg" className="gap-2">
                Start Analyzing Now
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-24">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Get valuable market insights in just a few simple steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <StepCard
                number="1"
                title="Enter a Keyword or Business Name"
                description="Simply type what you want to research."
                icon={<Search className="h-8 w-8" />}
              />
              <StepCard
                number="2"
                title="Our AI Fetches & Analyzes Market Data"
                description="We process millions of data points in seconds."
                icon={<Database className="h-8 w-8" />}
              />
              <StepCard
                number="3"
                title="Get Insights & Visual Reports Instantly"
                description="View comprehensive analysis in an easy-to-understand format."
                icon={<PieChart className="h-8 w-8" />}
              />
              <StepCard
                number="4"
                title="Make Smarter Business Decisions"
                description="Use data-backed insights to guide your strategy."
                icon={<LineChart className="h-8 w-8" />}
              />
            </div>

            <div className="flex justify-center mt-12">
              <Button size="lg" className="gap-2">
                Try It Now – No Signup Required
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="bg-muted/50 py-24">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Trusted by Entrepreneurs, Startups, and Marketers
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See what our users are saying about MarketInsight AI
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TestimonialCard
                quote="This tool helped me discover a trending product before my competitors!"
                author="Sarah Johnson"
                role="E-commerce Entrepreneur"
              />
              <TestimonialCard
                quote="Saved me hours of manual research with automated insights. The competitor analysis feature is a game-changer."
                author="Michael Chen"
                role="Marketing Director"
              />
              <TestimonialCard
                quote="The sentiment analysis helped us pivot our product strategy based on real customer feedback."
                author="Jessica Williams"
                role="Product Manager"
              />
            </div>

            <div className="mt-16">
              <h3 className="text-center text-lg font-medium mb-8">
                Trusted by innovative companies
              </h3>
              <div className="flex flex-wrap justify-center gap-8 opacity-70">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-8 w-32 bg-muted rounded-md"></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the plan that fits your research needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <PricingCard
                title="Free"
                price="$0"
                description="Perfect for trying out the platform"
                features={[
                  "5 searches per day",
                  "Basic trend analysis",
                  "Limited competitor insights",
                  "7-day data history",
                  "Email support",
                ]}
                buttonText="Get Started"
                buttonVariant="outline"
              />
              <PricingCard
                title="Pro"
                price="$49"
                period="/month"
                description="For growing businesses and marketers"
                features={[
                  "50 searches per day",
                  "Advanced trend analysis",
                  "Full competitor insights",
                  "30-day data history",
                  "Custom alerts",
                  "Priority support",
                ]}
                buttonText="Start Pro Plan"
                buttonVariant="default"
                highlighted={true}
              />
              <PricingCard
                title="Enterprise"
                price="$199"
                period="/month"
                description="For teams and large organizations"
                features={[
                  "Unlimited searches",
                  "Real-time trend monitoring",
                  "Advanced competitor tracking",
                  "Unlimited data history",
                  "Custom integrations",
                  "Dedicated account manager",
                  "API access",
                ]}
                buttonText="Contact Sales"
                buttonVariant="outline"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="bg-muted/50 py-24">
          <div className="container space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Find answers to common questions about MarketInsight AI
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    What kind of insights can I get?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our platform provides market trends, competitor analysis,
                    customer sentiment, pricing strategies, keyword performance,
                    and growth opportunities. You can customize the insights
                    based on your specific industry and business needs.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>How accurate is the data?</AccordionTrigger>
                  <AccordionContent>
                    We source data from multiple reliable providers and use
                    advanced AI algorithms to ensure accuracy. Our platform
                    continuously learns and improves its analysis methods. We
                    maintain a 95%+ accuracy rate for market trends and
                    competitor insights.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Can I integrate with other tools?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes! MarketInsight AI offers integrations with popular tools
                    like Google Analytics, Shopify, HubSpot, Salesforce, and
                    more. We also provide API access for custom integrations on
                    our Enterprise plan.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    How often is the data updated?
                  </AccordionTrigger>
                  <AccordionContent>
                    Free and Pro plans receive daily data updates. Enterprise
                    users get real-time data monitoring and updates. Historical
                    data is stored according to your plan limits.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    Do you offer custom solutions?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our Enterprise plan includes customization options. We can
                    tailor our platform to your specific industry, business
                    size, and research needs. Contact our sales team to discuss
                    your requirements.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-primary text-primary-foreground">
          <div className="container text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Turn Data into Business Growth – Start Today!
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Join thousands of businesses making smarter decisions with
              MarketInsight AI
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary" className="gap-2">
                Sign Up for Free
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground gap-2"
              >
                Book a Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-12 bg-background">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span>MarketInsight AI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered market research for smarter business decisions.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  API
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Integrations
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Guides
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 MarketInsight AI. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6 space-y-4">
        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

function StepCard({ number, title, description, icon }) {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      <div className="relative">
        <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
          {number}
        </div>
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function TestimonialCard({ quote, author, role }) {
  return (
    <Card>
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-yellow-500"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>
        <p className="italic">"{quote}"</p>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function PricingCard({
  title,
  price,
  period = "",
  description,
  features,
  buttonText,
  buttonVariant = "default",
  highlighted = false,
}) {
  return (
    <Card
      className={`overflow-hidden ${
        highlighted ? "border-primary shadow-lg relative" : ""
      }`}
    >
      {highlighted && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-b-md">
          Most Popular
        </div>
      )}
      <CardContent className={`p-6 space-y-6 ${highlighted ? "pt-10" : ""}`}>
        <div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-muted-foreground text-sm mt-1">{description}</p>
        </div>
        <div className="flex items-baseline">
          <span className="text-3xl font-bold">{price}</span>
          {period && (
            <span className="text-muted-foreground ml-1">{period}</span>
          )}
        </div>
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <Button variant={buttonVariant} className="w-full">
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  );
}
