import { Link } from "react-router-dom"
import AuthBanner from "./AuthBanner"
import SocialAuth from "./SocialAuth"

const Register = () => {
    return (
        <div className='min-h-screen flex items-center bg-[rgb(243,244,246)]'>
            <div className='w-250 h-160 m-auto flex bg-[rgb(59,3,227)] relative'>
                {/* Left Part */}
                <AuthBanner />

                {/* Right Part */}
                <div className='w-[77%] h-full rounded-l-4xl bg-white shadow-2xl flex items-center justify-center'>
                    <div className="w-140 pl-25">
                        <h1 className="text-2xl font-bold mb-6">Create Account</h1>

                        <form className="flex flex-col gap-4">
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <label className="text-xs text-gray-500 mb-1 block">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-purple-600"
                                    />
                                </div>
                                <div className="flex-1">
                                    <label className="text-xs text-gray-500 mb-1 block">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-purple-600"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-xs text-gray-500 mb-1 block">Email</label>
                                <input
                                    type="email"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-purple-600"
                                />
                            </div>

                            <div>
                                <label className="text-xs text-gray-500 mb-1 block">Password</label>
                                <input
                                    type="password"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-purple-600"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gray-900 text-white py-2.5 rounded-md text-sm font-medium hover:bg-gray-800 cursor-pointer transition"
                            >
                                Create Account
                            </button>
                        </form>

                        <p className="text-sm text-gray-500 mt-4">
                            Already have an account?
                            <Link to="/login" className="ml-3 text-purple-600 font-medium hover:underline">Login</Link>
                        </p>

                        <SocialAuth />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register