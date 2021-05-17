import React, {useEffect, useState, useRef} from 'react';

function TodoForm(props) {
    // const [input, setInput] = useState(props.edit?props.edit.value : "");
    const [input, setInput]=useState("");
    // const inputRef = useRef(null);

    // useEffect(() => {
    //    inputRef.current.focus();
    // });

    const handleChange=e=>{
        setInput(e.target.value);

    };
    const handleSubmit =e=>{
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
          });
          
        setInput("");
    }

    return (
        <div>
            <form className="todo-form" onSubmit={handleSubmit} onChange={handleChange}>
                <input
                className="todo-input"
                type="text"
                placeholder="Add Todo"
                name="text"
                val={input}>
                </input>
                <button className="todo-button">Add Todo</button>
            </form>
        </div>
    )
}

export default TodoForm
