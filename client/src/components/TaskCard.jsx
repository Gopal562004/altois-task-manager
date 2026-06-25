import { motion } from 'framer-motion';
import { FiEdit2, FiTrash2, FiClock, FiCheckCircle, FiLoader } from 'react-icons/fi';

const priorityColors = {
  low: 'bg-green-100 text-green-800 border-green-200',
  medium: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  high: 'bg-red-100 text-red-800 border-red-200',
};

const statusIcons = {
  'pending': <FiClock className="w-4 h-4" />,
  'in-progress': <FiLoader className="w-4 h-4 animate-spin-slow" />,
  'completed': <FiCheckCircle className="w-4 h-4" />,
};

const statusColors = {
  'pending': 'text-slate-500',
  'in-progress': 'text-primary-500',
  'completed': 'text-green-500',
};

export default function TaskCard({ task, onEdit, onDelete }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-md border border-slate-200 p-5 transition-all duration-200"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-lg text-slate-800 line-clamp-2" title={task.title}>
          {task.title}
        </h3>
        <div className="flex space-x-2 ml-4">
          <button
            onClick={() => onEdit(task)}
            className="text-slate-400 hover:text-primary-600 transition-colors p-1"
            title="Edit Task"
          >
            <FiEdit2 />
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="text-slate-400 hover:text-red-600 transition-colors p-1"
            title="Delete Task"
          >
            <FiTrash2 />
          </button>
        </div>
      </div>
      
      {task.description && (
        <p className="text-slate-600 text-sm mb-4 line-clamp-3">
          {task.description}
        </p>
      )}

      <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
        <div className={`flex items-center space-x-1.5 text-sm font-medium ${statusColors[task.status]}`}>
          {statusIcons[task.status]}
          <span className="capitalize">{task.status.replace('-', ' ')}</span>
        </div>
        
        <span className={`px-2.5 py-1 rounded-full text-xs font-medium border capitalize ${priorityColors[task.priority]}`}>
          {task.priority}
        </span>
      </div>
    </motion.div>
  );
}
