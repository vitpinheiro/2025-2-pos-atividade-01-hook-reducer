"use client";

import { useTasks } from "@/contexts/TaskContext";
import { Tarefa } from "@/types/tarefa";
import Link from "next/link";

export default function TarefasPage() {
  const tarefas = useTasks();

  // Filtra tarefas válidas (exemplo: título não vazio)
  const tarefasValidas = tarefas.filter(
    (tarefa) => tarefa.titulo && tarefa.titulo.trim() !== ""
  );

  return (
    <div className="max-w-3xl mx-auto p-4"> {/* Largura reduzida, centralizada */}
      <h1 className="text-3xl font-bold mb-4 text-center">Lista de Tarefas</h1>
      <div className="space-y-4">
        {tarefasValidas.length > 0 ? (
          tarefasValidas.map((tarefa: Tarefa) => (
            <div
              key={tarefa.id}
              className="p-4 border rounded-lg shadow-sm flex justify-between items-center"
            >
              <div>
                <h2 className="text-xl font-semibold">{tarefa.titulo}</h2>
                <p>{tarefa.descricao}</p>
              </div>
              <div className="flex space-x-2">
                <Link
                  href={`/tarefas/${tarefa.id}`}
                  className="text-blue-500 hover:underline"
                >
                  Editar
                </Link>
                <Link
                  href={`/tarefas/${tarefa.id}/apagar`}
                  className="text-red-500 hover:underline"
                >
                  Apagar
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">
            Nenhuma tarefa encontrada.{" "}
            <Link href="/tarefas/nova" className="text-blue-500 hover:underline">
              Crie uma nova!
            </Link>
          </p>
        )}
      </div>
    </div>
  );
}
