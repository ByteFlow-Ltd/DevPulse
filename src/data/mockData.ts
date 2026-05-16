// 1. Gushyiraho amoko yose directly muli iyi fayilo
export type TaskStatus = 'Todo' | 'In Progress' | 'Review' | 'Done';
export type TaskPriority = 'Low' | 'Medium' | 'High';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface DevTask {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
  assignedTo?: TeamMember[];
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

// 2. Amakuru y'igerageza (Mock Data)
export const mockMembers: TeamMember[] = [
  { id: 'm1', name: 'Keza Alpha', role: 'Frontend Lead', avatar: 'https://unsplash.com' },
  { id: 'm2', name: 'Shema Kevin', role: 'Backend Engineer', avatar: 'https://unsplash.com' },
  { id: 'm3', name: 'Mugisha Eric', role: 'DevOps Specialist', avatar: 'https://unsplash.com' }
];

export const mockProjects: Project[] = [
  {
    id: 'p1',
    name: 'DevPulse Core SaaS',
    description: 'Building the next-gen agile management platform for developer workflow.',
    category: 'Fullstack',
    progress: 45,
    tasksCount: { total: 12, completed: 5 }
  },
  {
    id: 'p2',
    name: 'API Gateway Security',
    description: 'Implementing OAuth2 protocols and rate-limiting middleware.',
    category: 'Backend',
    progress: 80,
    tasksCount: { total: 5, completed: 4 }
  }
];

export const mockTasks: DevTask[] = [
  {
    id: 't1',
    title: 'Setup TypeScript Config',
    description: 'Configure strict compiler rules and environment aliases.',
    status: 'Done',
    priority: 'High',
    dueDate: '2026-05-20',
    assignedTo: mockMembers,
    projectId: 'p1'
  },
  {
    id: 't2',
    title: 'Implement Redux Workspace Sync',
    description: 'Architect global slice structure for instant workspace data reload.',
    status: 'In Progress',
    priority: 'High',
    dueDate: '2026-05-25',
    assignedTo: mockMembers,
    projectId: 'p1'
  },
  {
    id: 't3',
    title: 'Dockerize Gateway Services',
    description: 'Create optimized multi-stage production build workflows.',
    status: 'Todo',
    priority: 'Medium',
    dueDate: '2026-06-02',
    assignedTo: mockMembers,
    projectId: 'p2'
  }
];
