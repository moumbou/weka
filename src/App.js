import React, { useEffect, useState } from "react";
import "./App.css";

const { ipcRenderer } = window.require("electron");

function App() {
  const [textArea, setTextArea] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPreom] = useState("");
  const [age, setAge] = useState();
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
    const number = Math.round(Math.random());
    console.log(number);
    if (textArea.length)
      if (!age || !nom || !prenom)
        return setResult(`veillez entrez toutes les informations !`);
      else
        return setResult(
          `la maladie de "${nom} ${prenom}" est de type ${!number ? "a" : "b"}`
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
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="age"
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
