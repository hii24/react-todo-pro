export type Priority = "low" | "medium" | "high";

export interface Todo {
  id: string;
  title: string;
  done: boolean;
  priority: Priority;
  tags: string[];
  dueDate: string | null;
  createdAt: string;
  updatedAt: string;
}

export const PRIORITY_WEIGHT: Record<Priority, number> = {
  high: 3,
  medium: 2,
  low: 1,
};
