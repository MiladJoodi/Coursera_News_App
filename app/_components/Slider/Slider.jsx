"use client"

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './SliderArrowButtons'
import { unis } from "@/lib/data";
import Image from 'next/image';



const Slider = (props) => {
    console.log(props.slides)
    const { slides, options } = props
    const allSlides = props.slides

    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const [scrollProgress, setScrollProgress] = useState(0)
  
    const {
      prevBtnDisabled,
      nextBtnDisabled,
      onPrevButtonClick,
      onNextButtonClick
    } = usePrevNextButtons(emblaApi)
  
    const onScroll = useCallback((emblaApi) => {
      const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
      setScrollProgress(progress * 100)
    }, [])
  
    useEffect(() => {
      if (!emblaApi) return
  
      onScroll(emblaApi)
      emblaApi.on('reInit', onScroll)
      emblaApi.on('scroll', onScroll)
    }, [emblaApi, onScroll])

    return (
         <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {allSlides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                {slide.images.map((item, index)=>{
                    <h1>{item}</h1>
                }
                    
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__progress">
          <div
            className="embla__progress__bar"
            style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
          />
        </div>
      </div>
    </div>
    );
}

export default Slider;