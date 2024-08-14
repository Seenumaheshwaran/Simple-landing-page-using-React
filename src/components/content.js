import React from "react";
import ReactDOM from "react-dom";
import './content.css';

function Table(){
    return (
        <div className="table">
            <tr>
                <th>S.no</th>
                <th>Name</th>
                <th>Department</th>
                <th>College Name</th>
                <th>Year of Passing</th>
            </tr>
            <tr>
                <td>1</td>
                <td>Seenu</td>
                <td>IT</td>
                <td>HICET</td>
                <td>2025</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Niroo</td>
                <td>IT</td>
                <td>HICET</td>
                <td>2025</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Bharath</td>
                <td>IT</td>
                <td>HICET</td>
                <td>2025</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Ajay</td>
                <td>IT</td>
                <td>HICET</td>
                <td>2025</td>
            </tr>
        </div>
    );
}

function Form(){
    return(
        <div className="forms">
            <form>
            <label>Username :</label>
            <input type="text" name="firstname" placeholder="Enter your Firstname.."></input>
            <label>Password :</label>
            <input type="text" name="lastname" placeholder="Enter your Password.."></input>
            <div className="buttons">
                <button type="submit" id="btn1">Submit</button>
                <button type="cancel" id="btn2">Cancel</button>
            </div>
            </form>
        </div>
        );
}

function Body(){
    return(
        <div>
        <Table/>
        <Form/>
        </div>
    );
}
export default Body;