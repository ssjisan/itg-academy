import { useState } from "react";

export default function ImageLoader() {
    const [loaded, setLoaded] = useState(false);
    const handleLoad = () => {
        setLoaded(true);
      };
    
    return (
        {
            handleLoad, loaded
        }
    )
}
