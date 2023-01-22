# To-Do App

A JavaScript project from the odin project. The pupose of this project was to use all the basics of JavaScript i had learnt through out they're [Full Stack Path](https://www.theodinproject.com/paths/foundations/courses/foundations).

**Concepts learnt include:**

- Expressions and operators
- Loops
- Arrays(Array Methods,Higher Order Functions)
- DOM Manipulation and Events
- Objects

# Demo

Live Preview : [To-Do App](icep0ps.github.io/calculator/)

# Lessons Learned

Always as for help when you run into a bug that you really can’t fix or understand. When I was making the operator function with the reduce function, I ran into a bug I couldn't fix for hours because I had I errors in my reduce function which I didn’t even know till I sent my code in the top discord and someone pointed it out if it wasn’t for that I don’t think I would have been able to finish this project really.

**Problem**

```js
const numbers = [2, 4];
function add(numbers) {
  numbers.reduce((a, c) => {
    const result = a + c;
    console.log(result);
  });
}
```

**Solution**

```js
const numbers = [2, 4];
function add(numbers) {
  let answer = numbers.reduce((a, c) => a + c);
  return answer;
}
```

i added a binded because when a project is created , it is created using a class so when it is stored and then loaded again all its methods are lost by methods i mean the add tasks method. So what i did was whenever im about to add a task to a project i will then bind the this keyword to it because when i passed down the add tasks method i only passed down the function defination to createPopUP so this is unidifined

```js
createPopUp(newProjectWithMethods.addTask, newProjectWithMethods);
```

# Possible improvements

I would not have used classes to make my project objects but use factory functions instead

# Acknowledgements

[The Odin Project](https://www.theodinproject.com)
