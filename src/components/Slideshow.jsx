import { useState, useEffect, useRef } from "react";

function Slideshow() {
    const imgs = [
        <img src = "https://i.imgur.com/x93fTj6.jpg" />, <img src = "https://i.imgur.com/lhQY1vO.jpg" />, <img src = "https://i.imgur.com/g3wlmWA.jpg" />
    ];
    const delay = 2700;

    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
        () =>
            setIndex((prevIndex) =>
            prevIndex === imgs.length - 1 ? 0 : prevIndex + 1
            ),
        delay
        );

        return () => {
        resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
        <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
            {imgs.map((backgroundColor, index) => (
            <div
                className="slide"
                key={index}
                style={{ backgroundColor }}
            ></div>
            ))}
        </div>

        <div className="slideshowDots">
            {imgs.map((_, idx) => (
            <div
                key={idx}
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                setIndex(idx);
                }}
            ></div>
            ))}
        </div>
        </div>
    );
}

export default Slideshow