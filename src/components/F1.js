import Axios from "axios";
import { useEffect, useState } from "react";

function F1(){

    const [data,setData]=useState([])

    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if(res.status===200){
                setData(res.data);
            }
            else{
                Promise.reject();
            }
        })
        .catch((error)=>alert(error));
    },[])


    const ListNames = () =>{
        return data.map((val)=>{
            return <h1>{val.name}</h1>
        })
    }
    return(
        <div>
            <h1>Hello Mit123</h1>
            {ListNames()}

        </div>
    )
}

export default F1;

// echo "# test15" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Mit-bh02/test15.git
// git push -u origin main