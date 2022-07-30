function RGBfield(props) {

    const { hex } = props;
    const { error } = props;
    let r, g, b, ret;
    if (error) ret = "Ошибка!"
    else {
        r = parseInt(hex.substr(1, 2), 16);
        g = parseInt(hex.substr(3, 2), 16);
        b = parseInt(hex.substr(5, 2), 16);
        ret = `rgb(${r}, ${g}, ${b})`;
    }

    return (
        <div className="RGB-field">
            <p className="RGB-text">{ret}</p>
        </div>
    )
}

export default RGBfield;