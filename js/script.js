const ToDoList = new Vue ({
  name: "ToDo_List",
  el: "#todo-list",
  data: {
    newTask: "",
    tasks: [
      {text: "Fare la spesa", done: false},
      {text: "Studiare", done: true},
      {text: "Riordinare la stanza", done: false},
      {text: "Dare da mangiare al gatto", done: true},
      {text: "Aggiustare il ventilatore", done: true},
    ],
  },
  methods: {
    removeTask(i){this.tasks.splice(i, 1);},
    addNewTask(){
      this.tasks.push({text: this.newTask, done: false});
      this.newTask = "";
    },
    isTaskOngoing(task){task.done = !task.done},
  },
});
