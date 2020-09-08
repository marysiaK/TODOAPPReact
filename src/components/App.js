import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./App.css";

class App extends Component {
  counter = 9;
  state = {
    tasks: [
      {
        id: 0,
        text: "add",
        date: "2020-05-15",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "kupic...",
        date: "2020-06-12",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "zrobić obiad",
        date: "2020-05-08",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: "posprzątac w kuchni",
        date: "2020-05-20",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        text: "nauka",
        date: "2020-05-10",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 5,
        text: "wyjsc z psem",
        date: "2020-08-11",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 6,
        text: "pomóc w ogrodzie",
        date: "2020-05-09",
        important: true,
        active: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    console.log("delete elementu o id " + id);
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex(task => task.id === id);
    // tasks.splice(index, 1);
    // this.setState({
    //   tasks
    // })

    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks,
    });
  };

  changeTaskStatus = (id) => {
    console.log("change w stanie elementu o id " + id);
    const tasks = Array.from(this.state.tasks);
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks,
    });
  };

  addTask = (text, date, important) => {
    // console.log("dodany obiekt");
    const task = {
      id: this.counter,
      text, // tekst z inputa
      date, //tekst z inputa
      important, //wartość z inputa
      active: true,
      finishDate: null,
    };
    this.counter++;
    console.log(task, this.counter);

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));

    return true;
  };

  render() {
    return (
      <div className="App">
        <h1>TODO APP</h1>
        <AddTask add={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
