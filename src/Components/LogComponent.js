import React, { useState } from 'react';
import axios from 'axios';
import { Table } from 'reactstrap';
function Log(props)
{
    let [permit,setPermit] =  useState();
    const remove = (val)=>
    {
        axios.post("http://localhost:8000/api/stopwatch/delete", {
        stopwatch_id:val
      })
      .then(function (response) {
        console.log("ajax"+response);
      })
      .catch(function (error) {
        console.log(error);
      });     
      console.log("log "+val);  
    }
   
    return(
    <div>  
    {(props.list)?
    <div>

        <table id="students">
        <thead>
        <tr>
          <th>Saved Time</th>
        </tr>
        </thead>
        <tbody>
        {
            props.list.map (item =>(
                <div>
                <tr key={item.id}>
                
                <td>{item.time.hours}h{item.time.minutes}m{item.time.seconds}s{item.time.milliseconds}ms</td>
               
               
                </tr>
                </div>
            ))  
        }
      </tbody>
      </table>

    </div>
    
    
    :""}
   
    </div>
    );
}
export default Log;
// console.log("log component"+JSON.stringify(props.list))