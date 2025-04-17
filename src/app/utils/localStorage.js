const TASKS_KEY = 'tasks';

export const loadTasks = () => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(TASKS_KEY);
    return data ? JSON.parse(data) : [];
  }
  return [];
};

export const saveTasks = (tasks) => {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
};

export const getTasks = () => {
    if (typeof window === 'undefined') return [];
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
  };
  
