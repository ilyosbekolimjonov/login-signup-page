import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className='w-full h-screen p-50 flex justify-between items-center'>
            <h1 className='text-6xl font-bold'>Home</h1>

            <p className="text-sm text-gray-500 mt-4">
                Don't have an account?
                <Link to="/register" className="ml-3 text-purple-600 font-medium hover:underline">Register</Link>
            </p>

            <p className="text-sm text-gray-500 mt-4">
                Already have an account?
                <Link to="/login" className="ml-3 text-purple-600 font-medium hover:underline">Login</Link>
            </p>

        </div>
    )
}

export default Home