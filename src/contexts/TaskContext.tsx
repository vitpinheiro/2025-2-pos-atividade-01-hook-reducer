"use client";

import { createContext, useContext, useReducer, useEffect, ReactNode } from "react";
import { ClientProviderWrapper } from "@/components/ClientProviderWrapper";
import { Tarefa } from "@/types/tarefa";
import { tarefasReducer, Action } from "@/lib/reducer";

const TaskContext = createContext<Tarefa[] | null>(null);
const TaskDispatchContext = createContext<React.Dispatch<Action> | null>(null);

const getInitialState = (): Tarefa[] => {
  if (typeof window !== "undefined") {
    const savedTasks = localStorage.getItem("tarefas");
    return savedTasks ? JSON.parse(savedTasks) : [];
  }
  return [];
};

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tarefas, dispatch] = useReducer(tarefasReducer, getInitialState());

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  return (
    <TaskContext.Provider value={tarefas}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (context === null) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
}

export function useTasksDispatch() {
  const context = useContext(TaskDispatchContext);
  if (context === null) {
    throw new Error("useTasksDispatch must be used within a TaskProvider");
  }
  return context;
}