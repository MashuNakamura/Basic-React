// Example onClick event

export default function AlertButton({text, message}) {
    function handleClick() {
        alert(message)
    }

    // For debugging problem search, use DOM as example bellow. You can add .target to get more specific info
    // function handleClick(e) {
    //     console.info(e.target)
    //     alert(message)
    // }

    return (
        <button onClick={handleClick}>{text}</button>
    )
} 