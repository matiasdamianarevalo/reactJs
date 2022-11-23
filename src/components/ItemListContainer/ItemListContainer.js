
function ItemListContainer({name, surname}) {

return(
    <div>
         <h2>{name}</h2>
         <h2>{surname}</h2>
    </div>
    );
}



export default function App() {
    const obj = {name:'matias', surname:'arevalo'};

    return(
        <div>
            <ItemListContainer {...obj}/>
        </div>
    )

}
