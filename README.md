12. what does Lifting Up State mean ? 
Ans : **Lifting up State : As we know in React the hard rule is that the data flow is one direction(parent to child) and it does allow the data flow from child to parent or sideways so whenever the same state is used by multiple components how can we pass the state in between the siblings components. 
so the logic is that we need to move that state from the child component to the parent component ( NOTE : This parent component is act as parent for both the components(sibling components))
so we  are moving the state to up so, called the Lifting up State.
