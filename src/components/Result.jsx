import { useEffect,useState } from "react"


export default function Result({fileName}) {
    const [genre, setGenre] = useState(null);
    useEffect(()=>{
        if(fileName.toLowerCase().indexOf("pop")!=-1){
            setGenre("POP");
        }
        else if(fileName.toLowerCase().indexOf("jazz")!=-1){
            setGenre("JAZZ")
        }
        else{
            setGenre("general")
        }
    }, [])
  return (
    <div style={{fontSize:"42px", textAlign:"center"}}>The Music genre is: <span style={{textDecoration:"underline"}}>{genre}</span></div>
  )
}