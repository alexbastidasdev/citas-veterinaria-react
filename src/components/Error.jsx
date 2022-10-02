const Error = ({ mensaje }) => {
    return (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-2 mb-3" role="alert">
            <p className="font-bold text-center">{mensaje}</p>
        </div>
    )
}

export default Error;