'use client';

export default function FooterSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', section: 'hero' },
                { name: 'Features', section: 'features' },
                { name: 'Gallery', section: 'gallery' },
                { name: 'Services', section: 'services' },
                { name: 'Location', section: 'location' },
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => scrollToSection(item.section)}
                    className="hover:text-coral-light cursor-pointer"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li>Phone: +91 98765 43210</li>
              <li>Email: vidashgroupofcompanies@gmail.com</li>
              <li className="leading-relaxed">
                Survey number 85, 3A, State High Road,<br />
                opposite Bharat Petrol Bunk,<br />
                Uthiramerur, Kumaravadi,<br />
                Tamil Nadu 603107, India
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-2">
              <li>Monday - Sunday</li>
              <li>Open 24 Hours</li>
              <li>Available for events by appointment</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; 2024 Shri Venkatesa Vidash Hall. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 