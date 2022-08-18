import { useState, useEffect } from "react"

export const getImage = (imgUrl) => new URL(`/src/assets/${imgUrl}`, import.meta.url).href

export const PrestrainOutImg = ({ imgUrl }) => {
  const [loadingOk, setLoadingOk] = useState(false)

  useEffect(()=>{
    var image = new Image()
    image.src = `${imgUrl}`
    image.onload = () => setLoadingOk(true)
  }, [])

  return ( loadingOk ? <img className="h-full w-full" src={getImage(imgUrl)} alt="" /> : <div className="h-full w-full animate-pulse bg-slate-200"></div> )
}