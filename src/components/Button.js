export default function Button({content, style, toggleRate}) {
    return (
        <button style={style} onClick={toggleRate}>{content}</button>
    );
}