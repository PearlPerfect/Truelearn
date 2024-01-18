import React from 'react'
import Image from 'next/image';
import styles from './slider.module.css'
import student_one from './Images/Music.jpg'
import student_two from './Images/life.jpg'
import student_three from './Images/tech.jpg'
import student_four from './Images/sport.jpg'
import student_five from './Images/politics.jpg'
import student_six from './Images/life.jpg'
import { BorderAllRounded } from '@mui/icons-material';


const Colors = ["#075985", "#059669", "#facc15", "#3f6212", "#dc2626", "#831843"];
const Texts = ["Music", "Life", "Tech", "Sport", "Politics", "Style"];
const logo =[student_one,student_two,student_three, student_four, student_five,student_six ]
const delay = 1500;

export default function AboutSlideshow() {
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
                <div className={styles.slideProps}>
                <h1 className='slideDes'>{Texts[index]}</h1>
                <Image src={logo[index]} alt='images' width={470} height={220} BorderAllRounded/>

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

