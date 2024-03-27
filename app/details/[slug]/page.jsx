import Slider from "@/app/_components/Slider/Slider"
import '@/app/_components/Slider/embla.css'
import { unis } from "@/lib/data";

const OPTIONS = { dragFree: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const Details = ({params}) => {
    console.log({params})
    return (
        <div>
            Details of {params.slug}
            <Slider slides={unis} options={OPTIONS}  />
        </div>
    );
}

export default Details;