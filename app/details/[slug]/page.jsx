
import Mapuni from "@/app/_components/Mapuni/Mapuni";
import Slider from "@/app/_components/Slider/Slider";
import { unis } from "@/lib/data";


const Details = ({ params }) => {
    console.log({ params })

    const singleUni = unis.find((item) => {
        return (item.slug === params.slug)
    })

    return (
        <div className="px-4 lg:px-20">
            <h2 className="text-xl font-semibold col-span-full py-2">{singleUni.title}</h2>

            <div className="flex flex-col text-l md:gap-6 space-y-4">
                {/* <h2 className="text-xl font-semibold col-span-full py-2">{params.slug}</h2> */}
                <div className="flex flex-col sm:flex-row ">
                    <Slider />

                    <div className="flex flex-col sm:items-start flex-1 bg-white rounded-lg shadow-md">
                        <div className="flex text-xl gap-2 p-2 md:px-4 lg:px-6sm:w-2/3 justify-between">
                            <p className="bg-[#F9F2F4] rounded-lg py-1 px-4 font-semibold">{singleUni.title}</p>
                            <span className="border p-2 h-10 w-10 rounded-full flex items-center justify-center font-semibold">{singleUni.rank}</span>
                        </div>
                        <p className=" md:px-4 lg:px-6 sm:w-2/3 col-span-full text-justify px-2 pr-6 text-gray-500 text-md h-content line-clamp-3 sm:line-clamp-none pb-4">{singleUni.desc}</p>

                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center rounded-lg">
                    {/* <p className=" sm:w-1/2 col-span-full text-justify px-2 pr-6 text-gray-500 text-md h-content line-clamp-3 pb-4">{singleUni.desc}</p> */}
                    <Mapuni className="rounded-lg" />

                </div>


            </div>
        </div>
    );
}

export default Details;