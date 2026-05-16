export type TaskStatus = 'Todo' | 'In Progress' | 'Review' | 'Done';
export type TaskPriority = 'Low' | 'Medium' | 'High';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

// Iyi niyo yari ibuzemo yateraga ikosa muli mockData.ts
export interface DevTask {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
  assignedTo?: TeamMember[]; // Twabigize array ngo bijyane neza na mockData
  projectId: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  category: 'Frontend' | 'Backend' | 'Fullstack' | 'DevOps';
  progress: number;
  tasksCount: {
    total: number;
    completed: number;
  };
}
