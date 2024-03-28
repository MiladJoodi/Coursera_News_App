// import UniModel from "@/lib/Models";
import { Uni } from "@/lib/Models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export async function POST(request){
    const {title, desc, image, address, slug, rank} = await request.json();
    await connectToDb();
    await Uni.create({title, desc, image, address, slug, rank});
    return NextResponse.json({message : "Uni Created"})
}

export async function GET(){
    await connectToDb();
    const posts = await Uni.find();
    return NextResponse.json({posts})
}



// export async function GET(){
//     console.log("Geted ☺")
//     return NextResponse.json({message: "Geted"})
// }

// export async function POST(request) {
//     const { title, desc, image, addres, slug, rank } = await request.json()
//     await UniModel.create({title, description});
//     return NextResponse.json({message: "Uni Created!"})
// }