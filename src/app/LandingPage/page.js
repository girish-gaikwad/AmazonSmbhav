"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  FileText,
  Clock,
  Shield,
  Rocket,
  DollarSign,
  Phone,
  Mail,
  MessageSquare,
  ChevronDown,
  Award,
  Users,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function LandingPage() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState(null);

  const documents = [
    "PAN Card",
    "Bank Account Number",
    "Aadhaar Card/Business Registration Certificate",
    "HS Code",
    "IEC Code",
    "GST Registration Certificate",
    "RCMC",
    "AD Code",
    "Export Agreement/Proforma Invoice",
    "Letter of Credit or Payment Terms Agreement",
    "Commercial Invoice",
    "Packing List",
    "Certificate of Inspection/Quality Certificate",
    "Phytosanitary and Fumigation Certificate",
    "Certificate of Origin",
    "Marine Insurance Policy/Insurance Certificate",
    "Shipping Bill",
    "Bill of Lading (or Airway Bill)",
    "Let Export Order",
  ];
  const exportSteps = [
    {
      title: "Select Product and Target Country",
      description: "Identify your product's potential in international markets",
      icon: Globe,
    },
    {
      title: "Understand Compliance Requirements",
      description: "Navigate regulatory frameworks and certification needs",
      icon: Shield,
    },
    {
      title: "Prepare Documentation",
      description: "Complete all necessary export documentation accurately",
      icon: FileText,
    },
    {
      title: "Shipping and Logistics",
      description: "Coordinate efficient transportation and delivery",
      icon: Rocket,
    },
    {
      title: "Receive Payments",
      description: "Secure international transactions and payments",
      icon: DollarSign,
    },
  ];

  const stats = [
    { value: "10K+", label: "Successful Exports", icon: TrendingUp },
    { value: "50+", label: "Countries Reached", icon: Globe },
    { value: "98%", label: "Success Rate", icon: Award },
    { value: "5K+", label: "Happy Clients", icon: Users },
  ];

  const faqs = [
    {
      question: "What documents do I need to start exporting?",
      answer:
        "The essential documents include IEC Code, GST Registration, RCMC, and more. Our platform guides you through collecting all necessary documentation step by step.",
    },
    {
      question: "How long does the export process usually take?",
      answer:
        "The timeline varies depending on the destination country and product type. Typically, the entire process from documentation to shipping takes 4-6 weeks.",
    },
    {
      question: "Do you provide assistance with customs clearance?",
      answer:
        "Yes, we provide comprehensive support for customs clearance, including documentation preparation and liaison with customs authorities.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#18212f] text-white">
      {/* New Hero Section */}
      <motion.section
        className="min-h-screen relative flex flex-col items-center justify-center px-4 py-20 overflow-hidden"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/api/placeholder/video" type="video/mp4" />
        </video>

        <motion.div
          className="relative z-10 max-w-6xl mx-auto text-center"
          variants={fadeIn}
        >
          <motion.div
            className="inline-block px-6 py-2 mb-8 rounded-full bg-blue-500/20 text-blue-400"
            variants={fadeIn}
          >
            Revolutionizing Global Trade
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 inline-block text-transparent bg-clip-text"
            variants={fadeIn}
          >
            Export Without Borders
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12"
            variants={fadeIn}
          >
            Transform your business into a global enterprise with our
            comprehensive export management platform
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" >
            <motion.button
              className="px-8 py-4 bg-blue-600 rounded-full text-xl font-semibold hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              >
              Get Started
            </motion.button>
              </Link>
            <motion.button
              className="px-8 py-4 bg-transparent border-2 border-white/20 rounded-full text-xl font-semibold hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsVideoPlaying(true)}
            >
              Watch Demo
            </motion.button>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="relative z-10 mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
          variants={fadeIn}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <stat.icon className="w-8 h-8 text-blue-400" />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className="py-20 bg-[#18212f]" variants={staggerChildren}>
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            variants={fadeIn}
          >
            Your Path to Export Success
          </motion.h2>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-blue-500/20 -translate-y-1/2 hidden lg:block" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {exportSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative bg-[#192130] p-6 rounded-xl border border-gray-700"
                  variants={fadeIn}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold z-10">
                    {index + 1}
                  </div>
                  <step.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="min-h-screen relative flex flex-col items-center justify-center px-4 py-20 overflow-hidden"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[#192130] opacity-50">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.1) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <motion.div
          className="relative z-10 max-w-6xl mx-auto text-center"
          variants={fadeIn}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 inline-block text-transparent bg-clip-text"
            variants={fadeIn}
          >
            Export Journey Quest
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
            variants={fadeIn}
          >
            Navigate through our step-by-step process that simplifies one of the
            most complex aspects of exporting - documentation gathering and
            compliance.
          </motion.p>

          <motion.button
            className="px-8 py-4 bg-blue-600 rounded-full text-xl font-semibold hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey
          </motion.button>
        </motion.div>

        {/* Floating Cards Animation */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: i * 2,
                ease: "easeInOut",
              }}
              style={{
                left: `${30 + i * 25}%`,
                top: `${40 + i * 15}%`,
              }}
            >
              <div className="w-16 h-16 bg-blue-500/10 rounded-lg backdrop-blur-sm" />
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="py-20 bg-[#192130]"
        initial="initial"
        animate="animate"
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
            variants={fadeIn}
          >
            Documentation Journey Map
          </motion.h2>

          <div className="relative">
            {/* Connection lines */}
            <div className="absolute top-0 left-1/2 w-0.5 h-full bg-blue-500/20 hidden lg:block" />

            <div className="space-y-8">
              {documents.map((doc, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center gap-4 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex-col lg:justify-center`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Document Card */}
                  <motion.div
                    className={`relative bg-[#18212f] p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors w-full lg:w-1/3 ${
                      index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div
                      className={`flex items-center space-x-4 ${
                        index % 2 === 0
                          ? "lg:flex-row-reverse lg:space-x-reverse"
                          : "lg:flex-row"
                      }`}
                    >
                      <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <span className="text-gray-300 text-lg">{doc}</span>
                        <div className="text-sm text-gray-500 mt-1">
                          Step {index + 1}
                        </div>
                      </div>
                    </div>

                    {/* Connection arrow */}
                    {index !== documents.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 w-12">
                        <ArrowRight
                          className={`w-8 h-8 text-blue-400 ${
                            index % 2 === 0 ? "-right-16" : "-left-16"
                          } absolute`}
                        />
                      </div>
                    )}

                    {/* Timeline dot */}
                    <div
                      className="hidden lg:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-[#192130]"
                      style={{
                        [index % 2 === 0 ? "right" : "left"]: "-2rem",
                      }}
                    />
                  </motion.div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block w-1/3" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
      {/* FAQ Section */}
      <motion.section className="py-20 bg-[#192130]" variants={staggerChildren}>
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            variants={fadeIn}
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="border border-gray-700 rounded-lg overflow-hidden"
                variants={fadeIn}
              >
                <button
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5"
                  onClick={() =>
                    setSelectedFaq(selectedFaq === index ? null : index)
                  }
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      selectedFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {selectedFaq === index && (
                  <div className="p-6 pt-0 text-gray-400">{faq.answer}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section className="py-10 bg-[#192130]" variants={fadeIn}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Start Your Global Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Let us guide you through every step of your export journey
          </p>
          {/* <motion.button
                  className="px-8 py-4 bg-blue-600 rounded-full text-xl font-semibold hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us Today
                </motion.button> */}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section className="py-20 bg-[#18212f]" variants={staggerChildren}>
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            variants={fadeIn}
          >
            Get in Touch
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={fadeIn}>
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-blue-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <span>contact@exportjourney.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MessageSquare className="w-6 h-6 text-blue-400" />
                  <span>Live Chat Available 24/7</span>
                </div>
              </div>
            </motion.div>

            <motion.form className="space-y-6" variants={fadeIn}>
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 bg-[#192130] rounded-lg border border-gray-700 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 bg-[#192130] rounded-lg border border-gray-700 focus:border-blue-500 outline-none"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-4 bg-[#192130] rounded-lg border border-gray-700 focus:border-blue-500 outline-none"
                ></textarea>
              </div>
              <motion.button
                className="w-full px-8 py-4 bg-blue-600 rounded-lg text-xl font-semibold hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </motion.section>

      {/* Keep existing sections */}
      {/* ... */}
    </div>
  );
}
