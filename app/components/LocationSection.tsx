'use client';

import { slideIn, fadeIn } from '../utils/animations';
import AnimatedSection from './AnimatedSection';

export default function LocationSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedSection variants={fadeIn}>
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
            Visit Us
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <AnimatedSection variants={slideIn('left')} className="space-y-6">
            <h3 className="text-2xl font-semibold">Shri Venkatesa Vidash Hall</h3>
            <p className="text-gray-600">
              Located on State High Road, our venue is easily accessible and provides
              a perfect setting for your special events.
            </p>
            <div className="space-y-4">
              <p className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-coral-dark" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">Survey number 85, 3A, State High Road, opposite Bharat Petrol Bunk, Uthiramerur, Kumaravadi, Tamil Nadu 603107, India</span>
              </p>
              <p className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-coral-dark" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-gray-600">+91 98765 43210</span>
              </p>
              <p className="flex items-center space-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-coral-dark" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-gray-600">vidashgroupofcompanies@gmail.com</span>
              </p>
              <a 
                href="https://maps.app.goo.gl/sjS9JtTzC91GzWLt7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-coral-dark hover:text-coral-light transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l4 4V6a1 1 0 00-.293-.707z" clipRule="evenodd" />
                </svg>
                <span>Get Directions</span>
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection variants={slideIn('right')} className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.0647425775396!2d79.89994311534265!3d12.627046540219887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52c6ca86b89d45%3A0x3f8abe7c8acee4ef!2sShri%20Venkatesa%20Vidash%20Hall!5e0!3m2!1sen!2sin!4v1710425128431!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
} 