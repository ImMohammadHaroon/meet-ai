"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const { data: session } = authClient.useSession();
  const router = useRouter();
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);

  useEffect(() => {
    if (session) {
      router.push("/main");
    }
  }, [session, router]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.95 },
  };

  if (session) {
    return (
      <div className="flex items-center justify-center h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-xl mb-4">Redirecting to dashboard...</p>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-green-500"></div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex flex-col">
      {/* Hero Section */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 md:py-32 max-w-7xl mx-auto w-full"
      >
        {/* Left Content */}
        <motion.div variants={itemVariants} className="w-full md:w-1/2 mb-12 md:mb-0">
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Connect and Collaborate <span className="text-green-600">Seamlessly</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg"
          >
            Experience the next generation of virtual meetings with AI-powered features that enhance productivity and engagement.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button 
                onClick={() => {
                  setIsSigningUp(true);
                  router.push("/sign-up");
                }} 
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-medium w-full sm:w-auto flex items-center justify-center gap-2"
                disabled={isSigningUp}
              >
                {isSigningUp ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Loading...</span>
                  </>
                ) : (
                  "Get Started"
                )}
              </Button>
            </motion.div>
            
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button 
                onClick={() => {
                  setIsSigningIn(true);
                  router.push("/sign-in");
                }} 
                className="bg-white hover:bg-gray-100 text-green-600 border border-green-600 px-8 py-3 rounded-lg text-lg font-medium w-full sm:w-auto flex items-center justify-center gap-2"
                disabled={isSigningIn}
              >
                {isSigningIn ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-green-600"></div>
                    <span>Loading...</span>
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Right Content - Illustration */}
        <motion.div 
          variants={itemVariants}
          className="w-full md:w-1/2 relative"
        >
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="relative z-10"
          >
            <div className="relative w-full h-[400px] bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <div className="text-white text-center p-8">
                  <div className="text-5xl font-bold mb-4">Meet AI</div>
                  <p className="text-xl">The future of virtual collaboration</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Floating Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -top-10 -right-10 w-24 h-24 bg-yellow-400 rounded-full blur-xl opacity-70 z-0"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500 rounded-full blur-xl opacity-70 z-0"
          />
        </motion.div>
      </motion.div>
      
      {/* Features Section */}
      <motion.section 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-white"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover how our platform transforms your virtual meetings</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[1, 2, 3].map((item) => (
              <motion.div 
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <div className="w-8 h-8 bg-green-600 rounded-md"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">Feature {item}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-green-600 to-emerald-700 text-white"
      >
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to transform your meetings?
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-green-100"
          >
            Join thousands of teams already using our platform to collaborate more effectively.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button 
                onClick={() => router.push("/sign-up")} 
                className="bg-white text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg text-lg font-medium"
              >
                Get Started Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">Meet AI</h3>
              <p>The future of virtual collaboration</p>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">About</a>
              <a href="#" className="hover:text-white transition-colors">Features</a>
              <a href="#" className="hover:text-white transition-colors">Pricing</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Meet AI. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
