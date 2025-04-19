// Creating Conditional for Todolist

// Text is the Todolist
// isCompleted and isDeleted is a boolean for the todolist
// isDeleted default value is false it can be true if you want it too

export default function Todo({text, isCompleted, isDeleted = false}) {
    // Example Ternary Operator

        if (isDeleted) {
            return null
        } else {
            return (
                <li>
                    {/* {isCompleted ? <del> {text} </del> : text} */}
                    {isCompleted ? text + ' ✅' : text}
                    {/* {text} {isCompleted && '✅'} */}
                </li>
            )
        }
    }

    // Common way to use Conditional

    //     if (isDeleted) {
    //         return null
    //     }
    //     else if (isCompleted) {
    //         return (
    //             <li><del>{text}</del></li>
    //         )
    //     } else {
    //         return (
    //             <li>{text}</li>
    //         )
    //     }