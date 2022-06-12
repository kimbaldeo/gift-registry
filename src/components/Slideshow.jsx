import { useState, useEffect, useRef } from "react";


// "https://i.imgur.com/x93fTj6.jpg", "https://i.imgur.com/lhQY1vO.jpg", "https://i.imgur.com/g3wlmWA.jpg"

function Slideshow() {
    const images = [
    "#0088FE", "#00C49F", "#FFBB28"
    ];
    const delay = 2300
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null)

    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }

    useEffect(() => {
        resetTimeout()
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {resetTimeout()};
      }, [index]);
    
    return (
    <div className = "slideshow">
      <div className = "slideshowSlider" style = {{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
        {images.map((backgroundImage, index) => (
          <div className = "slide" key = {index} style = {{ backgroundImage }}/>
        ))}
      </div>
      <div className = "slideshowDots">
        {images.map((_, idx) => (
          <div key = {idx} className = {`slideshowDot${index === idx ? " active" : ""}`} onClick={() => {
            setIndex(idx);
          }}></div>
        ))}
      </div>
    </div>
    
  );
}

export default Slideshow