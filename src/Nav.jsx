export default function Nav(props) {
  return (
    <>
      <nav className="nav">
        <div className="logo">
          <img src="images/contact.png" className="logoimg" />
          <h2 className="logo-text">die crew</h2>
        </div>
        <button
          className={
            props.darkMode ? "button-darkmode-dark" : "button-darkmode"
          }
          onClick={props.toggleDarkMode}
        >
          {props.darkMode ? "switch to light mode" : "switch to dark mode"}
        </button>
      </nav>
    </>
  );
}
