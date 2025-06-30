"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTasksDispatch } from "@/contexts/TaskContext";
import { Tarefa } from "@/types/tarefa";

interface TaskFormProps {
  tarefaToEdit?: Tarefa;
}

export default function TaskForm({ tarefaToEdit }: TaskFormProps) {
  const [titulo, setTitulo] = useState(tarefaToEdit?.titulo || "");
  const [descricao, setDescricao] = useState(tarefaToEdit?.descricao || "");
  const dispatch = useTasksDispatch();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tarefaToEdit) {
      // Editar
      dispatch({
        type: "changed",
        tarefa: {
          ...tarefaToEdit,
          titulo,
          descricao,
        },
      });
    } else {
      // Adicionar
      dispatch({
        type: "added",
        id: crypto.randomUUID(),
        titulo,
        descricao,
      });
    }
    router.push("/tarefas");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto p-8">
      <div>
        <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">
          Título
        </label>
        <input
          type="text"
          id="titulo"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">
          Descrição
        </label>
        <textarea
          id="descricao"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {tarefaToEdit ? "Salvar Alterações" : "Adicionar Tarefa"}
      </button>
    </form>
  );
}
