
import SimpleSlider from "@/app/_components/Slider/Slider";
import { unis } from "@/lib/data";


const Details = ({ params }) => {
    console.log({ params })
    return (
        <div className="flex flex-col px-4 text-l">
            <h2 className="text-xl font-bold col-span-full py-2">{params.slug}</h2>
            <SimpleSlider />
        </div>
    );
}

export default Details;