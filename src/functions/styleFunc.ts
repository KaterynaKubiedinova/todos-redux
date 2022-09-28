import { StyleButton } from '../types/functionTypes';

export function completedBtnStyle(completed: string): StyleButton {
  if (completed === 'completed') {
    return {
      background: '#fcbfb7',
      color: '#334e58',
    };
  } else {
    return {
      background: '#b0b3c1',
      color: '#334e58',
    };
  }
}

export function notCompletedBtnStyle(completed: string): StyleButton {
  if (completed === 'not completed') {
    return {
      background: '#fcbfb7',
      color: '#334e58',
    };
  } else {
    return {
      background: '#b0b3c1',
      color: '#334e58',
    };
  }
}

export function isCompleted(completed: boolean): string {
  return completed ? 'line-through' : 'none';
}
