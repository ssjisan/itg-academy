import { useRef } from "react";

export default function Testimonial() {
    const sliderRef = useRef();
    const nextSlide = () => {
        sliderRef.current.slickNext();
      };
    
      // Function to move to the previous slide
      const prevSlide = () => {
        sliderRef.current.slickPrev();
      };

    return (
        {
            sliderRef,nextSlide,prevSlide
        }
    )
}
