import Link from "next/link";

export default function Header() {
  return (
    <header className="p-6 bg-white shadow-md flex justify-between items-center border-b border-gray-200">
      <Link
        href="/"
        className="text-2xl font-extrabold text-blue-500 hover:text-blue-700 transition-colors"
      >
        Gestor de Tarefas
      </Link>
      <nav>
        <Link
          href="/tarefas"
          className="mr-6 text-gray-700 hover:text-blue-500 transition-colors font-semibold"
        >
          Ver Tarefas
        </Link>
        <Link
          href="/tarefas/nova"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-5 rounded-lg shadow-md transition-colors"
        >
          Nova Tarefa
        </Link>
      </nav>
    </header>
  );
}
