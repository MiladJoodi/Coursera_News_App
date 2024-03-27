
import Slider from "@/app/_components/Slider/Slider";
import { unis } from "@/lib/data";


const Details = ({ params }) => {
    console.log({ params })

    const singleUni = unis.find((item) => {
        return (item.slug === item.slug)
    })

    return (
        <div className="px-4">
            <h2 className="text-xl font-semibold col-span-full py-2">{singleUni.title}</h2>

            <div className="flex flex-col md:flex-row text-l md:gap-6">
                {/* <h2 className="text-xl font-semibold col-span-full py-2">{params.slug}</h2> */}
                <Slider />

                <div>
                    <div>
                        <span>name</span>
                    </div>

                    <div></div>
                </div>

            </div>
        </div>
    );
}

export default Details;