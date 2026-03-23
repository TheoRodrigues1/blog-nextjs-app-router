import Link from "next/link";

export default function NotFound() {
  return (
    <main className="shell article-page">
      <div className="article-wrapper">
        <span className="eyebrow">404</span>
        <h1>Artigo nao encontrado</h1>
        <p>O slug informado nao corresponde a nenhum conteudo disponivel.</p>
        <Link href="/" className="article-back">
          Voltar para a home
        </Link>
      </div>
    </main>
  );
}