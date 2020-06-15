import React, {useState} from 'react';
import axios from 'axios';

import '../static/css/style.css'
import '../static/css/bootstrap.min.css'
import '../static/css/bootstrap-grid.min.css'
import '../static/css/bootstrap-reboot.min.css'
import '../static/css/all.min.css'
function Log(props) {
    let [permit, setPermit] = useState();
    const remove = (val) => {
        axios.post("http://localhost:8000/api/stopwatch/delete", {
            stopwatch_id: val
        })
            .then(function (response) {
                console.log("ajax" + response);
                console.log("item deleted")
                props.connect()
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            {
                props.list ?
                    <div>
                        {
                            props.list.map( item=> (
                                <div className="col-4 offset-4 timecard" key={item._id}>
                                        <div className="span-class">
                                            <p>{item.time.hours}h:{item.time.minutes}m:{item.time.seconds}s:{item.time.milliseconds} ms</p>
                                            <button type="button" className="btn btn-outline-danger" onClick={()=>{remove(item._id)}}>Delete <i className="fa fa-trash"></i> </button>
                                        </div>
                                </div>
                            ))
                        }
                    </div>
                    :""
            }
        </div>
    )
}

export default Log;
