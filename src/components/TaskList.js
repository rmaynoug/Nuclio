import TaskItem from './taskItems';


function TaskList( {tasks} ){
   
    const items = tasks.map(task => <TaskItem {...task}/>);
    return (
        <ul>
           {items}
        </ul>
    )
}

export default TaskList;