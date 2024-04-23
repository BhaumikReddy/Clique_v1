import { useEffect, useState } from "react"
import axios from "axios"


const ImageBoard = () => {
  
  const [data,setData]=useState([])
  const getPhotos=async () => {
    const res = await axios.get("https://api.pexels.com/v1/photos/2014422", 
    {
      headers: {
        "Authorization": VITE_APP_API_KEY
      }
    })
    console.log(res)
    setData(res.data)
  }

  useEffect(() => {
    getPhotos();
  },[])

  return (
    <div>
    <h2 className="text-center">Explore <span className="badge rounded-pill bg-dark">Images</span></h2>  
    <img src={data?.src?.landscape} />    
    </div>
  )
}

export default ImageBoard
