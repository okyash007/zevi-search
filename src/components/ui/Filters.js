import React, { useRef } from "react";

const Filters = () => {

    let input = useRef( null )


    function check (){
        if( input.current.checked ){
            console.log("dispatch add")
        } else {
            console.log("dispatch remove")
        }
    }




  return (
    <div>
      <h1>filters</h1>
        <input type="checkbox" ref={input} onClick={()=> check()}/>
    </div>
  );
};

export default Filters;
