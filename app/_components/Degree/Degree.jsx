// import { Button } from "@/components/ui/button"
// import GlobalApi from "@/lib/GlobalApi";
import CardItem from "../Card/CardItem";


const getPosts = async ()=>{
    try {
        const res = await fetch("http://localhost:3000/api/unis",{
            cache: "no-store",
        });
        if(!res.ok){
            throw new Error ("Failed to fetch posts")
        }
        return res.json();
    } catch (error) {
        console.log(error);
    }
}


export default async function Degree() {

    //   const uniList = await GlobalApi.getUnis();
    //   console.log(uniList[0].name)

    const {posts} = await getPosts();
    // console.log(posts)

    return (
        <div className="px-4 min-w-[380px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <h2 className="text-2xl font-bold col-span-full">Earn a degree</h2>
                {posts.map((uni, index) => index < 4 && (
                    <CardItem data={uni} key={index} />
                ))}

            </div>
            <div className="mt-4" variant="outline">
                Show 8 more
            </div>
        </div>
    )
}

