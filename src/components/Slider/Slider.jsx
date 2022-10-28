import React, {useEffect, useRef, useState} from 'react';

const Slider = ({children}) => {
    let prevRef = useRef();
    let nextRef = useRef();
    let slideRef = useRef();
    const [leftCurrentValue, setLeftCurrentValue] = useState(0);

    const onHandleClick = (e) => {
        const myPrevRef = prevRef.current;
        const myNextRef = nextRef.current
        const mySlideRef = slideRef.current
        if (e.currentTarget === myNextRef) {
            if (mySlideRef.style.left === "-4800px") {
                myNextRef.style.opacity = 0;
                myNextRef.style.cursor = "initial"
            } else {
                setLeftCurrentValue(leftCurrentValue - 300)
            }
            if (mySlideRef.style.left !== "-300px") {
                myPrevRef.style.opacity = 0.7;
                myPrevRef.style.cursor = "pointer"
            }
        }
        if (e.currentTarget === myPrevRef) {
            if (mySlideRef.style.left === "-300px"){
                setLeftCurrentValue(leftCurrentValue + 300)
                myPrevRef.style.opacity = 0;
                myPrevRef.style.cursor = "initial"
            }
            if (leftCurrentValue < - 300) {
                setLeftCurrentValue(leftCurrentValue + 300)
            }
        }
    }

    return (
        <>
            <div className="prev-movies" onClick={(e) => onHandleClick(e)} ref={prevRef}>
                <i className="fas fa-chevron-left"></i>
            </div>
            <div
                className="row-inner"
                style={{left: `${leftCurrentValue}px`}}
                ref={slideRef}
            >
            {children}
            </div>
            <div className="next-movies" onClick={(e) => onHandleClick(e)} ref={nextRef}>
                <i className="fas fa-chevron-right"></i>
            </div>
        </>
    );
}

export default Slider;