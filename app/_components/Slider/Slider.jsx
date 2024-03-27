"use client"

import React, { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { unis } from '@/lib/data'
import Image from 'next/image'

export default function Slider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className='embla rounded-xl'>
      <div className="embla__viewpor h-56 max-w-full rounded-xl" ref={emblaRef}>
        <div className="embla__container">
          {unis.map((uni, index)=>{
            {uni.images.map((item, i)=> {
              return (
                <div className="embla__slide">
                {console.log(item)}
                {/* <Image
                        src="/logo.png"
                        width={160}
                        height={70}
                        alt="logo"
                        style={{
                            aspectRatio: "150/55",
                        }}
                    /> */}
              </div>
              )
            })}
          })}
          {/* <div className="embla__slide">Slide 1</div> */}
          {/* <div className="embla__slide">Slide 2</div> */}
          {/* <div className="embla__slide">Slide 3</div> */}
        </div>
      </div>

      {/* Buttons */}
      <button className="embla__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button>

    </div>
  )
}