function Hexfield(props) {

    const { onChange: handleChange } = props;
    const { value } = props;

    return (
        <label htmlFor="hex" className="Hex-field">
            <input className="Hex-input" id="hex" name="hex" type="text" onChange={handleChange} defaultValue={value} />
        </label>
    )
}

export default Hexfield;