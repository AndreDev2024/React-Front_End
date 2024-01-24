import React, {useState} from 'react';

export const NewTodoForm: React.FC<{addTodo: Function}> = (props) =>{
    const[description, setDescription] = useState('');
    const[assigned, setAssigned] = useState('');
    const submitTodo = () => {
        if(description !== '' && assigned !== ''){
            props.addTodo(description, assigned);
            setDescription('');
            setAssigned('');
        }
    }

    const descriptionChange = (event) => {
        console.log('description', event.target.value);
        setDescription(event.target.value);
    }

    const assignedChange = (event) => {
        console.log('assigned',event.target.value);
        setAssigned(event.target.value);
    }

    return(
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label htmlFor="description">Description</label>
                    <input type="text" 
                    className="form-control" 
                    id="description" 
                    placeholder="Enter description" 
                    onChange={e => setDescription(e.target.value)} 
                    value={description}
                    required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="assigned">Assigned</label>
                    <input type="text" 
                    className="form-control" 
                    id="assigned" 
                    placeholder="Enter assigned" 
                    onChange={e => setAssigned(e.target.value)} 
                    value={assigned}/>
                </div>
                <button 
                type="button" 
                className="btn btn-primary mt-3" 
                onClick={submitTodo}>
                    Submit
                </button>
            </form>
        </div>
    )
}