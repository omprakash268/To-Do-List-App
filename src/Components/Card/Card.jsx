import React, { useState } from 'react';
import './card.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ToDoList from './ToDoList';






const Card = () => {

    const [inputData, setinputData] = useState();

    const [items, setItems] = useState([]);


    // Autocall whenever user input any data in input field and set that data into inputData
    const inputChange = (event) => {
        const value = event.target.value;
        setinputData(value);
    }


    // Add new item into old or existing items in the form of array
    const addItem = () => {
        setItems((oldItems) => {
            return [...oldItems, inputData];
        });
        setinputData(" ");
    }

    // Delet item on click cross button or icon
    const deleteItem = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            });
        });
    }

    // on press enter than call the add item;

    // document.getElementById("myInput").addEventListener("keyup",(event)=>{
    //     console.log(event);

    // });


    return (
        <>
            <div className="my-main-card">
                <div className="heading">
                    <h2>To Do List</h2>
                </div>
                <div className="input-add-icon">
                    <input type="text" id="myInput" value={inputData} onChange={inputChange} className="input-field" />
                    <AddCircleIcon onClick={addItem} className="add-icon" />
                </div>
                <div className="all-items">
                    <ul>
                        {
                            // using map method for calling all items present in the array named items one by one automatically

                            items.map((val, index) => {
                                return <ToDoList onSelect={deleteItem} key={index} id={index} data={val} />
                            })}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Card;