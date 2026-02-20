import logo from "../assets/logo.svg"
import illustration from "../assets/illustration.svg"

const AuthBanner = () => {
    return (
        <>
            {/* Left Part */}
            <div className='w-[33%] h-full px-7 py-5'>
                <img className="w-8" src={logo} alt="Logo" />
                <h2 className="text-white mt-8 m-auto text-4xl font-medium">Stay on top of time tracking</h2>
            </div>

            {/* Center image */}
            <img className="absolute h-85 top-52 left-12" src={illustration} alt="illustration" />
        </>
    )
}

export default AuthBanner