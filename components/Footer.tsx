export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="container flex flex-col justify-between gap-4 text-xs text-slate-600 sm:flex-row">
        <p>© {new Date().getFullYear()} Hussein Salman.</p>

        <p>
          Backend · AI · Automation
        </p>
      </div>
    </footer>
  );
}