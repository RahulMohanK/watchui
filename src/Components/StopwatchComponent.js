import React from 'react';


function Stopwatch(props) {
  

  return (
    <div className="main-section">
        <div className="clock-holder">
            <div className = "stopwatch">


  
    <div>
    <span> {(props.time.hours<10)?"0"+props.time.hours:props.time.hours} </span>&nbsp;&nbsp;
    <span>{(props.time.minutes<10)?"0"+props.time.minutes:props.time.minutes}</span>&nbsp;&nbsp;
    <span>{(props.time.seconds<10)?"0"+props.time.seconds:props.time.seconds}</span>&nbsp;&nbsp;
    <span>{(props.time.milliseconds<10)?"0"+props.time.milliseconds:props.time.milliseconds}</span> &nbsp;&nbsp;
    
    </div>
    
   <div >
    {(props.status === 0)?
        <div>
            <button onClick={props.start} className="stopwatch-btn stopwatch-btn-blk"> Start </button>
        </div>: ""
    }
    { (props.status === 1)?
            <div>
            <button onClick={props.stop} className="stopwatch-btn stopwatch-btn-blk">Stop</button>
            <button onClick={props.reset} className="stopwatch-btn stopwatch-btn-blk"> Reset </button>
            <button onClick={props.save} className="stopwatch-btn stopwatch-btn-blk"> Save </button>
            
            </div>
        : ""
    }
     {(props.status === 2)? 
        <div>
          <button className="stopwatch-btn stopwatch-btn-blk"
                  onClick={props.resume}>Resume</button>
          <button className="stopwatch-btn stopwatch-btn-blk"
                  onClick={props.reset}>Reset</button>
          <button onClick={props.save} className="stopwatch-btn stopwatch-btn-blk"> Save </button>
        </div> : ""
      }
    </div>
            </div>
        </div>

</div>
   
    
    

  );
}

export default Stopwatch;