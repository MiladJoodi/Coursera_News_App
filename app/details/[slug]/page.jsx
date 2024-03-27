import Slider from "@/app/_components/Slider/Slider";
import { unis } from "@/lib/data";
import Autoplay from 'embla-carousel-autoplay'


const Details = ({ params }) => {
    const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()])

    console.log({ params })
    return (
        <div className="flex flex-col px-4 text-l">
            <h2 className="text-xl font-bold col-span-full py-2">{params.slug}</h2>
            <Slider />
        </div>
    );
}

export default Details;