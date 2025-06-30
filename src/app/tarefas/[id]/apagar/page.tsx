"use client";

import { useParams, useRouter } from "next/navigation";
import { useTasks, useTasksDispatch } from "@/contexts/TaskContext";
import { Tarefa } from "@/types/tarefa";

export default function ApagarTarefaPage() {
  const params = useParams();
  const id = params.id as string;
  const tarefas = useTasks();
  const dispatch = useTasksDispatch();
  const router = useRouter();

  const tarefa = tarefas.find((t: Tarefa) => t.id === id);

  if (!tarefa) {
    return <p>Tarefa não encontrada.</p>;
  }

  const handleDelete = () => {
    dispatch({ type: "deleted", id: tarefa.id });
    router.push("/tarefas");
  };

  return (
    <div className="max-w-lg mx-auto p-8 border rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center">Apagar Tarefa</h1>
      <p className="mb-4">
        Você tem certeza que deseja apagar a tarefa: <strong>{tarefa.titulo}</strong>?
      </p>
      <p className="mb-6 bg-gray-100 p-4 rounded">{tarefa.descricao}</p>
      <div className="flex justify-between">
        <button
          onClick={() => router.back()}
          className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          Cancelar
        </button>
        <button
          onClick={handleDelete}
          className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700"
        >
          Confirmar e Apagar
        </button>
      </div>
    </div>
  );
}