import Person from "./Person";
import personen from "./personen.json";

export default function Content(props) {
  const kacheln = personen.map((item) => {
    return <Person item={item} darkMode={props.darkMode} />;
  });

  return (
    <div className={props.darkMode ? "content-dark" : "content"}>
      <button className="button-add">+</button>
      {kacheln}
    </div>
  );
}
