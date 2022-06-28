import { useEffect, useState } from "react";
import DisplayItem from "./DisplayItem";
import './Display.css';

const array=[
    {image:'ahmedabad.jpg', tag:['ahmedabad','gujarat','india']},
    {image:'delhi.jpg', tag:['delhi','capital','india']},
    {image:'motera.jpg', tag:['ahmedabad','stadium','india']},
    {image:'london.jpg', tag:['london','capital']},
    {image:'unity.jpg', tag:['statue','gujarat','ironman','tourism']},
    {image:'MCA.jpg', tag:['melbourne','capital','stadium','mca','australia']},
    {image:'liberty.jpg', tag:['statue','newyork','america']},
    {image:'ironman.jpg', tag:['marvel','ironman','avenger']},
    {image:'thor.jpg', tag:['thor','avenger']},
    {image:'captain.jpg', tag:['captain','ameria','avernger','marvel']}
    // {image:'.jpg', tag:['ahmedabad','gujarat','india']},
]


const Display=(props)=>{
    const [disArray,setDisArray]=useState(array);
    const tag=props.tag;

    
    let filteredArray=disArray;
    
    if(tag.length>0){
        filteredArray=disArray.filter(item=>{
            let tagArray=item.tag;
            for(let i=0;i<tagArray.length;i++){
                if(tagArray[i].includes(tag)) return true;
            }
            return false;
        });
    }  
        
    console.log(filteredArray);

    return (
        <div class="grid-con">
            {
                
                filteredArray.map((element,index) => {
                    return <DisplayItem key={index} item={element}></DisplayItem>  
                })
            }
        </div>
    );
}

export default Display;