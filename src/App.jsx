import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Projects from "./components/Projects";
import KanbanBoard from "./components/KanbanBoard";
import Settings from "./components/Settings";
import { GithubProvider, useGithub } from "./context/GithubContext";
import Landing from "./components/Landing";
import "./App.css";
function AppContent() {
  const [activePage, setActivePage] = useState("dashboard");
  const { user, setUser } = useGithub();

  return (
    !user ? (
      <Landing onLogin={(userData) => setUser(userData)} />
    ) : (
      <div className="app">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        <main className="main-content">
          {activePage === "dashboard" && <Dashboard setActivePage={setActivePage} />}
          {activePage === "projects" && <Projects />}
          {activePage === "kanban" && <KanbanBoard />}
          {activePage === "settings" && <Settings />}
        </main>
      </div>
    )
  );
}
export default function App() {
  return (
    <GithubProvider>
      <AppContent />
    </GithubProvider>
  );
}