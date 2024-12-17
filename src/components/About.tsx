import React from 'react';
import { Smartphone, Shield, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 dark:text-white">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I'm a dedicated iOS Developer with over 3 years of experience in  crafting and maintaining high-performance iOS applications. 
              Proficient in Swift, Xcode, and UIKit, with a strong grasp of SwiftUI and RxSwift for efficient asynchronous task handling. 
              Skilled in front-end development, Restful API integration, and collaborating with cross-functional teams to optimize application performance. 
              Adept at implementing new features, ensuring seamless communication between front-end and back-end, and enhancing user experience.
            </p>
            {/* <p className="text-lg text-gray-600 dark:text-gray-300">
              When I'm not coding, I'm exploring the latest Apple frameworks, contributing to the iOS 
              developer community, and staying up-to-date with the newest mobile development trends.
            </p> */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Smartphone className="mx-auto mb-2 dark:text-gray-300" />
                <h3 className="font-semibold dark:text-white">Native iOS</h3>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Shield className="mx-auto mb-2 dark:text-gray-300" />
                <h3 className="font-semibold dark:text-white">Security</h3>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Zap className="mx-auto mb-2 dark:text-gray-300" />
                <h3 className="font-semibold dark:text-white">Performance</h3>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80"
              alt="iOS Development Setup"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}