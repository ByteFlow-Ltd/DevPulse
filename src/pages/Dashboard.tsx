import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Cpu, Terminal, Activity, Flame, ArrowUpRight, Code2, 
  GitBranch, Server, HardDrive, RefreshCw, ShieldAlert, CheckSquare,
  Layers // Twakuye ikosa rero twayanditse hano hejuru!
} from 'lucide-react';
import { mockProjects, mockTasks } from '../data/mockData';
import '../styles/Dashboard.css';

interface Project {
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

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [projects] = useState<Project[]>(mockProjects as any);
  const [logs, setLogs] = useState<string[]>([]);
  
  const [stats, setStats] = useState({
    totalPipelines: 0,
    activeMissions: 0,
    completedMissions: 0,
    velocityRate: 0,
    systemIntegrity: 100,
    serverUptime: '99.98%'
  });

  useEffect(() => {
    const totalProj = projects.length;
    const activeT = mockTasks.filter(t => t.status !== 'Done').length;
    const completedT = mockTasks.filter(t => t.status === 'Done').length;
    const totalT = mockTasks.length;
    const velocity = totalT > 0 ? Math.round((completedT / totalT) * 100) : 0;

    setStats({
      totalPipelines: totalProj,
      activeMissions: activeT,
      completedMissions: completedT,
      velocityRate: velocity,
      systemIntegrity: 98.4,
      serverUptime: '99.99%'
    });

    const initialLogs = [
      '[INFO] Initialization of DevPulse Core Core Engine... OK',
      '[SYSTEM] TypeScript strict compiler rules verification active.',
      `[SYNC] Parsed ${totalProj} microservices clusters from LocalStorage.`,
      `[METRIC] Sprint operations velocity currently calibrated at ${velocity}%.`
    ];
    setLogs(initialLogs);
  }, [projects]);

