# Memoized components

Components rerender when their props or state change, or when their parents rerender.

We can ensure that a component only rerenders if its own props change, by wrapping it in the `React.memo` HOC.

A memoized component will not rerender just because its parent rerendered.

This app demonstrates the behaviour of memoized components. Open the console and type in the input field. You will see that the un-memoized Output component logs every time you update the input.
This is because the App component's state is changing on every input change and it is rerendering Output.

In contrast, MemoizedOutput only renders on the first render and sometimes when you press the update button. It will only render if the input value has changed since the last time you pressed "Update".