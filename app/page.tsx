import Link from "next/link";
import { formatPublishedDate, getArticles } from "@/lib/articles";

export const dynamic = "force-static";

export default async function HomePage() {
  const articles = await getArticles();

  return (
    <main className="shell">
      <section className="hero">
        <span className="eyebrow">Blog editorial com Next.js</span>
        <h1>Artigos com rotas reais e SEO por pagina.</h1>
        <p>
          Exemplo de blog com App Router, carregamento server-side via JSON local,
          paginas estaticas por slug e metadados dinamicos para cada artigo.
        </p>
      </section>

      {articles.length > 0 ? (
        <section className="articles-grid" aria-label="Lista de artigos">
          {articles.map((article) => (
            <article key={article.slug} className="article-card">
              <div className="article-meta">
                <span>{article.author}</span>
                <span>{formatPublishedDate(article.publishedAt)}</span>
              </div>

              <h2>{article.title}</h2>
              <p>{article.description}</p>

              <Link href={`/artigos/${article.slug}`} className="article-link">
                Ler artigo
              </Link>
            </article>
          ))}
        </section>
      ) : (
        <section className="empty-state">
          <p>Nenhum artigo encontrado.</p>
        </section>
      )}
    </main>
  );
}