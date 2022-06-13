const displaycompletedTasks = (() => {
  let completedTasks = 0;
  const moveTask = (input) => {
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

const displaycompletedProjectTasks = (() => {
  let completedTasks = 0;
  const moveTask = (input) => {
    const currentdiv = document.querySelector('[data-active]');
    if (input.parentElement.parentElement.getAttribute('class') == 'pending') {
      const completed = currentdiv.querySelector('.completed');
      completed.append(input.parentElement);
      const span = currentdiv.querySelector('span');
      completedTasks++;
      span.textContent = completedTasks;
    } else {
      const pending = currentdiv.querySelector('.pending');
      pending.append(input.parentElement);
      const span = currentdiv.querySelector('.counter');
      completedTasks--;
      span.textContent = completedTasks;
    }
  };
  return { moveTask };
})();

const setActiveTab = (tab) => {
  const tabs = document.querySelectorAll('li');
  Array.from(tabs).forEach((li) => {
    if (li.classList.contains('active')) {
      li.classList.remove('active');
    }
  });
  if (tab.classList.contains('active')) {
    tab.classList.remove('active');
  } else {
    tab.setAttribute('class', 'active');
  }
};

export { setActiveTab, displaycompletedProjectTasks, displaycompletedTasks };
