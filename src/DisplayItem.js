import './DisplayItem.css';

const DisplayItem=({item})=>{
    const tags=item.tag;
    const name=item.image;
 
    return(
        <div class="card">
            
            <img src={require(`./images/${name}`)} />
            <div ckass="spans">
            {
                
                tags.map(tag => {
                    return <span>#{tag}</span>
                })
            }
            </div>
        </div>
    );
}

export default DisplayItem;