import React from 'react';

const Task = ({name=0,time=0}) => {
    return (
        <div>
            <li>{name} : {time}</li>
        </div>
    );
};

export default Task;