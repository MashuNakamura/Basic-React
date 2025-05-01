// Example if you want to prevent default form submission behavior
// so the input stays filled and doesn't reset

export default function SearchForm() {
    return (
        <form>
            <input type="text"/>
            <button onClick={(e) => {
                e.preventDefault();
                alert("You Search");
            }}> Search
            </button>
        </form>
    )
}