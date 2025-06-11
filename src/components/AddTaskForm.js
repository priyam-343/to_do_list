import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';

const FormContainer = styled.form`
  display: flex;
  gap: 18px;
  margin-bottom: 25px;
  background-color: ${colors.cardBackground};
  padding: 30px;
  border-radius: 18px;
  box-shadow: 0 10px 30px ${colors.shadow};
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const TaskInput = styled.input`
  flex-grow: 1;
  padding: 18px 22px;
  border: 1px solid ${colors.border};
  border-radius: 12px;
  font-size: 1.15rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  min-width: 250px;
  color: ${colors.textPrimary};
  font-weight: 500;

  &::placeholder {
    color: ${colors.textSecondary};
    opacity: 0.6;
  }

  &:focus {
    outline: none;
    border-color: ${colors.primaryLight};
    box-shadow: 0 0 0 5px ${colors.primaryLight}40;
  }
`;

const AddButton = styled.button`
  background: linear-gradient(45deg, ${colors.primary}, ${colors.primaryLight});
  color: white;
  padding: 18px 35px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1.15rem;
  font-weight: 600;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 5px 15px ${colors.primary}50;

  &:hover {
    background: linear-gradient(45deg, ${colors.primaryLight}, ${colors.primary});
    transform: translateY(-5px);
    box-shadow: 0 8px 25px ${colors.primary}70;
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 3px 10px ${colors.primary}50;
  }

  &:disabled {
    background: ${colors.textSecondary};
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const ErrorMessage = styled.p`
  color: ${colors.danger};
  font-size: 1rem;
  margin-top: 12px;
  width: 100%;
  text-align: center;
  font-weight: 500;
  background-color: rgba(231, 76, 60, 0.1);
  border-radius: 10px;
  padding: 12px 20px;
  animation: slideIn 0.4s ease-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export function AddTaskForm({ onAddTask }) {
  const [taskText, setTaskText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() === '') {
      setError('Task cannot be empty!');
      return;
    }
    if (taskText.trim().length < 3) {
      setError('Task must be at least 3 characters long.');
      return;
    }
    onAddTask(taskText.trim());
    setTaskText('');
    setError('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <TaskInput
        type="text"
        placeholder="Add a new task..."
        value={taskText}
        onChange={(e) => {
          setTaskText(e.target.value);
          if (error) setError('');
        }}
      />
      <AddButton type="submit" disabled={taskText.trim().length < 3}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
        Add Task
      </AddButton>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FormContainer>
  );
}