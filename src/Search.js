import './Search.css';

const Search=(props)=>{
    const changeSearch=(e)=>{
        e.preventDefault();
        props.changeHandler(e.target.value);
    }
    
    return(
        <div class="search_bar">
            <input type="text" placeholder="    Search" class="search" onChange={changeSearch}></input>
        </div>
    );
}

export default Search;