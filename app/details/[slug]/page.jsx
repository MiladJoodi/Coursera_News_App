
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


                <div className="flex text-xl items-center gap-2 p-2 flex-auto">
                    <p className="bg-[#F9F2F4] rounded-lg py-1 px-4">Name</p>
                    <p className="bg-[#F9F2F4] rounded-lg py-1 px-4 font-semibold">Harvard University</p>
                </div>

                <div>
                    Location
                </div>


            </div>
        </div>
    );
}

export default Details;