import Image from "next/image";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";


const NavbarProfile = () => {
    const { isSignedIn } = useUser();

    return (
        <div className="hidden sm:flex sm:col-start-5 lg:flex flex-row lg:col-start-12 gap-2 place-items-center place-content-center justify-center items-center">

                    {isSignedIn ? (
                        <UserButton />
                    ):(
                        <Link href={"/sign-in"}>
                        Login
                    </Link>
                    )}
                    

                    {/* <Image
                    src="/profile.png"
                    width={45}
                    height={45}
                    alt="logo"
                /> */}





        </div>
    );
}

export default NavbarProfile;