function TaskOverworkWarning({tasks}){
    let tasksLeft = tasks.filter(t => !t.completed).length;
    console.log(tasksLeft);
    return (tasksLeft >= 5)? <div className="warningMessage">Hay 5 o más tareas pendientes</div> : '';
};

export default TaskOverworkWarning;