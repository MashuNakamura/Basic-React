// Example using event handle innerHTML (change text JS)

export default function SayHelloForm() {
    function handleClick(e) {
        e.preventDefault();
        const name = document.getElementById("input_name").value;
        document.getElementById("hello").innerText = `Hello ${name}`;
    }

    return (
        <div>
            <form>
                <input type="text" id="input_name"/>
                <button onClick={handleClick}>
                    Say Hello
                </button>
            </form>
            <h1 id="hello">Hello World</h1>
        </div>
    )
}