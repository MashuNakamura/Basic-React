import "./Testing.css"

// Experience Printing from different Method

export default function Testing(){
    const Spread_syntax = {
        text: "Text from Spread Syntax"
    }

    return (
        <div>
            <DefaultJSX />
            <ExampleJS />
            <ExampleJSWithCss />
            <Props text="Props"/>
            <SpreadSyntax {...Spread_syntax}/>
        </div>
    );
}

// Default Function JSX
export function DefaultJSX(){
    return (
    <h1 className="default">Default JSX</h1>
    )
}

// Example JS usage
export function ExampleJS(){
    const text = "Example JS";
    return (
        <h1>{text.toLowerCase()}</h1>
    )
}

// Example JS with CSS using {{ }}
export function ExampleJSWithCss(){
    const test = "upper this"
    return (
        <h1 style = {{
            color: "red",
            background: "blue"
        }}>
            {test.toUpperCase()}
        </h1>
    )
}

// Example Props, if no input text at default function, then print "Aduh Kocak" and using only { }
export function Props({text = "Aduh Kocak"}){
    const style = {
        color: "blue",
        background: "red"
    }
    return (
        <h1 style={style}>
            {text}
        </h1>
    )
}

// Example SpreadSyntax (const from default function)
export function SpreadSyntax({text}){
    return (
        <h1>{text}</h1>
    )
}