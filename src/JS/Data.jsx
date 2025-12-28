import { useState } from "react";

export default function Data(){

        const object = [
            { id: 1, name: "Aman",cate:"male"},
            { id: 2, name: "Priya",cate:"female"},
            { id: 3, name: "Rohit",cate:"male"},
            { id: 4, name: "Neha",cate:"male"},
            { id: 5, name: "Karan",cate:"female"},
            { id: 6, name: "Simran",cate:"male"},
            { id: 7, name: "Aditya",cate:"female"},
            { id: 8, name: "Anjali",cate:"male"},
            { id: 9, name: "Rahul",cate:"female"},
            { id: 10, name: "Pooja",cate:"male"}
            ];

   
    let [data,setData]=useState(object)

    const filterData=()=>{
        const data=object.filter(object=>object.cate ==="male")
        setData(data)
    }

    const reset=()=>{
        setData(object);
    }
    



    return(
        <>
        <div>

         <button onClick={filterData}>data</button>
         <button onClick={reset}>reset</button>

        {data.map((item,index)=>{
            return(
                <div key={index.id}>
                      <p>{item.name}</p>
                </div>
              
            )
        })}

        </div>
        
        </>
    )
}