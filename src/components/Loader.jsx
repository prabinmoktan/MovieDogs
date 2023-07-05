import { useState, CSSProperties } from "react";
import {BeatLoader, ClipLoader} from "react-spinners";
const Loader =() =>{
const override = {      
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
return (
    <div className="d-flex justify-content-center items-center h-screen mt-lg-5 ">
        <BeatLoader 
        // color={'#ffffff'}
        loading={true}
        cssOverride={override}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
    
)
}

export default Loader                                                            