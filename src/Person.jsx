export default function Person(props) {
  function ändernButton() {
    if (props.wirdAngelegt) {
      props.toggleWirdAngelegt();
    }
    props.toggleIsUpdated();
    props.getPersonToUpdate(props.item);
  }

  return (
    <div className={props.darkMode ? "kachel-dark" : "kachel"}>
      <div className="kachel--info">
        <p className="kachel--name">
          {props.item.vorname} {props.item.nachname}
        </p>
        <p className="kachel--email">{props.item.email}</p>
      </div>
      <div className="kachel--adresse">
        <p className="kachel--straße">
          {props.item.straße}, {props.item.wohnort}
        </p>
        <p className="kachel--datum">joined: {props.item.eintritt}</p>
      </div>
      <div className="kachel--buttons">
        <button className="button--ändern" onClick={ändernButton}>
          🖉
        </button>
        <button
          className="button--löschen"
          onClick={(event) => props.delete(event, props.id)}
        >
          -
        </button>
      </div>
    </div>
  );
}
