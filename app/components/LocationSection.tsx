import React from 'react';

const LocationSection = () => {
  // The embed URL for the Google Maps iframe
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3d!2m3!1f0!2f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM!5e0!3m2!1sen!2sus!4v1234567890!5m2!1sen!2sus";

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: 'var(--primary-purple)' }}>
          Visit Our Banquet Hall
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Map Section */}
          <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--primary-coral)' }}>
                  Location
                </h3>
                <p className="text-gray-700">
                  Please provide your banquet hall name and address - I'll update this section with your specific details.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--primary-coral)' }}>
                  Contact Us
                </h3>
                <p className="text-gray-700">
                  Would you like me to add your contact details here? Please provide:<br />
                  - Phone number<br />
                  - Email address<br />
                  - Any other contact methods
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--primary-coral)' }}>
                  Business Hours
                </h3>
                <p className="text-gray-700">
                  Please confirm your operating hours and I'll update this section accordingly.
                </p>
              </div>

              <a
                href="https://maps.app.goo.gl/FpGYJEPKJo7nTTqN7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 rounded-lg text-white transition-colors duration-200 hover:opacity-90"
                style={{ backgroundColor: 'var(--primary-purple)' }}
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection; 