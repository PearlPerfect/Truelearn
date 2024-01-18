import React from 'react'
import Image from 'next/image';
import student_one from './Images/Student_one.jpg'
import student_two from './Images/Student_two.jpg'
import student_three from './Images/student_three.jpg'
import student_four from './Images/student_four.jpg'
import student_five from './Images/student_five.jpg'
import student_six from './Images/student_six.jpg'

const Colors = ["#075985", "#059669", "#facc15", "#3f6212", "#dc2626", "#831843"];
const logo =[student_one,student_two,student_three, student_four, student_five,student_six ]
const delay = 1500;

export default function Slideshow() {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }
    
      React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === Colors.length - 1 ? 0 : prevIndex + 1
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
            {Colors.map((backgroundColor, index) => (
              <div
                className="slide"
                key={index}
                style={{ backgroundColor }}
              >
                <div className="slideProps">
                <Image src={logo[index]} alt='images'/>

                </div>
              </div>
            ))}
          </div>
    
          <div className="slideshowDots">
            {Colors.map((_, idx) => (
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

