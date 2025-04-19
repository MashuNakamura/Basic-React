export default function Row({id, text}) {
    return (
        <tr>
            <td>{id}</td>
            <td>{text}</td>
        </tr>
    )
}

// Tidak disarankan untuk digunakan, karena akan merusak data si counter

// let counter = 0

// export default function Row({text}) {
//     counter++
//     return (
//         <tr>
//             <td>{counter}</td>
//             <td>{text}</td>
//         </tr>
//     )
// }