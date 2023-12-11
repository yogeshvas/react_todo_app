import Todo1 from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./App.css";
import ToDoItems from "./components/ToDoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const initalsTodoItems = [];

  const [todoItems, setToDoItems] = useState(initalsTodoItems);
  const handleNewItem = (itemName, itemDueDate) => {
    const newToItems = [...todoItems, { name: itemName, dueData: itemDueDate }];
    setToDoItems(newToItems);
  };

  const handleDeleteItem = (toItemName) => {
    const newToDoItem = todoItems.filter((item) => item.name != toItemName);
    setToDoItems(newToDoItem);
  };
  return (
    <center className="todo-container">
      <AppName />

      <Todo1 onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <ToDoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
