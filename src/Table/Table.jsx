 import Row from "./Row.jsx"

 export default function Table() {
    return (
        <table border = "1">
            <tbody>
                <Row id = "1" text = "One"></Row>
                <Row id = "2" text = "Two"></Row>
                <Row id = "3" text="Three"></Row>
            </tbody>
        </table>
    )
 }