import React from "react";
import { useId } from "react";
export default function Add(props) {
  const [formData, setFormData] = React.useState({
    nachname: "",
    vorname: "",
    email: "",
    straße: "",
    wohnort: "",
    eintritt: "",
  });

  const id = useId();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        [name]: value,
        ...prevFormData,
      };
    });
    props.addPerson(formData);
  }
  const darkinput = "background-color:powderblue;";

  return (
    <div className={props.darkMode ? "add-dark" : "add"}>
      <p className="add--title">Kontakt hinzufügen</p>
      <form onSubmit={handleSubmit}>
        <div className="form">
          <div>
            <label htmlFor={id + "-vorname"}>Vorname</label>
            <input
              className={props.darkMode ? "input-dark" : "input"}
              type="text"
              onChange={handleChange}
              name="vorname"
              value={formData.vorname}
              id={id + "-vorname"}
            />

            <label htmlFor={id + "-nachname"}>Nachname</label>
            <input
              className={props.darkMode ? "input-dark" : "input"}
              type="text"
              onChange={handleChange}
              name="nachname"
              value={formData.nachname}
              id={id + "-nachname"}
            />
            <label htmlFor={id + "-email"}>Email</label>
            <input
              className={props.darkMode ? "input-dark" : "input"}
              type="text"
              onChange={handleChange}
              name="email"
              value={formData.email}
              id={id + "-email"}
              required
            />
          </div>
          <div>
            <label htmlFor={id + "-straße"}>Straße</label>
            <input
              className={props.darkMode ? "input-dark" : "input"}
              type="text"
              onChange={handleChange}
              name="straße"
              value={formData.straße}
              id={id + "-straße"}
            />
            <label htmlFor={id + "-wohnort"}>Wohonort</label>
            <input
              className={props.darkMode ? "input-dark" : "input"}
              type="text"
              onChange={handleChange}
              name="wohnort"
              value={formData.wohnort}
              id={id + "-wohnort"}
            />
            <label htmlFor={id + "-eintritt"}>Firmeneintritt</label>
            <input
              className={props.darkMode ? "input-dark" : "input"}
              type="text"
              onChange={handleChange}
              name="eintritt"
              value={formData.eintritt}
              id={id + "-eintritt"}
            />
          </div>
        </div>
        <div className="buttons--confirm">
          <button
            type="button"
            className="button--anlegen"
            onClick={props.toggleWirdAngelegt}
          >
            x
          </button>
          <button className="button--confirm">✓</button>
        </div>
      </form>
    </div>
  );
}
