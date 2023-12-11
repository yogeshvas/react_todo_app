import React from "react";
import TodoItem from "./TodoItem";

const ToDoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div>
      {todoItems.map((item) => (
        <TodoItem
          todoName={item.name}
          todoDate={item.dueData}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default ToDoItems;
