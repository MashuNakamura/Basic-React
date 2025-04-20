// Example if you have div that contain 2 button and has onClick in it

export default function Toolbar({onClick}) {
    return (
        <div onClick={onClick}>
            <button>First Button</button>
            <button>Second Button</button>
        </div>
    )
}