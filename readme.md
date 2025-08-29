## ASSIGNMENT-005, Answer to the question
----------------------------
### 1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
-->1. getElementById("id")
Selects one element with a specific ID.

-->2. getElementsByClassName("className")
 Selects all elements with the given class name.

-->3. querySelector("selector")
Selects the first element that matches a CSS selector (id, class, tag, attribute, etc.).

-->4. querySelectorAll("selector")
Selects all elements that match a CSS selector.

### 2. How do you **create and insert a new element into the DOM**?
There are 3 steps to create and insert a new element into the DOM:
Select the container
--Creating an element code→variable = document.createElement("div").
--variable.innerText/innerHTML = `written inside code`;
--the container.append(writen container);

### 3. What is **Event Bubbling** and how does it work?

---Event bubbling is an event propagation mechanism where any event is first triggered, then step by step, parent → grandparent →document it propagates upwards.

When clicked on a button, the event will first happen on that button.
Then it will go to the container div above.
Then it will continue to go upwards until body → html → document.

## 4. What is **Event Delegation** in JavaScript? Why is it useful?
--Event Delegation is a technique where we place an event listener on the parent element instead of placing separate event listeners on child elements.
If there are many child elements, there is no need to set a separate event listener for each.
Performance is better (less memory required).
Events of dynamic elements can be caught from the parent.

### 5. What is the difference between **preventDefault() and stopPropagation()** methods?

1. preventDefault()
এটি event-এর default behavior বন্ধ করে।
একটি form submit করলে ডিফল্টভাবে পেজ reload হয়, কিন্তু preventDefault() দিলে reload হবে না।

2. stopPropagation()
এটি event-এর propagation  বন্ধ করে।
একটি button এর click event parent <div> পর্যন্ত bubble হয়ে যায়।
stopPropagation() দিলে event শুধু button এ trigger হবে, parent এ যাবে না।

