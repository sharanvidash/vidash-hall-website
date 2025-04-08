import Image from "next/image";
import LocationSection from "./components/LocationSection";
import GallerySection from "./components/GallerySection";
import Navbar from "./components/Navbar";

export default function Home() {
  const galleryImages = [
    { src: "/images/gallery1.jpg", alt: "Elegant Banquet Hall Setup" },
    { src: "/images/gallery2.jpg", alt: "Banquet Hall Interior" },
    { src: "/images/gallery3.jpg", alt: "Event Space" },
    { src: "/images/gallery4.jpg", alt: "Dining Area" },
    { src: "/images/gallery5.jpg", alt: "Hall Decoration" },
    { src: "/images/gallery6.jpg", alt: "Event Setup" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="relative h-[80vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="Banquet Hall Interior"
            fill
            className="object-cover"
            priority
            quality={75}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkLzYxMC8vMTQ3PEFGODhNPTQ3SWBJTlRWVFZCX2JfYU5pbm5e/9sAQwEVFxceHh4tISEtXk4+Tl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5eXl5e/8AAEQgAIAAgAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A8VooooAKKKKACiiigAooooA//9k="
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40 z-10"></div>
        </div>
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Elegant Events & Celebrations
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Create Unforgettable Memories in Our Luxurious Banquet Hall
          </p>
          <button className="btn-primary px-8 py-3 rounded-lg text-lg font-semibold hover-scale">
            Book Now
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
            Our Amenities
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Spacious Venue",
                description: "Accommodate up to 500 guests in our elegant hall"
              },
              {
                title: "Modern Kitchen",
                description: "State-of-the-art catering facilities for your events"
              },
              {
                title: "Premium Services",
                description: "Professional event planning and coordination"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover-scale">
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--primary-coral)' }}>
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery">
        <GallerySection />
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gradient">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Weddings",
                description: "Make your special day truly memorable in our elegant venue"
              },
              {
                title: "Corporate Events",
                description: "Professional setting for your business gatherings"
              },
              {
                title: "Social Celebrations",
                description: "Perfect for birthdays, anniversaries, and special occasions"
              },
              {
                title: "Cultural Events",
                description: "Spacious venue for cultural programs and celebrations"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover-scale">
                <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--primary-coral)' }}>
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location">
        <LocationSection />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li className="hover:text-coral-light cursor-pointer">Home</li>
                <li className="hover:text-coral-light cursor-pointer">About Us</li>
                <li className="hover:text-coral-light cursor-pointer">Services</li>
                <li className="hover:text-coral-light cursor-pointer">Gallery</li>
                <li className="hover:text-coral-light cursor-pointer">Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2">
                <li>Phone: (XXX) XXX-XXXX</li>
                <li>Email: info@yourbanquethall.com</li>
                <li>Address: Your Address Here</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <ul className="space-y-2">
                <li>Monday - Sunday</li>
                <li>10:00 AM - 10:00 PM</li>
                <li>Events by appointment</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p>&copy; 2024 Your Banquet Hall. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
