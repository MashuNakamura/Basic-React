export default function HelloWorld(){
    const spread_syntax = {
        text: "Text from Spread Syntax"
    }
    return (
        <div>
            <Hello /> 
            <Answer />
            <JavaScript_1 />
            <JavaScript_2 text="Props"/>
            <JavaScript_3 {...spread_syntax} />
        </div>
    );
}

export function Hello(){
    return (
        <div>
            <h1>Hi There !</h1>
        </div>
    )
}

export function Answer(){
    return (
        <div>
            <h2>Hi</h2>
        </div>
    )
}

export function JavaScript_1({text}){
    const test = "upper this"
    return (
        <h1 style= {{
            color: "red",
            background: "blue"
        }}>
            {test.toUpperCase()}
        </h1>
    )
}

export function JavaScript_2({text = "Aduh Kocak"}){
    const style = {
        color: "blue",
        background: "red"
    }
    return (
        <h1 style={style}>
            {text.toLowerCase()}
        </h1>
    )
}

export function JavaScript_3({text}){
    const style = {
        color: "white",
        background: "black"
    }
    return (
        <h1 style={style}>
            {text.toLowerCase()}
        </h1>
    )
}