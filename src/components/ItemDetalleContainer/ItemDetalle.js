export const ItemDetalle = ({item})=>{
    return(
        <div >
            <p>Item Datelle</p>
            <div>
                <img src={item.pictureUrl} alt={item.title}/>
            </div>



        </div>
    )
}