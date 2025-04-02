import axios from "axios";
import { useState } from "react";

function ViewStudents(){

const[students, setStudents]=useState([]);

function getAllStudents(){

axios.get("http://localhost:8080/get_all_students")
     .then(res=>{

if(res.status===200){
    setStudents(res.data)
}

     })
     .catch(error=>console.log(error));

}

return <>
<h2>Student List:-</h2>
<button onClick={getAllStudents}>Show Students</button>

<table border={1} width="500px">
    <thead>
<tr>
    <th>ID</th>
    <th>Student Name</th>
    <th>Batch Number</th>
</tr>
</thead>

    <tbody>
{
    students.map(s=><tr>
        <td>{s.id}</td>
        <td>{s.name}</td>
        <td>{s.batchNumber}</td>
    </tr>)
}   
</tbody>
</table>
</>

}

export default ViewStudents;



