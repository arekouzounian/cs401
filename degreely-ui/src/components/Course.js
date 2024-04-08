import React, {useState}  from "react";

function Course ( props ) {

    const [selected, setSelected] = useState(false); 

    const handleClick = () => {
        console.log('clicked ' + props.code);
        setSelected(!selected);
    }

    return (
        <div onClick={handleClick}>
            Course: {props.code}
            {selected && 
            <div>
                <b>Students:</b>
                <ul>
                {props.students.map((student, index) => (
                    <li>{student.name}</li>
                ))}
                </ul>
            </div>}
        </div>
    )
}

export { Course }