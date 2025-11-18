import { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');

  const addTodo = () => {
    if (inputValue.trim() === '') return;
    
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false
    };
    
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const getFilteredTodos = () => {
    switch(filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  };

  const totalTodos = todos.length;
  const activeTodos = todos.filter(todo => !todo.completed).length;
  const completedTodos = todos.filter(todo => todo.completed).length;

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const filteredTodos = getFilteredTodos();

  return (
    <div className="todo-container">
      <div className="todo-wrapper">
        <div className="todo-header">
          <h1 className="todo-title">📝 Todo List</h1>
          <p className="todo-subtitle">Kelola tugas harianmu dengan mudah</p>
        </div>

        <div className="todo-card">
          <div className="input-section">
            <div className="input-wrapper">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Tambahkan tugas baru..."
                className="todo-input"
              />
              <button onClick={addTodo} className="btn-add">
                Tambah
              </button>
            </div>
          </div>

          <div className="stats-container">
            <div className="stat-card stat-total">
              <div className="stat-number">{totalTodos}</div>
              <div className="stat-label">Total</div>
            </div>
            <div className="stat-card stat-active">
              <div className="stat-number">{activeTodos}</div>
              <div className="stat-label">Aktif</div>
            </div>
            <div className="stat-card stat-completed">
              <div className="stat-number">{completedTodos}</div>
              <div className="stat-label">Selesai</div>
            </div>
          </div>

          <div className="filter-buttons">
            <button
              onClick={() => setFilter('all')}
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            >
              Semua
            </button>
            <button
              onClick={() => setFilter('active')}
              className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
            >
              Aktif
            </button>
            <button
              onClick={() => setFilter('completed')}
              className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
            >
              Selesai
            </button>
          </div>

          <div className="todo-list">
            {filteredTodos.length === 0 ? (
              <div className="empty-state">
                <p>
                  {filter === 'all' && 'Belum ada tugas. Tambahkan tugas pertamamu!'}
                  {filter === 'active' && 'Tidak ada tugas aktif'}
                  {filter === 'completed' && 'Belum ada tugas yang selesai'}
                </p>
              </div>
            ) : (
              filteredTodos.map(todo => (
                <div
                  key={todo.id}
                  className={`todo-item ${todo.completed ? 'completed' : ''}`}
                >
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className="btn-toggle"
                  >
                    {todo.completed ? (
                      <span className="icon-check">✓</span>
                    ) : (
                      <span className="icon-circle">○</span>
                    )}
                  </button>
                  
                  <span className="todo-text">{todo.text}</span>
                  
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="btn-delete"
                  >
                    <span className="icon-trash">🗑️</span>
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="todo-footer">
          <p>Tekan Enter untuk menambah tugas dengan cepat ⚡</p>
        </div>
      </div>
    </div>
  );
};

export default TodoList;