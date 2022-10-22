// write your CatList component here
export default function CatList( {id, pic}){
    console.log(pic)
    return(
        <>
        <img src={pic} alt={id} />
        </>
    )
}