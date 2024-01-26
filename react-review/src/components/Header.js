

function Header() {

    var titulo = "Teresa Hernandez";
    var profesión = "Psicologa Clínica";

  return (
    <div className="App">
      <header className="App-header">
        <h1>{titulo}</h1>
        <h3>{profesión}</h3>
      </header>
    </div>
  );
}

export default Header;
