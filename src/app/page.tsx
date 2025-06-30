export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50 text-gray-900">
      <main className="flex-grow p-8 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-4">Bem-vindo ao Gestor de Tarefas</h1>
        <h2 className="text-xl font-medium mb-6 text-gray-700">
          Organize seu dia com eficiência e produtividade
        </h2>
        <p className="mb-8 max-w-xl mx-auto text-gray-600">
          Crie, edite e acompanhe suas tarefas diárias de forma simples e prática. Seu aliado perfeito para manter o foco!
        </p>

        {/* Ícone SVG de checklist */}
        <svg
          className="mx-auto mb-8 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          width={120}
          height={120}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </main>
      <footer className="bg-gray-100 text-gray-600 p-4 text-center text-sm">
        <p>Desenvolvido por Vitória Pinheiro</p>

      </footer>
    </div>
  );
}
