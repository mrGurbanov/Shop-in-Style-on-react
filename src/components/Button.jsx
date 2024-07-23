// export default function Button(props) {
//     return (
//         <button className="text-center bg-black text-white py-2 px-14 rounded-md">{(props.text)}</button>
//     )
// }


const button = ({...props}) => ({
    px: props.px,
    py: props.py,
    rounded: props.rounded,
    text: props.text,
    bgColor: props.bgColor,
    hoverBgColor: props.hoverBgColor,
})

export default function Button ({
    px,
    py,
    rounded,
    text,
    bgColor,
    hoverBgColor,
    style,
    ...props
}) {
    return (
        <button 
            style={Object.assign( button({px, py, rounded, text, bgColor, hoverBgColor}), style)}
            className={props.className}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}