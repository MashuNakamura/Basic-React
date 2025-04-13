// Example creating Children

export default function Container({children}){
    return (
        <div>
            <h1>Hello World!</h1>
            {children}
            <footer>
                <p>Practice React JS</p>
            </footer>
        </div>
    )
}