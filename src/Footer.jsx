export default function Footer(props) {
  return (
    <footer className={props.darkMode ? "footer-dark" : "footer"}>
      © 2024 Maikrosoft. Personenverwaltung in React.
    </footer>
  );
}
