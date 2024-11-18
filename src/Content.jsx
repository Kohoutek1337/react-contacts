import Person from "./Person";
import personen from "./personen.json";
import { useState } from "react";
import Add from "./Add";
import Update from "./Update";

export default function Content(props) {
  const [daten, setDaten] = useState(getAlleDaten);
  const [wirdAngelegt, setWirdAngelegt] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [personToUpdate, setpersonToUpdate] = useState();
  const index = daten[personToUpdate];
  const [suchbegriff, setSuchbegriff] = useState("");
  const suchDaten = search(suchbegriff);

  const kacheln = suchDaten.map((item) => {
    return (
      <Person
        item={item}
        darkMode={props.darkMode}
        delete={deletePerson}
        key={item.email}
        id={item.email}
        toggleIsUpdated={toggleIsUpdated}
        toggleWirdAngelegt={toggleWirdAngelegt}
        isUpdated={isUpdated}
        wirdAngelegt={wirdAngelegt}
        getPersonToUpdate={getPersonToUpdate}
      />
    );
  });

  function getPersonToUpdate(item) {
    setpersonToUpdate(item);
  }

  function getAlleDaten() {
    const allePersonen = [];
    personen.map((item) => {
      allePersonen.push(item);
    });
    return allePersonen;
  }

  function addPerson(neuePerson) {
    toggleWirdAngelegt();
    setDaten((prevDaten) => {
      return [neuePerson, ...prevDaten];
    });
  }

  function updatePerson(formData) {
    setDaten((oldDaten) =>
      oldDaten.map((daten) =>
        daten.email === formData.email ? formData : daten
      )
    );
    toggleIsUpdated();
  }

  function deletePerson(event, id) {
    event.stopPropagation();
    const isConfirmed = window.confirm("Person wird endgülitg gelöscht!");
    if (isConfirmed) {
      setDaten((oldDaten) => oldDaten.filter((daten) => daten.email !== id));
    }
  }

  function search() {
    return daten.filter(
      (item) =>
        item.nachname.toLowerCase().includes(suchbegriff.toLowerCase()) ||
        item.vorname.toLowerCase().includes(suchbegriff.toLowerCase()) ||
        item.email.toLowerCase().includes(suchbegriff.toLowerCase()) ||
        item.straße.toLowerCase().includes(suchbegriff.toLowerCase()) ||
        item.wohnort.toLowerCase().includes(suchbegriff.toLowerCase()) ||
        item.eintritt.toLowerCase().includes(suchbegriff.toLowerCase())
    );
  }
  function toggleWirdAngelegt() {
    setWirdAngelegt((prevWirdAngelegt) => !prevWirdAngelegt);
  }
  function toggleIsUpdated() {
    setIsUpdated((prevIsUpdated) => !prevIsUpdated);
  }

  function newButton() {
    if (wirdAngelegt) {
      toggleWirdAngelegt();
      return;
    }
    if (isUpdated) {
      toggleIsUpdated();
    } else {
      toggleWirdAngelegt();
    }
  }

  return (
    <div className={props.darkMode ? "content-dark" : "content"}>
      <div className="contentbuttons">
        <button className="button-add" onClick={newButton}>
          {wirdAngelegt || isUpdated ? "x" : "+"}
        </button>

        <input
          className={props.darkMode ? "input-dark" : "input"}
          type="text"
          placeholder="Suchen..."
          value={suchbegriff}
          onChange={(e) => setSuchbegriff(e.target.value)}
        />
      </div>
      {wirdAngelegt && (
        <Add
          darkMode={props.darkMode}
          addPerson={addPerson}
          toggleWirdAngelegt={toggleWirdAngelegt}
        />
      )}
      {isUpdated && (
        <Update
          darkMode={props.darkMode}
          updatePerson={updatePerson}
          toggleIsUpdated={toggleIsUpdated}
          getPersonToUpdate={getPersonToUpdate}
          personToUpdate={personToUpdate}
        />
      )}
      {kacheln}
    </div>
  );
}
