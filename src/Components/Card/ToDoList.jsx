import React from 'react';
import CancelIcon from '@mui/icons-material/Cancel';

const ToDoList=(props)=>{
    return(
        <>
        <div className="item-box">
        <CancelIcon 
        onClick={()=>{
            props.onSelect(props.id);
        }} 
        className="cancle-item" />
         <li className="list-item-name"> {props.data} </li> 
        </div>
        </>
    );
}


export default ToDoList;