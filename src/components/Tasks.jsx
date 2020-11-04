const Tasks = props => {
    const {task, handleToggleCheck, handleDestroyTask, idx} = props;
    return (
        <div className="card">
            <div className="card-body">
                <h2 className="card-title" style={task.isCompleted ? {textDecoration: "line-through"} : null}>{task.title}</h2>
                <div className="form-group">
                    <input 
                        type="checkbox" 
                        className="form-control"
                        checked={task.isCompleted}
                        onChange={(e) => handleToggleCheck(e, idx)}
                    />
                </div>
                {
                    task.isCompleted ? <button className="btn btn-danger" onClick={(e) => handleDestroyTask(e,idx)}>DELETE</button> : null
                }
            </div>
        </div>
    )

}

export default Tasks;