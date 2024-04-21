
const Input = ({ label, type ,register,registerName}) => {
    return (
        <div className="w-full mb-3">
            <label className='text-sm font-normal text-[#596579]'>{label}</label>
            <input
                type={type}
                required
                {...register(`${registerName}`)}
                className="mt-1 px-3 py-1 border rounded-lg text-sm font-normal text-[#596579] w-full"
            />
        </div>
    )
}

export default Input
