"use client";

import { useParams } from "next/navigation";
import TaskForm from "@/components/TaskForm";
import { useTasks } from "@/contexts/TaskContext";
import { Tarefa } from "@/types/tarefa";

export default function EditarTarefaPage() {
  const params = useParams();
  const id = params.id as string;
  const tarefas = useTasks();
  const tarefa = tarefas.find((t: Tarefa) => t.id === id);

  if (!tarefa) {
    return <p>Tarefa não encontrada.</p>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-center">Editar Tarefa</h1>
      <TaskForm tarefaToEdit={tarefa} />
    </div>
  );
}