import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
// import GlobalApi from "@/lib/GlobalApi";
import Image from "next/image";
import { unis } from "@/lib/data";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import CardItem from "../Card/CardItem";


export default async function Degree() {

    //   const uniList = await GlobalApi.getUnis();
    //   console.log(uniList[0].name)

    return (
        <div className="px-8 min-w-[380px]">
            <h2 className="text-2xl font-bold mb-4">Earn Your Degree</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            
                {unis.map((uni, index) => index < 4 && (
                    <CardItem data={uni} key={index} />
                ))}

            </div>
            <Button className="mt-4" variant="outline">
                Show 8 more
            </Button>
        </div>
    )
}

