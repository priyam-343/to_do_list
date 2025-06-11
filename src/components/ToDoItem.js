import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${colors.cardBackground};
  padding: 22px 30px;
  margin-bottom: 15px;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease, border-left 0.3s ease;
  min-width: 280px;
  border-left: 8px solid ${(props) => (props.completed ? colors.success : colors.secondary)};
  opacity: ${(props) => (props.completed ? 0.7 : 1)};
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.05),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.5s ease-out;
  }

  &:hover {
    transform: translateY(-7px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    &:before {
      transform: translateX(100%);
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 18px;
    gap: 12px;
  }
`;

const TaskText = styled.span`
  flex-grow: 1;
  font-size: 1.1rem;
  color: ${(props) => (props.completed ? colors.textSecondary : colors.textPrimary)};
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
  margin-right: 20px;
  word-break: break-word;
  font-weight: ${(props) => (props.completed ? '400' : '500')};
  transition: color 0.3s ease, text-decoration 0.3s ease;

  @media (max-width: 480px) {
    margin-right: 0;
    margin-top: 8px;
    font-size: 1.05rem;
  }
`;

const ActionsContainer = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: flex-end;
  }
`;

const ActionButton = styled.button`
  background: linear-gradient(45deg, ${colors.danger}, #C82333);
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 3px 10px ${colors.danger}50;

  &:hover {
    background: linear-gradient(45deg, #C82333, ${colors.danger});
    transform: translateY(-3px);
    box-shadow: 0 5px 15px ${colors.danger}70;
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px ${colors.danger}50;
  }
`;

const CheckboxInput = styled.input`
  margin-right: 25px;
  min-width: 28px;
  min-height: 28px;
  cursor: pointer;
  accent-color: ${colors.primary};
  border-radius: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.2);
    box-shadow: 0 0 0 5px ${colors.primaryLight}30;
  }

  @media (max-width: 480px) {
    margin-right: 15px;
    min-width: 25px;
    min-height: 25px;
  }
`;

export function ToDoItem({ task, onToggleComplete, onRemoveTask }) {
  return (
    <ListItem completed={task.completed}>
      <CheckboxInput
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleComplete(task.id)}
      />
      <TaskText completed={task.completed}>{task.text}</TaskText>
      <ActionsContainer>
        <ActionButton remove onClick={() => onRemoveTask(task.id)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
          Remove
        </ActionButton>
      </ActionsContainer>
    </ListItem>
  );
}