import { notFound } from "next/navigation";
import Image from "next/image";
import { blogPosts } from "../../../../lib/blogs"; // ✅ Adjust path if necessary

// ✅ Static params generator for SSG
export async function generateStaticParams() {
  return blogPosts.map((blog) => ({
    slug: blog.slug,
  }));
}

// ✅ Component receives a type-safe params prop
export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = blogPosts.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  return (
    <div className="bg-green-50 min-h-screen">
      <main className="pt-24 pb-20 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-green-800 mb-4">{blog.title}</h1>
        <p className="text-sm text-gray-500 mb-2">Category: {blog.category}</p>

        {/* ✅ Next.js Image Component */}
        <div className="relative w-full h-[400px] mb-6 rounded-lg overflow-hidden">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="text-gray-700 whitespace-pre-line text-base leading-relaxed">
          {blog.content}
        </div>
      </main>
    </div>
  );
}
