import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  formatPublishedDate,
  getArticleBySlug,
  getArticles,
} from "@/lib/articles";

type ArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-static";

export async function generateStaticParams() {
  const articles = await getArticles();

  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Artigo nao encontrado",
      description: "O artigo solicitado nao existe neste blog.",
    };
  }

  return {
    title: article.title,
    description: article.description,
    authors: [{ name: article.author }],
    alternates: {
      canonical: `/artigos/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.publishedAt,
      authors: [article.author],
      url: `/artigos/${article.slug}`,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="shell article-page">
      <Link href="/" className="article-back">
        Voltar para a pagina inicial
      </Link>

      <article className="article-wrapper">
        <span className="eyebrow">Artigo</span>
        <h1>{article.title}</h1>

        <div className="article-meta">
          <span>Por {article.author}</span>
          <span>{formatPublishedDate(article.publishedAt)}</span>
        </div>

        <div className="article-content">
          {article.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}