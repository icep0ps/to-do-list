import { currentProject, currentdiv } from './tasks-constructors';

const displaycompletedTasks = (() => {
  let completedTasks = 0;
  const moveTask = (input) => {
    if (
      input.parentElement.parentElement.parentElement.getAttribute('class') ==
      'pending'
    ) {
      const completed = document.querySelector('.completed');
      completed.append(input.parentElement.parentElement);
      const span = completed.querySelector('.counter');
      completedTasks++;
      span.textContent = completedTasks;
    } else {
      const pending = document.querySelector('.pending');
      pending.append(input.parentElement.parentElement);
      const completed = document.querySelector('.completed');
      const span = completed.querySelector('span');
      completedTasks--;
      span.textContent = completedTasks;
    }
  };
  return { moveTask };
})();

const displaycompletedProjectTasks = (() => {
  let completedTasks = 0;
  const moveTask = (input) => {
    if (
      input.parentElement.parentElement.parentElement.getAttribute('class') ==
      'pending'
    ) {
      const completed = currentdiv.querySelector('.completed');
      completed.append(input.parentElement.parentElement);
      const span = completed.querySelector('span');
      completedTasks++;
      span.textContent = completedTasks;
    } else {
      const pending = currentdiv.querySelector('.pending');
      pending.append(input.parentElement.parentElement);
      const completed = currentdiv.querySelector('.completed');
      const span = completed.querySelector('span');
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
