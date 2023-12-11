import { useState } from "react";

function Todo1({ onNewItem }) {
  const [task, setTask] = useState();
  const [date, setDate] = useState();
  const handleNameChange = (e) => {
    setTask(event.target.value);
  };
  const handleDateChange = (e) => {
    setDate(event.target.value);
  };

  const addData = () => {
    onNewItem(task, date);
    setDate("");
    setTask("");
  };
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={task}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={date} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success" onClick={addData}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todo1;
