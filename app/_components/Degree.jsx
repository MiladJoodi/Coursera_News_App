import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
// import GlobalApi from "@/lib/GlobalApi";
import Image from "next/image";
import { unis } from "@/lib/data";

export default async function Degree() {

    //   const uniList = await GlobalApi.getUnis();
    //   console.log(uniList[0].name)

    return (
        <div className="px-8 min-w-[380px]">
            <h2 className="text-2xl font-bold mb-4">Earn Your Degree</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {unis.map((uni, index) => index < 4 && (
                    <Card className="w-full flex flex-col gap-3" key={uni.id}>
                        <Image
                            src={uni.image}
                            alt="University of Michigan"
                            className="rounded-t-lg w-full object-cover"
                            height="150"
                            width="450"
                            style={{
                                aspectRatio: "250/150",
                            }}
                        />
                        <CardContent>
                            <div className="flex justify-between">
                                <div className="flex items-start space-x-1 sm:space-x-2 mb-6 max-w-[80%]">
                                    <Avatar className="hidden sm:flex">
                                        <AvatarImage alt="University of Michigan" src="/placeholder.svg?height=24&width=24" />
                                        <AvatarFallback>U</AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col gap-2">
                                        <div className="font-semibold nowrap overflow-hidden text-ellipsis max-w-[250px] truncate">{uni.title}</div>
                                        <div className="text-sm text-gray-500 line-clamp-3 text-justify">{uni.desc}</div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-2 pt-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-600 cursor-pointer">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer opacity-70">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                                    </svg>
                                </div>


                            </div>
                            <Button className="w-full mb-2 flex gap-1" variant="secondary">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                </svg>
                                Earn a degree
                            </Button>
                            <div className="text-sm text-gray-500 line-clamp-1 flex gap-1">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                    </svg>
                                </div>
                                <div className="line-clamp-1">
                                    {uni.address}
                                </div>
                            </div>
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

