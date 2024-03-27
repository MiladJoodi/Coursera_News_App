
import Slider from "@/app/_components/Slider/Slider";
import { unis } from "@/lib/data";


const Details = ({ params }) => {
    console.log({ params })

    const singleUni = unis.find((item)=> {
        return (item.slug === item.slug)
    })
    
    return (
        <div className="flex flex-col px-4 text-l">
            <h2 className="text-xl font-semibold col-span-full py-2">{params.slug}</h2>
            <h2>{singleUni.title}</h2>
            <Slider />
        </div>
    );
}

export default Details;