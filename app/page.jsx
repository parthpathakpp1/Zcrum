import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  Layout,
  Calendar,
  BarChart,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CompanyCarousel from "@/components/company-carousel";
import Image from "next/image";

const faqs = [
  {
    question: "What is ZCRUM?",
    answer:
      "ZCRUM is a powerful project management tool designed to help teams organize, track, and manage their work efficiently. It combines intuitive design with robust features to streamline your workflow and boost productivity.",
  },
  {
    question: "How does ZCRUM compare to other project management tools?",
    answer:
      "ZCRUM offers a unique combination of intuitive design, powerful features, and flexibility. Unlike other tools, we focus on providing a seamless experience for both agile and traditional project management methodologies, making it versatile for various team structures and project types.",
  },
  {
    question: "Is ZCRUM suitable for small teams?",
    answer:
      "Absolutely! ZCRUM is designed to be scalable and flexible. It works great for small teams and can easily grow with your organization as it expands. Our user-friendly interface ensures that teams of any size can quickly adapt and start benefiting from ZCRUM's features.",
  },
  {
    question: "What key features does ZCRUM offer?",
    answer:
      "ZCRUM provides a range of powerful features including intuitive Kanban boards for visualizing workflow, robust sprint planning tools for agile teams, comprehensive reporting for data-driven decisions, customizable workflows, time tracking, and team collaboration tools. These features work seamlessly together to enhance your project management experience.",
  },
  {
    question: "Can ZCRUM handle multiple projects simultaneously?",
    answer:
      "Yes, ZCRUM is built to manage multiple projects concurrently. You can easily switch between projects, and get a bird's-eye view of all your ongoing work. This makes ZCRUM ideal for organizations juggling multiple projects or clients.",
  },
  {
    question: "Is there a learning curve for new users?",
    answer:
      "While ZCRUM is packed with features, we've designed it with user-friendliness in mind. New users can quickly get up to speed thanks to our intuitive interface, helpful onboarding process, and comprehensive documentation.",
  },
];

const features = [
  {
    title: "Intuitive Kanban Boards",
    description:
      "Visualize your workflow and optimize team productivity with our easy-to-use Kanban boards.",
    icon: Layout,
  },
  {
    title: "Powerful Sprint Planning",
    description:
      "Plan and manage sprints effectively, ensuring your team stays focused on delivering value.",
    icon: Calendar,
  },
  {
    title: "Comprehensive Reporting",
    description:
      "Gain insights into your team's performance with detailed, customizable reports and analytics.",
    icon: BarChart,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-dotted-background"></div>

      {/* Hero Section */}
      <section className="relative container mx-auto py-32 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold gradient-title pb-6 flex flex-col relative">
          <span className="leading-tight">Streamline Your Workflow</span>
          <span className="flex mx-auto gap-3 sm:gap-4 items-center">
            with
            <Image
              src="/logo2.png"
              alt="Zscrum Logo"
              width={400}
              height={80}
              className="h-14 sm:h-24 w-auto object-contain hover:scale-105 transition-transform"
            />
          </span>
        </h1>
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          Empower your team with our intuitive project management solution.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/onboarding">
            <Button size="lg" className="group relative overflow-hidden">
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-blue-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-200"></div>
              <ChevronRight size={18} className="ml-1 relative z-10" />
            </Button>
          </Link>
          <Link href="#features">
            <Button size="lg" variant="outline" className="hover:bg-gray-800 transition-colors">
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-24 px-5">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold mb-16 text-center gradient-title">
            Powerful Features for Modern Teams
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:scale-105 transition-all duration-300 bg-gray-800/50 backdrop-blur-sm border-gray-700">
                <CardContent className="p-8">
                  <feature.icon className="h-12 w-12 mb-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  <h4 className="text-2xl font-semibold mb-4 text-gray-100">
                    {feature.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent"></div>
        <div className="container mx-auto relative">
          <h3 className="text-4xl font-bold mb-16 text-center gradient-title">
            Trusted by Industry Leaders
          </h3>
          <CompanyCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-5 relative">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-bold mb-16 text-center gradient-title">
            Frequently Asked Questions
          </h3>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-700/50 transition-colors rounded-t-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 text-center px-5 relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="container mx-auto relative">
          <h3 className="text-4xl font-bold mb-8 gradient-title">
            Ready to Transform Your Workflow?
          </h3>
          <p className="text-xl mb-12 text-gray-300 max-w-2xl mx-auto">
            Join thousands of teams already using ZCRUM to streamline their
            projects and boost productivity.
          </p>
          <Link href="/onboarding">
            <Button
              size="lg"
              className="group relative overflow-hidden hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center">
                Start For Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-blue-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-200"></div>
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}