/*
use fetch is more equipped if u actually have an auth layer

i could sipmly just do a utility function but okay
*/

import { useState } from "react";
const API_URL = import.meta.env.VITE_API_URL;


export function useFetch(){
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState("");
    const [data,setData] = useState({});

    // const response = await fetch()

    const myFetch = async(url,options,content_type=true)=>{
        setLoading(true);
        try{ 
            const response = await fetch(API_URL+url,{
                headers:{
                    ...(content_type?{"Content-Type":"application/json"}:{})
                },
                mode:"cors",
                ...options
            });

            const json = await response.json();
            
            // console.log("response is : ",response);
            if (!response.ok){
                console.log("AN ERROR HAS OCCURED!!!")
                setLoading(false);
                setError("An error occured")
                return false;
            } else{
                // console.log("no issue what so ever!")
                setLoading(false);
                setData(json)
                return true
            }
        } catch(error){
            console.log("Error connecting to Server")
            setError("Internal Server Error")
            setLoading(false);
            return false
        }
    }
    return {data,setData,error,loading,myFetch,setError};

}
//use fetch returns 
/*
option A
a promise 

option B 
data, is fetching 
*/