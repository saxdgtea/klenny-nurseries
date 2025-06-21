// src/components/home/IntroSection.tsx

const IntroSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-6">
          Welcome to FarmLife
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          We are passionate about transforming your outdoor spaces into natural
          sanctuaries. From custom landscape design to thriving plant nurseries,
          our team brings beauty and function to every project.
        </p>
        <a
          href="/about"
          className="inline-block bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition duration-300"
        >
          Learn More About Us
        </a>
      </div>
    </section>
  );
};

export default IntroSection;
