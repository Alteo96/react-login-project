
export const InputWithClean = ({ value, onChange, onClean, placeholder }) => {
    return (
        <div>
            <input type="text" value={value} onChange={onChange} placeholder={placeholder} />
            <button onClick={onClean}>Clean</button>
        </div>
    )
}