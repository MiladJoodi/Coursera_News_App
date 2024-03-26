import Image from "next/image";

const NavbarProfile = () => {
    return (
        <div className="hidden sm:flex sm:col-start-5 lg:flex lg:col-start-12 gap-2 place-items-center place-content-center justify-center items-center">
                <Image
                    src="/profile.png"
                    width={45}
                    height={45}
                    alt="logo"
                />
        </div>
    );
}

export default NavbarProfile;