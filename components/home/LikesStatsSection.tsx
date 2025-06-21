// src/components/home/LikesStatsSection.tsx

export const LikesStatsSection = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-800 mb-6">
          People Love What We Do
        </h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">
          Here’s a glimpse of the growing community that appreciates our
          services.
        </p>
        <div className="flex justify-center gap-10 text-green-800 text-2xl font-semibold">
          <div>
            👍 <span className="text-black">2,340</span> Blog Likes
          </div>
          <div>
            🌿 <span className="text-black">1,720</span> Service Likes
          </div>
          <div>
            💬 <span className="text-black">400+</span> Feedback Entries
          </div>
        </div>
      </div>
    </section>
  );
};
