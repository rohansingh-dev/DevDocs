import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { NewsDetail } from "@/components/news-detail";
import { getNewsById } from "@/lib/news";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface NewsDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: NewsDetailPageProps): Promise<Metadata> {
  const { id } = await params; // Await `params` here
  const article = await getNewsById(id);

  if (!article) {
    return {
      title: "Article Not Found - NewsHub",
      description: "The requested article could not be found",
    };
  }

  return {
    title: `${article.title} - NewsHub`,
    description: article.description || "Read the full article on NewsHub",
    openGraph: {
      title: article.title,
      description: article.description || "Read the full article on NewsHub",
      images: article.image_url ? [{ url: article.image_url }] : [],
    },
  };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { id } = await params; // Await `params` here
  const article = await getNewsById(id);

  if (!article) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex-1">
        <NewsDetail article={article} />
      </div>
      <Footer />
    </main>
  );
}