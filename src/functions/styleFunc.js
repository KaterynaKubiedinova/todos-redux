export function completedBtnStyle(completed) {
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

export function notCompletedBtnStyle(completed) {
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
