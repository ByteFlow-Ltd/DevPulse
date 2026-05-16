import React, { useState } from 'react';
import { Columns, Clock, Layers, GitPullRequest, ShieldCheck } from 'lucide-react';
import { mockTasks } from '../data/mockData';
import '../styles/Kanban.css';

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

const KanbanBoard: React.FC = () => {
  const [tasks, setTasks] = useState<DevTask[]>(mockTasks as any);
  const columns: TaskStatus[] = ['Todo', 'In Progress', 'Review', 'Done'];

  const handleDragStart = (e: React.DragEvent, taskId: string) => {
    e.dataTransfer.setData('text/plain', taskId);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, targetStatus: TaskStatus) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('text/plain');
    
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === taskId ? { ...task, status: targetStatus } : task
      )
    );
  };

  const getPriorityClass = (priority: string) => {
    switch (priority) {
      case 'High': return 'prio-high';
      case 'Medium': return 'prio-medium';
      default: return 'prio-low';
    }
  };

  return (
    <div className="dp-kanban-view">
      
      {/* ADVANCED SPRINT METRICS BAR (NEW COMPLEX FEATURES) */}
      <div className="kanban-sprint-overview">
        <div className="sprint-meta-box">
          <Layers size={16} className="text-purple" />
          <div>
            <h4>Sprint Cycle #04</h4>
            <span>Status: <strong className="text-pink">Active Alpha</strong></span>
          </div>
        </div>
        <div className="sprint-counter-card">
          <div className="s-mini-stat">
            <span>Todo</span>
            <strong>{tasks.filter(t => t.status === 'Todo').length}</strong>
          </div>
          <div className="s-mini-stat">
            <span>In Flight</span>
            <strong className="text-purple">{tasks.filter(t => t.status === 'In Progress').length}</strong>
          </div>
          <div className="s-mini-stat">
            <span>In Review</span>
            <strong className="text-pink">{tasks.filter(t => t.status === 'Review').length}</strong>
          </div>
          <div className="s-mini-stat">
            <span>Merged</span>
            <strong className="text-success">{tasks.filter(t => t.status === 'Done').length}</strong>
          </div>
        </div>
      </div>

      {/* THE RESPONSIVE KANBAN GRID */}
      <div className="kanban-grid">
        {columns.map(column => {
          const columnTasks = tasks.filter(t => t.status === column);

          return (
            <div 
              key={column} 
              className="kanban-column"
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, column)}
            >
              <div className="column-header">
                <div className="column-header-left">
                  <div className={`status-dot-indicator ${column.toLowerCase().replace(' ', '-')}`}></div>
                  <h3>{column}</h3>
                </div>
                <span className="task-counter-pill">{columnTasks.length}</span>
              </div>

              <div className="tasks-drop-zone">
                {columnTasks.length === 0 ? (
                  <div className="empty-zone-placeholder">
                    <span>No threads active</span>
                  </div>
                ) : (
                  columnTasks.map(task => (
                    <div
                      key={task.id}
                      className="task-draggable-card"
                      draggable
                      onDragStart={(e) => handleDragStart(e, task.id)}
                    >
                      <div className="task-card-tags">
                        <span className={`prio-badge ${getPriorityClass(task.priority)}`}>
                          {task.priority}
                        </span>
                        <span className="project-id-tag">
                          <GitPullRequest size={10} /> {task.projectId}
                        </span>
                      </div>

                      <h4>{task.title}</h4>
                      <p>{task.description}</p>

                      <div className="task-card-footer">
                        <div className="task-due-date">
                          <Clock size={12} />
                          <span>{task.dueDate}</span>
                        </div>
                        {task.status === 'Done' ? (
                          <div className="merged-indicator" title="Compiled Successfully">
                            <ShieldCheck size={14} className="text-success" />
                          </div>
                        ) : (
                          task.assignedTo && task.assignedTo.length > 0 && (
                            <div className="task-assignee">
                              <img src={(task.assignedTo as any).avatar} alt="Engineer" />
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default KanbanBoard;
