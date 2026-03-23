import { readFile } from "node:fs/promises";
import path from "node:path";

export type Article = {
  slug: string;
  title: string;
  description: string;
  author: string;
  publishedAt: string;
  content: string[];
};

const articlesFilePath = path.join(process.cwd(), "data", "artigos.json");

export async function getArticles(): Promise<Article[]> {
  const file = await readFile(articlesFilePath, "utf-8");
  const articles = JSON.parse(file) as Article[];

  return articles.sort((left, right) => {
    return (
      new Date(right.publishedAt).getTime() - new Date(left.publishedAt).getTime()
    );
  });
}

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  const articles = await getArticles();

  return articles.find((article) => article.slug === slug);
}

export function formatPublishedDate(date: string) {
  return new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}