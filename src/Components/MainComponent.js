import React,{  useState, useEffect} from 'react';
import Stopwatch  from './StopwatchComponent';
import  Log  from './LogComponent';
import axios from 'axios';
function Main()
{
  const initiallist = [];
  const [time, setTime] = useState({milliseconds:0, seconds:0, minutes:0, hours:0});
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const [list,setList] = useState(initiallist);
  const [record,setRecord] = useState({id:0});
  // Not started = 0
  // started = 1
  // stopped = 2

  useEffect(()=>
  {
    axios.get('http://localhost:8000/api/stopwatch')
  .then(function (response) {
    var data = response.data.data;
    
     setList(data);
    //  parsed(list);
    
    
    
    
    
  })
  .catch(function (error) {
   
    console.log(error);
  })
  .then(function () {
    
  });

  },[]);

  const start = () => {
    if(status !== 1)
    {// setList(list.concat(time));
    run();
    
    setStatus(1);
    setInterv(setInterval(run, 10));
    console.log(list);
    }
  };

  var changemilliseconds = time.milliseconds;
  var changeseconds = time.seconds;
  var changeminutes = time.minutes;
  var changehours = time.hours;
  var changerecord = record.id;
  
  const run = () => {
    if(changeminutes === 60){
      changehours++;
      changeminutes = 0;
    }
    if(changeseconds === 60){
      changeminutes++;
      changeseconds = 0;
    }
    if(changemilliseconds === 100){
      changeseconds++;
      changemilliseconds = 0;
    }
    changemilliseconds++;
    return setTime({milliseconds:changemilliseconds, seconds:changeseconds, minutes:changeminutes, hours:changehours});
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
     console.log("stop"+JSON.stringify(list));
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({milliseconds:0, seconds:0, minutes:0, hours:0})
  };

  const resume = () => start();

  const changer = ()=>
  {
    changerecord++;
      console.log("changedrecord"+changerecord);
      setRecord({id:changerecord});
  }
  const save = () =>
  {
      if(time)
      {
      // changer();
      setList(list.concat(
          {
              "date": Date.now(),
              "time": time
          }
      ));
      axios.post("http://localhost:8000/api/stopwatch", {
        time: time,
        date: Date.now()
      })
      .then(function (response) {
        console.log("ajax"+response);
      })
      .catch(function (error) {
        console.log(error);
      });     
      console.log(time);
      }
  }
  

   
        return(
            <div>
                <Stopwatch time={time} start={start} stop={stop} reset={reset} resume={resume} save={save} status={status}/>
                {(list.length >= 1)?<Log list={list}/>:<Log />}
                
            </div>
        );
    
}
export default Main;