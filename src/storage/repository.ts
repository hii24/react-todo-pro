import { get, set, del } from "idb-keyval";
import type { Todo } from "../types/Todo.js";

const KEY = "todos.v1";

export async function loadTodos(): Promise<Todo[]> {
  try {
    const fromIdb = await get<Todo[]>(KEY);
    if (fromIdb) return fromIdb;
  } catch {
    // IDB unavailable (private mode etc.) — fall back to localStorage
  }

  const fromLs = window.localStorage.getItem(KEY);
  return fromLs ? (JSON.parse(fromLs) as Todo[]) : [];
}

export async function saveTodos(todos: Todo[]): Promise<void> {
  try {
    await set(KEY, todos);
  } catch {
    window.localStorage.setItem(KEY, JSON.stringify(todos));
  }
}

export async function clearTodos(): Promise<void> {
  await del(KEY).catch(() => undefined);
  window.localStorage.removeItem(KEY);
}
