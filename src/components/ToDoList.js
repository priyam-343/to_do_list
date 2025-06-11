import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { AddTaskForm } from './AddTaskForm';
import { ToDoItem } from './ToDoItem';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { colors } from '../styles/colors';

const ToDoListContainer = styled.div`
  max-width: 700px;
  margin: 60px auto;
  padding: 40px;
  background-color: ${colors.cardBackground};
  border-radius: 25px;
  box-shadow: 0 20px 60px ${colors.shadow};
  display: flex;
  flex-direction: column;
  gap: 35px;
  animation: fadeIn 1s ease-out;
  position: relative;
  z-index: 1;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(40px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    margin: 40px 25px;
    padding: 30px;
  }
`;

const Title = styled.h1`
  text-align: center;
  color: ${colors.primary};
  margin-bottom: 35px;
  font-size: 3.5rem;
  letter-spacing: -1px;
  font-weight: 800;
  text-shadow: 3px 3px 8px rgba(0,0,0,0.1);

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const FilterSortContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 25px;
  flex-wrap: wrap;
  padding: 22px 30px;
  background-color: ${colors.background};
  border-radius: 18px;
  box-shadow: inset 0 3px 8px rgba(0, 0, 0, 0.08);
  border: 1px solid ${colors.border};
`;

const Select = styled.select`
  padding: 15px 50px 15px 20px; /* Increased right padding for space */
  border: 1px solid ${colors.border};
  border-radius: 12px;
  font-size: 1.05rem;
  background-color: ${colors.cardBackground};
  color: ${colors.textPrimary};
  cursor: pointer;
  transition: all 0.3s ease;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23${colors.textPrimary.substring(1)}' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 15px center; /* Adjusted arrow position */
  background-size: 20px;
  font-weight: 500;

  &:hover {
    transform: translateY(-3px);
  }

  &:focus {
    outline: none;
    border-color: ${colors.primaryLight};
    box-shadow: 0 0 0 5px ${colors.primaryLight}40;
  }

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`;

const TasksList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: ${colors.textSecondary};
  font-style: italic;
  margin-top: 50px;
  padding: 30px;
  background-color: ${colors.background};
  border-radius: 15px;
  border: 2px dashed ${colors.border};
  font-size: 1.2rem;
  font-weight: 500;
  color: ${colors.textSecondary};
`;

export function ToDoList() {
  const [tasks, setTasks] = useLocalStorage('react-todo-tasks', []);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('addedDate');

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      addedDate: new Date(),
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredAndSortedTasks = useMemo(() => {
    let filtered = tasks;

    if (filter === 'completed') {
      filtered = tasks.filter((task) => task.completed);
    } else if (filter === 'active') {
      filtered = tasks.filter((task) => !task.completed);
    }

    if (sortBy === 'alphabetical') {
      filtered.sort((a, b) => a.text.localeCompare(b.text));
    } else if (sortBy === 'addedDate') {
      filtered.sort((a, b) => new Date(b.addedDate) - new Date(a.addedDate));
    }

    return filtered;
  }, [tasks, filter, sortBy]);

  return (
    <ToDoListContainer>
      <Title>My To-Do List</Title>

      <AddTaskForm onAddTask={addTask} />

      <FilterSortContainer>
        <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All Tasks</option>
          <option value="active">Active Tasks</option>
          <option value="completed">Completed Tasks</option>
        </Select>

        <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="addedDate">Sort by Added Date</option>
          <option value="alphabetical">Sort Alphabetically</option>
        </Select>
      </FilterSortContainer>

      {filteredAndSortedTasks.length === 0 && (
        <EmptyMessage>No tasks to display!</EmptyMessage>
      )}

      <TasksList>
        {filteredAndSortedTasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            onToggleComplete={toggleComplete}
            onRemoveTask={removeTask}
          />
        ))}
      </TasksList>
    </ToDoListContainer>
  );
}