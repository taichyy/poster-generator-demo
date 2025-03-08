const BasicTextBox = ({ title, text }) => {
    return (
        <div>
            <h3 className=" font-semibold">{title}</h3>
            <h4>{text}</h4>
        </div>
    );
}

export default BasicTextBox;