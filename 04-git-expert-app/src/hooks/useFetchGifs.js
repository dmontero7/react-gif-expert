import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading,setIsloading] = useState(true);
    const getImages = async () => {
        const newImages = await getGifs(category)
        setImages(newImages);
    }
    useEffect(() => {
        getImages();
        setIsloading(false);
    }, [])
  return {
    images,
    isLoading
  }
}
