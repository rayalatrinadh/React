12. what does Lifting Up State mean ? 
Ans : **Lifting up State : As we know in React the hard rule is that the data flow is one direction(parent to child) and it does allow the data flow from child to parent or sideways so whenever the same state is used by multiple components how can we pass the state in between the siblings components. 
so the logic is that we need to move that state from the child component to the parent component ( NOTE : This parent component is act as parent for both the components(sibling components))
so we  are moving the state to up so, called the Lifting up State.

what is Component Composition ? 
Ans : 
1. what happens if we include one component into another component 
look this slide 129/365 theory-slide
 Component Composition Ans : 
    *Component Composition : is a Technique to combining different components using the children prop (or explicitly defined props)
  When we use Component Composition, we can
   1. to Create highly reusable and flexible components
   2. to Fix prop drilling (great for layouts)

114. Passing Elements as Props (Alternative to Children)
       *Instead of implicit children prop using element 