  return (
    <div className="devpulse-dashboard-root">
      
      {/* SECTION 1: MICROSERVICES CORE HEALTH MONITOR */}
      <div className="devpulse-health-ribbon">
        <div className="health-node">
          <Server size={14} />
          <span>Cluster Node: <strong>DevPulse-US-East</strong></span>
        </div>
        <div className="health-node">
          <HardDrive size={14} />
          <span>Type Engine: <strong>TS 5.0 Strict</strong></span>
        </div>
        <div className="health-node">
          <Activity size={14} />
          <span>Uptime: <strong className="text-neon-yellow">{stats.serverUptime}</strong></span>
        </div>
        <div className="health-node">
          <RefreshCw size={14} className="spin-slow" />
          <span>Status: <strong className="text-success">Operational</strong></span>
        </div>
      </div>

      {/* SECTION 2: HIGH-TECH METRICS COUNTERS */}
      <div className="devpulse-matrix-grid">
        <div className="matrix-stat-card primary-cyber">
          <div className="m-card-hdr">
            <span className="m-lbl">Active Pipelines</span>
            <div className="m-ico-box"><GitBranch size={16} /></div>
          </div>
          <h2>{stats.totalPipelines} <small>Nodes</small></h2>
          <div className="m-card-footer-bar">
            <span>Repositories monitored automatically</span>
          </div>
        </div>

        <div className="matrix-stat-card secondary-cyber">
          <div className="m-card-hdr">
            <span className="m-lbl">Active Missions Backlog</span>
            <div className="m-ico-box"><Cpu size={16} /></div>
          </div>
          <h2>{stats.activeMissions} <small>Threads</small></h2>
          <div className="m-card-footer-bar">
            <span>Requires instant engineer logic execution</span>
          </div>
        </div>

        <div className="matrix-stat-card primary-cyber">
          <div className="m-card-hdr">
            <span className="m-lbl">Sprint Efficiency Velocity</span>
            <div className="m-ico-box"><Flame size={16} /></div>
          </div>
          <h2>{stats.velocityRate}%</h2>
          <div className="cyber-progress-track">
            <div className="cyber-progress-fill" style={{ width: `${stats.velocityRate}%` }}></div>
          </div>
        </div>

        <div className="matrix-stat-card stability-cyber">
          <div className="m-card-hdr">
            <span className="m-lbl">System Integrity Core</span>
            <div className="m-ico-box"><ShieldAlert size={16} /></div>
          </div>
          <h2>{stats.systemIntegrity}%</h2>
          <div className="m-card-footer-bar">
            <span>Zero critical runtime type compilation failures</span>
          </div>
        </div>
      </div>

      {/* SECTION 3: CORE DEVELOPMENT VIEW */}
      <div className="devpulse-split-grid">
        
        {/* Left Side: Repositories list */}
        <div className="devpulse-panel-box repo-panel">
          <div className="panel-hdr">
            <h3><Code2 size={18} /> Architecture Repositories</h3>
            <span className="panel-hdr-badge">{projects.length} Repos</span>
          </div>
          
          <div className="cyber-project-list">
            {projects.map((proj) => (
              <div key={proj.id} className="cyber-project-row">
                <div className="row-left-meta">
                  <span className={`cyber-cat-tag ${proj.category.toLowerCase()}`}>{proj.category}</span>
                  <h4>{proj.name}</h4>
                  <p>{proj.description}</p>
                </div>
                
                <div className="row-right-metrics">
                  <div className="row-progress-container">
                    <div className="row-progress-text">
                      <span>Sync Link</span>
                      <strong>{proj.progress}%</strong>
                    </div>
                    <div className="row-progress-track">
                      <div className="row-progress-bar" style={{ width: `${proj.progress}%` }}></div>
                    </div>
                  </div>
                  <div className="row-task-indicator">
                    <CheckSquare size={12} />
                    <span>{proj.tasksCount.completed}/{proj.tasksCount.total} Tasks</span>
                  </div>
                  <button className="cyber-action-trigger" onClick={() => navigate('/kanban')}>
                    Terminal <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Command Center */}
        <div className="devpulse-panel-box control-panel">
          <div className="panel-hdr">
            <h3><Terminal size={18} /> Command Control Center</h3>
          </div>
          
          <div className="control-panel-body">
            <button className="cyber-command-btn" onClick={() => navigate('/kanban')}>
              <Terminal size={16} />
              <span>Launch Kanban Workspace</span>
            </button>
            
            <p className="terminal-logs-label">Live Activity Architecture Logs</p>
            <div className="cyber-terminal-screen">
              <div className="terminal-header-dots">
                <span></span><span></span><span></span>
              </div>
              <div className="terminal-output-container">
                {logs.map((log, i) => (
                  <div key={i} className="terminal-line">
                    <span className="terminal-arrow">&gt;</span>
                    <span className="terminal-text">{log}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* SECTION 4: EPIC SPRINTS BACKLOG TRACKER */}
      <div className="devpulse-panel-box full-width-panel">
        <div className="panel-hdr">
          <h3><Layers size={18} /> Core Pipeline Sprint Milestones</h3>
          <span className="panel-hdr-badge text-neon-yellow">Active Sprint</span>
        </div>
        <div className="epic-backlog-table-wrapper">
          <table className="epic-backlog-table">
            <thead>
              <tr>
                <th>Pipeline ID</th>
                <th>Target Node Module</th>
                <th>Status Verification</th>
                <th>System Priority</th>
                <th>Assigned Engineers</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-neon-yellow">#P-104</td>
                <td><strong>TypeScript Compiler Strict Configuration Tuning</strong></td>
                <td><span className="table-badge complete">Verified</span></td>
                <td><span className="table-priority high">High</span></td>
                <td><span className="engineer-avatar-dummy">KA</span></td>
              </tr>
              <tr>
                <td className="text-neon-yellow">#P-105</td>
                <td><strong>Redux Toolkit Sync & Global Micro-State Slice Architecture</strong></td>
                <td><span className="table-badge building">Executing</span></td>
                <td><span className="table-priority high">High</span></td>
                <td><span className="engineer-avatar-dummy">SK</span></td>
              </tr>
              <tr>
                <td className="text-neon-yellow">#P-106</td>
                <td><strong>Multi-Stage Production Dockerfile Optimization Pipelines</strong></td>
                <td><span className="table-badge standby">Standby</span></td>
                <td><span className="table-priority medium">Medium</span></td>
                <td><span className="engineer-avatar-dummy">ME</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
