---
published: "false"
title: "React Philosophies"
excerpt: "Writing clean, maintainable, and efficient React components is crucial for the success of any React project. This guide outlines the best practices for creating React components."
coverImage: "/assets/blog/preview/cover.jpg"
date: "2024"
author:
  name: Alex Tseitlin
  picture: "/assets/blog/authors/alex.webp"
ogImage:
  url: "/assets/blog/preview/cover.jpg"
---

> You have to think about **what is the right way**, even when you have the right idea of what the building blocks should be, there is huge flexibility in how you decide to put the whole system together. It is a craft... and it has a lot to do with valuing simplicity over complexity. Many people do have a tendency to make things more complicated than they need to be... The more stuff you throw into a system, the more complicated it gets and the more likely it is not going to work properly. - [Barbara Liskov](https://en.wikipedia.org/wiki/Barbara_Liskov)

Here are the top React philosophies with code examples for each:

## A cohesive experience

Familiar patterns help people intuitively navigate to the information they're looking for, while also helping people discover new features. If pages and features don’t share the same metaphors, people get confused more easily, it makes it harder for them to understand the features we provide.

If a page behaves and feels familiar, it allows people to focus on the task at hand, instead of requiring them to parse UI that looks completely new.

## Responsive design

Supporting responsive experiences is an essential part of developing for the Web today. In fact, making sure pages work well on most screen sizes or zoom levels is an accessibility requirement as well.

## The Zen of GitHub

> “Whether you call it taste, culture, or zen, there are underlying assumptions that members of an organization rely on to resolve ambiguity in pursuit of the organization’s mission.”  
> – [Ben Balter](https://ben.balter.com/2015/08/12/the-zen-of-github/)

The [GitHub API](https://api.github.com/zen) consolidates the Zen of GitHub in its own codebase, in 14 aphorisms:

- Responsive is better than fast
- It’s not fully shipped until it’s fast
- Anything added dilutes everything else
- Practicality beats purity
- Approachable is better than simple
- Mind your words, they are important
- Speak like a human
- Half measures are as bad as nothing at all
- Encourage flow
- Non-blocking is better than blocking
- Favor focus over features
- Avoid administrative distraction
- Design for failure
- Keep it logically awesome

We recommend you to read about the story behind the Zen of GitHub in these posts:

- [Taste and The Zen of GitHub](https://warpspire.com/posts/taste), by [@kneath](https://github.com/kneath)
- [The Zen of GitHub](https://ben.balter.com/2015/08/12/the-zen-of-github/), by [@benbalter](https://github.com/benbalter)

### Minimizing bundle size

Module bundlers that use ECMAScript modules (ESM) will automatically tree-shake Primer React, ensuring that no unused code is included in your final bundle. However, if you're not using ESM, you may be able to drastically reduce the size of your final bundle by importing components individually from the `lib` subfolder:

```jsx
// using import syntax
import Box from "@primer/react/lib/Box";
```

```jsx
// using require syntax
const Box = require("@primer/react/lib/Box");
```

Note that the modules in the `lib` folder are CommonJS-style modules; if you're using ESM and a compatible module bundler, importing files individually from `lib` provides no benefit.

## Types of components

[Primer](https://primer.style/guides/react/core-concepts#types-of-components) categorize components into 3 general types. Building block components, pattern components, and helper components. Understanding how these types of components interact with each other can help you better understand how to get the most out of Primer React.

### Building Blocks

Building block components are components that are basic in their functions and can be used together with other components to build just about any UI. Some examples of building block components are `Box`, `Avatar`, `Details`, and `Link`.

### Pattern Components

Pattern components are components that are made up of several building block components to represent a commonly used pattern in our UI. Some examples of pattern components:

- `UnderlineNav`
- `FilterList`.
- `Button`
- `Avatar`
- `Label`

Pattern components help us repeat commonly used UI patterns and interactions in order to maintain our brand and provide a great user experience.

### Helper Components

Helper components are components that help the user achieve common CSS patterns while maintaining some control over values used. An example of a helper component is Box.

## The `as` prop

The `as` prop is a feature that all of our components get from [styled-components](https://www.styled-components.com). It allows you to pass a HTML tag or another component to a Primer Component to be rendered as the base tag of that component along with all of it's styles and props.

For example, say you are using a `Button` component, and you really need to apply `Box` styles to it. You can compose `Box` and `Button` like so:

```jsx
<Box display="flex" as={Button} href="https://github.com">
  Hello
</Box>
```

This will allow you to use all of the `Button` props _and_ all of the `Box` props without having to wrap your `Button` component in another `Box` component.

**This pattern does have some limitations.** Usage of the `as` prop can lead to unexpected output. In the example above, if the user had done `<Button as={Box}/>` instead, because the `Box`'s render method is ultimately applied, and `Box` components render `div`'s, you'll see that the rendered component is a `div` when ideally you'd like it to be a `button`. It is also not always clear how the styles in both components will interact and/or override each other.

For these reasons, **we recommend only using the `as` prop when you cannot achieve the same result by nesting components.** The `Box` / `Button` example could be done like so:

```jsx
<Box display="flex">
  <Button href="https://github.com">Hi</Button>
</Box>
```

1. **Component-Driven Development (CDD)**: This philosophy emphasizes breaking down the application into smaller, reusable components that are easy to manage and maintain.

Example:

```jsx
// Header.js
import React from "react";

const Header = () => {
  return (
    <header>
      <h1>Welcome to my app!</h1>
    </header>
  );
};

export default Header;
```

```jsx
// App.js
import React from 'react';
import Header from './Header';

const App = () => {
  return (
    <div>
      <Header />
      <!-- rest of the app -->
    </div>
  );
};

export default App;
```

In this example, we've broken down the app into smaller components (Header and App), making it easier to manage and maintain.

2. **Functional Programming (FP)**: This philosophy focuses on writing pure, composable functions that can be easily tested and debugged.

Example:

```jsx
// doubleValue.js
import { compose } from "redux";

const doubleValue = (value) => value * 2;

export default doubleValue;
```

```jsx
// App.js
import React from "react";
import doubleValue from "./doubleValue";

const App = () => {
  const value = 5;
  const doubledValue = doubleValue(value);
  return <div>{doubledValue}</div>;
};

export default App;
```

In this example, we've written a pure, composable function (`doubleValue`) that can be easily tested and debugged. We then compose this function with other functions to create a more complex behavior.

3. **Declarative Programming**: This philosophy emphasizes describing what you want to happen, rather than how it should happen.

Example:

```jsx
// Counter.js
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Counter;
```

In this example, we're declaring what we want to happen (a counter that increments when a button is clicked), rather than how it should happen (manually updating the state).

Bad Example: Imperative programming style, which is the opposite of declarative programming.

```jsx
// BadExample.js
import React, { useState } from "react";

const BadExample = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default BadExample;
```

In this bad example, we're manually updating the state by incrementing the count inside the handleClick function. This is an example of imperative programming, which is not declarative.

### 1. Declarative Programming

**Description**: In declarative programming, the focus is on what the program should accomplish, rather than how it should do it. The language or framework manages how the task is executed.

**Good Example** (JavaScript with React, declaring what the UI should render):

```jsx
import React from "react";

function App() {
  return (
    <div className="App">
      <h1>Hello, world!</h1>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </div>
  );
}

export default App;
```

**Bad Example** (Attempting to manage state and rendering manually, not leveraging React's declarative nature):

```jsx
import React from "react";

function App() {
  let hasRendered = false;
  const renderList = () => {
    if (!hasRendered) {
      return (
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      );
    }
    return null;
  };

  return (
    <div className="App">
      <h1>Hello, world!</h1>
      {renderList()}
    </div>
  );
}

export default App;
```

### 2. Imperative Programming

**Description**: Imperative programming focuses on how the code should achieve its goal, specifying specific steps for the computer to follow.

**Good Example** (Imperative style in JavaScript, using `for` loop):

```javascript
const arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum); // 15
```

**Bad Example** (Attempting imperative approach but unnecessarily complex):

```javascript
const arr = [1, 2, 3, 4, 5];
let sum = 0;

const iterator = {
  index: 0,
  next() {
    if (this.index >= arr.length) return "done";
    const value = arr[this.index++];
    return value;
  },
};

while ((value = iterator.next()) !== "done") {
  sum += value;
}

console.log(sum); // 15
```

### 3. Functional Programming

**Description**: Functional programming treats computation as the evaluation of mathematical functions and avoids changing state and mutable data.

**Good Example** (Functional style in JavaScript, using `reduce`):

```javascript
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum); // 15
```

**Bad Example** (Mutable state in functional programming attempt):

```javascript
const arr = [1, 2, 3, 4, 5];
let sum = 0;

arr.forEach((num) => {
  sum = sum + num; // Mutating state
});

console.log(sum); // 15
```

### 4. Mutable vs. Immutable Data

**Description**: Mutable data can be changed after it is created, while immutable data cannot.

**Good Example** (Immutable data in JavaScript):

```javascript
const a = { x: 1 };
const b = { ...a, x: 2 };

console.log(a); // { x: 1 }
console.log(b); // { x: 2 }
```

**Bad Example** (Mutable data leading to unexpected behavior):

```javascript
const a = { x: 1 };
const b = a;
b.x = 2;

console.log(a); // { x: 2 }  // Expected { x: 1 }
console.log(b); // { x: 2 }
```

These examples illustrate the principles of declarative, imperative, and functional programming styles, along with the concepts of mutable and immutable data. Each "bad" example is a scenario where the approach deviates from best practices for the respective concept, often leading to more complex or error-prone code.

4. **Unidirectional Data Flow**: This philosophy emphasizes a one-way flow of data, where components receive props from their parents, and then pass data down to their children.

Example:

```jsx
// TodoList.js
import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TodoList;
```

```jsx
// TodoItem.js
import React from "react";

const TodoItem = ({ todo, onDelete }) => {
  return (
    <li>
      {todo.text}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
```

In this example, the `TodoList` component receives a list of todos from its parent, and then passes each todo down to the `TodoItem` component. The `TodoItem` component receives the todo and an `onDelete` function from its parent, and then calls that function when the delete button is clicked.

5. **Container-Component Separation**: This philosophy separates the application's state management (container) from the presentational components, making it easier to manage complexity and reuse components.

Example:

```jsx
// TodoListContainer.js
import React, { useState } from "react";
import TodoList from "./TodoList";

const TodoListContainer = () => {
  const [todos, setTodos] = useState([]);

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return <TodoList todos={todos} onDelete={handleDelete} />;
};

export default TodoListContainer;
```

```jsx
// TodoList.js
import React from "react";

const TodoList = ({ todos, onDelete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
```

In this example, the `TodoListContainer` component manages the state of the todos, and then passes that state down to the `TodoList` component. The `TodoList` component is responsible for rendering the list of todos, and the `TodoListContainer` component is responsible for managing the state and handling the delete functionality.

6. **Single Source of Truth (SSOT)**: This philosophy emphasizes having a single, authoritative source of truth for the application's state, such as a Redux store.

Example:

```jsx
// store.js
import { createStore } from "redux";

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
```

```jsx
// Counter.js
import React from "react";
import store from "./store";

const Counter = () => {
  const count = store.getState().count;

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => store.dispatch({ type: "INCREMENT" })}>
        Increment
      </button>
    </div>
  );
};

export default Counter;
```

In this example, the `store` is the single source of truth for the application's state, and the `Counter` component uses the `store` to retrieve the current count and dispatch actions to update the state.

## Dont stop here

There is much more and better information out there then what I provided here. Here are my favorite list:

- [Thinking in React](https://react.dev/learn/thinking-in-react)
- [Primer React Philosophy](https://primer.style/guides/react/philosophy)
- [require Vs import](https://medium.com/@thegautam.vaja/require-vs-import-d9e9709887ae)
- [Correctly Use Javascript’s Imports To Improve Bundle Size](https://ireadyoulearn.info/2020/07/28/correctly-use-javascripts-imports-to-improve-bundle-size/)
