const displaycompletedTasks = (() => {
  let completedTasks = 0;
  const moveTask = (event) => {
    const input = event.currentTarget;
    if (input.parentElement.parentElement.getAttribute('class') == 'pending') {
      const completed = document.querySelector('.completed');
      completed.append(input.parentElement);
      const span = document.querySelector('.counter');
      completedTasks++;
      span.textContent = completedTasks;
    } else {
      const pending = document.querySelector('.pending');
      pending.append(input.parentElement);
      const span = document.querySelector('.counter');
      completedTasks--;
      span.textContent = completedTasks;
    }
  };
  return { moveTask };
})();

export { displaycompletedTasks };
