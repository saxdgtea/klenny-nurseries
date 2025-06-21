// src/components/home/TeamSection.tsx
import { Fade } from "react-awesome-reveal";
const team = [
  { name: "Jane M.", role: "Lead Designer", img: "/team1.jpeg" },
  { name: "Kip L.", role: "Nursery Expert", img: "/team2.jpeg" },
  { name: "Mwangi P.", role: "Field Operations", img: "/team3.jpg" },
];

export const TeamSection = () => {
  return (
    <section className="bg-green-50 py-16 px-4">
      <Fade direction="up" delay={100} triggerOnce cascade>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-10">
            Meet the Team
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover mb-4 border-4 border-green-700"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-green-700">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </Fade>
    </section>
  );
};
