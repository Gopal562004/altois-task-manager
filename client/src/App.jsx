import TaskBoard from './components/TaskBoard';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-primary-100 selection:text-primary-900">
      <main className="py-8">
        <TaskBoard />
      </main>
    </div>
  );
}

export default App;
