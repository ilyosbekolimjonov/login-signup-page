import googleIcon from "../assets/flat-color-icons_google.svg"
import facebookIcon from "../assets/logos_facebook.svg"

const SocialAuth = () => {
    return (
        <>
            <div className="flex items-center gap-7 my-5">
                <div className="flex-1 h-px bg-gray-300"></div>
                <span className="text-sm text-gray-400">or</span>
                <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            <div className="flex gap-4">
                <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2.5 text-sm hover:bg-gray-50 cursor-pointer transition">
                    <img src={googleIcon} alt="Google" className="w-5 h-5" />
                    Sign in with Google
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2.5 text-sm hover:bg-gray-50 cursor-pointer transition">
                    <img src={facebookIcon} alt="Facebook" className="w-5 h-5" />
                    Sign in with Facebook
                </button>
            </div>
        </>
    )
}

export default SocialAuth