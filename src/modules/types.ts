export type task = { id: string; description: string; due: string };
export type list = {
  name: string;
  tasks: task[];
} | null;
