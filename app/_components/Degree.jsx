import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import GlobalApi from "@/lib/GlobalApi";
import Image from "next/image"

export default async function Degree() {

  const uniList = await GlobalApi.getUnis();
  console.log(uniList[0].name)

  return (
    <div className="bg-white p-8">
      <h2 className="text-2xl font-bold mb-4">Earn Your Degree</h2>
      <div className="grid grid-cols-4 gap-4">
        {uniList.map((uni, index)=>index<3 &&(
             <Card className="w-full" key={uni.id}>
             <Image
             src={uni.image}
             alt="University of Michigan"
             className="rounded-t-lg"
             height="150"
             width="250"
             style={{
                 aspectRatio: "250/150",
               }}
             />
           <CardContent>
             <div className="flex items-center space-x-2 mb-2">
               <Avatar>
                 <AvatarImage alt="University of Michigan" src="/placeholder.svg?height=24&width=24" />
                 <AvatarFallback>U</AvatarFallback>
               </Avatar>
               <div>
                 <div className="font-semibold">University of Michigan</div>
                 <div className="text-sm text-gray-500">Master of Public Health</div>
               </div>
             </div>
             <Button className="w-full mb-2" variant="secondary">
               Earn a degree
             </Button>
             <div className="text-sm text-gray-500">Degree</div>
           </CardContent>
         </Card>
        ))}

      </div>
      <Button className="mt-4" variant="outline">
        Show 8 more
      </Button>
    </div>
  )
}

