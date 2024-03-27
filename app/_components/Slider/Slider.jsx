"use client"

import React, { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { SliderImages, unis } from '@/lib/data'
import Image from 'next/image'

export default function Slider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className='embla rounded-xl '>
      <div className="embla__viewport max-w-lg mx-auto md:mx-0 rounded-xl" ref={emblaRef}>
        <div className="embla__container grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2">

          {unis.map((item, index)=>(
            <div className="embla__slide h-72 cursor-pointer">
            <Image
            src={item.images[index]}
            width={450}
            height={450}
            alt="logo"
            style={{
              aspectRatio: "450/155",
            }}
            className='h-full rounded-xl border'
        />
        </div>
            // <span>{item.images[0]}</span>
          ))}

          {/* {SliderImages.map((slide, index) => (
            <div className="embla__slide h-72">
              <Image
                src={slide.url}
                width={450}
                height={450}
                alt="logo"
                style={{
                  aspectRatio: "450/155",
                }}
                className='h-full rounded-xl border shadow-md'
              />
            </div>
          ))} */}
          {/* <div className="embla__slide">Slide 1</div> */}
          {/* <div className="embla__slide">Slide 2</div> */}
          {/* <div className="embla__slide">Slide 3</div> */}
        </div>
      </div>

      {/* Buttons */}
      <button className="embla__prev hidden" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next hidden" onClick={scrollNext}>
        Next
      </button>

    </div>
  )
}