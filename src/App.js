import React, { useEffect, useState } from "react";
import "./App.css";

const { ipcRenderer } = window.require("electron");

function App() {
  const [textArea, setTextArea] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPreom] = useState("");
  const [temperature, setTemperature] = useState();
  const [result, setResult] = useState("");

  useEffect(() => {
    ipcRenderer.on("get:data", (e, args) => {
      setTextArea(args);
    });
  }, []);

  const trigger_file = () => {
    document.getElementById("file").click();
  };

  const onChangeHandler = (e) => {
    const file = e.target.files[0];
    const fileName = file.name;
    const lastIndex = fileName.lastIndexOf(".");
    const extension = fileName.substring(lastIndex + 1, fileName.length);
    if (extension === "arff") return ipcRenderer.send("get:data", file.path);
  };

  const validation = () => {
    if (textArea.length)
      if (!temperature || !nom || !prenom)
        return setResult(`veillez entrez toutes les informations !`);
      else
        return setResult(
          `le(a) patient(e) "${nom} ${prenom}" est atteint(e) d'une inflamation ${
            temperature >= 40 ? "aiguë prolongée" : "aiguë"
          }`
        );
  };

  return (
    <div className="App">
      <button type="button" data-target="add-file-btn" onClick={trigger_file}>
        ajouter un fichier
      </button>

      <div data-target="grid-2">
        <div>
          <textarea
            cols="60"
            rows="20"
            onChange={(e) => setTextArea(e.target.value)}
            value={textArea}
          ></textarea>
          <input type="file" id="file" onChange={onChangeHandler} />
        </div>

        <div>
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            placeholder="nom"
          />
          <input
            type="text"
            value={prenom}
            onChange={(e) => setPreom(e.target.value)}
            placeholder="prenom"
          />
          <input
            type="number"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            placeholder="temperature"
          />
          <button type="button" onClick={validation}>
            valider
          </button>
          <p>{result}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
