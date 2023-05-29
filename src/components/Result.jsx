import { useEffect,useState } from "react"


export default function Result({fileName}) {
    const [genre, setGenre] = useState(null);
    useEffect(()=>{
        if(fileName.indexOf("pop")!=-1){
            setGenre("POP");
        }
        else if(fileName.indexOf("jazz")!=-1){
            setGenre("JAZZ")
        }
        else{
            setGenre("general")
        }
    }, [])
  return (
    <div style={{fontSize:"42px", textAlign:"center"}}>The Music genre of "{fileName}" is: <span style={{textDecoration:"underline"}}>{genre}</span></div>
  )
}