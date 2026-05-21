export default function Footer() {
  return (
    <footer className="border-ink/10 border-t px-6 py-12 sm:px-10">
      <div className="text-ink/60 mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-[10px] uppercase tracking-[0.28em] sm:flex-row">
        <p>© {new Date().getFullYear()} Emilia Lima</p>
        <p>Montevideo · Berlin</p>
      </div>
    </footer>
  );
}
