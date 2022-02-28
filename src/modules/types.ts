export type task = { id: string; description: string; due: string };
export type list = {
  name: string;
  color: string;
  tasks: task[];
} | null;
