"use client"
import { useRouter } from "next/navigation";
import { useState } from "react"

const AddUni = () => {

    const router = useRouter();

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [slug, setSlug] = useState("");
    const [rank, setRank] = useState(0);
    const [address, setAddress] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();
        console.log("first")
        if (!title || !desc || !slug || !rank || !address || !image) {
            alert("All field in requied")
            setLoading(false)
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/unis", {
                method: 'POST',
                header: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, slug, rank, image, address, desc })
            })
            if (res.ok) {
                setLoading(false)
                router.push("/")
            } else {
                throw new Error("Failed to create a post.")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className="bg-gray-100">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div className="lg:col-span-2 lg:py-12">
                        <p className="text-center max-w-xl text-xl font-bold text-pink-600">
                            This is a trial version <br /> You can add an item.
                        </p>
                    </div>

                    <div className="rounded-lg bg-white p-4 shadow-lg lg:col-span-3 lg:p-12">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="sr-only" htmlFor="name">Name</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-4 text-lg border"
                                    placeholder="University Name"
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>

                            <div>
                                <label className="sr-only" htmlFor="name">Address</label>
                                <input
                                    className="w-full rounded-lg border-gray-200 p-4 text-lg border"
                                    placeholder="Address"
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <label className="sr-only">Slug</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-4 text-lg border"
                                        placeholder="Unique slug"
                                        type="text"
                                        id="slug"
                                        name="slug"
                                        value={slug}
                                        onChange={(e) => setSlug(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label className="sr-only">Image</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-4 text-lg border"
                                        placeholder="Image link"
                                        type="text"
                                        id="image"
                                        name="image"
                                        value={image}
                                        onChange={(e) => setImage(e.target.value)}
                                    />
                                </div>

                                <div>
                                    <label className="sr-only" htmlFor="phone">Rank</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-4 text-lg border"
                                        placeholder="Rank"
                                        type="number"
                                        id="rank"
                                        name="rank"
                                        value={rank}
                                        onChange={(e) => setRank(e.target.value)}
                                    />
                                </div>
                            </div>


                            <div>
                                <label className="sr-only" htmlFor="message">Descripton</label>

                                <textarea
                                    className="w-full rounded-lg border-gray-200 p-4 text-lg border"
                                    placeholder="Descripton"
                                    rows="8"
                                    id="message"
                                    name="desc"
                                    value={desc}
                                    onChange={(e) => setDesc(e.target.value)}
                                ></textarea>
                            </div>

                            <div className="mt-4">
                                <button
                                    type="submit"
                                    className="w-full rounded-lg bg-black px-5 py-3 font-medium text-white flex justify-center items-center"
                                >
                                    {loading ?
                                    <div className="flex gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${loading ? "animate-spin" : ''}`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                  </svg>   
                                  Loading
                                    </div>                                 
                                    :
                                   "Submit"
                                     }
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AddUni;