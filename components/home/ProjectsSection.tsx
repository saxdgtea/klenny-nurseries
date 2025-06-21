// src/components/home/ProjectsSection.tsx
import { ScrollReveal } from "../common/ScrollReveal";

export const ProjectsSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <ScrollReveal className="text-lg" direction="left">
        <h1>Hi there!</h1>

        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-green-800 text-center mb-12">
            Our Projects & Experience
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-green-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url('/project${i}.jpg')` }}
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">
                    Project #{i}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    A showcase of our recent transformation in a client’s
                    backyard paradise.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
