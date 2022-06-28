import Search from "./Search";
import Display from "./Display";
import './Content.css';
import { useState } from "react";

const Content=()=>{
    const [searchTag,setSearchTag]=useState('');

    const changeSearchTag=(newTag)=>{
        setSearchTag(newTag);
    }

    return(
        <div class="container">
            <Search changeHandler={changeSearchTag}></Search>
            <Display tag={searchTag}></Display>
        </div>
    );
}

export default Content;