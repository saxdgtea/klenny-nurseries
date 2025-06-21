import { notFound } from "next/navigation";
import Image from "next/image";
import { services } from "../../../../lib/services";

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) return notFound();

  return (
    <div className="bg-green-50 min-h-screen">
      <main className="pt-24 pb-20 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-green-800 mb-6">
          {service.title}
        </h1>
        <Image
          src={service.image}
          alt={service.title}
          width={800}
          height={400}
          className="rounded-xl mb-6 object-cover w-full h-auto"
        />
        <p className="text-lg text-gray-700 whitespace-pre-line">
          {service.content}
        </p>
      </main>
    </div>
  );
}
