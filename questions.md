1. A Component does not implement shouldComponentUpdate(), which means it always re-renders when state or props change. On the other hand, a PureComponent automatically handles shouldComponentUpdate() with a shallow prop and state comparison. This can improve performance by avoiding unnecessary renders.

Where it might break: If a component uses deep nested data structures, PureComponent might not re-render when deep data changes, because the shallow comparison won't detect changes in deeper levels of an object or array.

2. If you return false from shouldComponentUpdate(), the component will skip updates, including the context changes. This means even if the context data your component consumes changes, it won’t re-render to reflect them.

3. a> CallBacks : The parent component passes a function as a prop to the child component and the child component calls this function with the data as an argument.
   b> Lifting State Up : Finding a common parent and lifting the state to that component
   c> Context API/Redux : Can use React's Context for Redux to pass the values

4. a> React.memo
   b> shoudlComponentupdate

5. Fragments allows us wrap multiple elements returned by a component without introducing a surrounding element like a div.

   Where it might break : It may cause styling issue if the surrounding css expects elements to be wraped in a single node

6. a> withRouter from react router
   b>connect function from redux
   c> withStyles : used from materia ui for custom styling

7. Promises uses .catch() to handle expcetions whereas callbacks handle errors through the first argument thats provided and async await uses try catch block to handle the expcetion

8. setState takes two arguments , first being the new state and the second is the optional callback which executes after the state has been updated. It’s asynchronous to optimize performance and ensure batch processing of state updates.

9. a>. convert the state to useState hook
   b> replace the lifecycle methods with the useEffect hook
10. inline styling, css modules, styled components

11. we can use dangerouslySetInnerHTML for the same.
