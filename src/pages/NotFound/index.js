import React,  { useEffect } from "react";
import
 classes from "./NotFound.module.css";
import { useHistory } from "react-router-dom";


const NotFound = () => {
    const history = useHistory();
    
    useEffect(()=>{
        const timeId = setTimeout(()=>{
            history.push('/');
        },1200);

        return ()=>{
            clearTimeout(timeId);
        }
    }, [])
    
    return (
    <div className={classes.notFoundContainer}>
      <p className={classes.notFound}>Page does not exist.</p>
      <p className={classes.notFound}>......Redirecting you!!</p>
           
    </div>
  );
};
export default NotFound;
