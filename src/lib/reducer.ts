import { Tarefa } from "@/types/tarefa";

export type Action =
  | { type: "added"; id: string; titulo: string; descricao: string }
  | { type: "changed"; tarefa: Tarefa }
  | { type: "deleted"; id: string };

export function tarefasReducer(tarefas: Tarefa[], action: Action): Tarefa[] {
  switch (action.type) {
    case "added": {
      return [
        ...tarefas,
        {
          id: action.id,
          titulo: action.titulo,
          descricao: action.descricao,
          concluida: false,
        },
      ];
    }
    case "changed": {
      return tarefas.map((t) => {
        if (t.id === action.tarefa.id) {
          return action.tarefa;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tarefas.filter((t) => t.id !== action.id);
    }
    default: {
      throw new Error("Ação desconhecida");
    }
  }
}