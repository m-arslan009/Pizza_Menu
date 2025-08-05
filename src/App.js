import "./index.css";

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};
  return (
    <header className="header footer">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza />
      <Pizza />
    </main>
  );
}

function Footer() {
  const Hours = new Date().getHours();
  const isOpen = Hours >= 10 && Hours <= 20;

  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}.{" "}
      {isOpen ? "We're currently open" : "Sorry we're closed"}
    </footer>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizza.jpg" alt="Pizza" width="300px" />
      <h3>Special Speicy Pizza</h3>
    </div>
  );
}

function App() {
  return (
    <div className="container header">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
export default App;
