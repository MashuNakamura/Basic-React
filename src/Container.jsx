// Example creating Children to place Header and Footer

export default function Container({ children }) {
  return (
    <div>
      <h1>Practice React JS</h1>
      {children}
      <footer>
        <p>Practice React JS</p>
      </footer>
    </div>
  );
}
