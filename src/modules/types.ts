export type task = { id: string; description: string; due: string };
export type plan = {
  name: string;
  color: string;
  tasks: task[];
} | null;
