export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-5">
      <h2 className="text-xl font-bold">
        Sri Lanka Law AI
      </h2>

      <button className="mt-6 w-full rounded-lg bg-white/10 px-4 py-3 text-left hover:bg-white/20">
        + New Chat
      </button>

      <div className="mt-8 text-sm text-slate-300">
        Chat History
      </div>

    </aside>
  );
}