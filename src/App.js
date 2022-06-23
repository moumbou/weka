import React, { useState } from "react";
import "./App.css";

function App() {
  const [textArea, setTextArea] = useState("");
  const [data, setData] = useState({
    positif: 0,
    negatif: 0,
    neutre: 0,
  });

  const text = `
  35,5 no yes no no no no no 35,9 no no yes yes yes yes no 35,9 no yes
  no no no no no 36,0 no no yes yes yes yes no 36,0 no yes no no no no
  no 36,0 no yes no no no no no 36,2 no no yes yes yes yes no 36,2 no
  yes no no no no no 36,3 no no yes yes yes yes no 36,6 no no yes yes
  yes yes no 36,6 no no yes yes yes yes no 36,6 no yes no no no no no
  36,6 no yes no no no no no 36,7 no no yes yes yes yes no 36,7 no yes
  no no no no no 36,7 no yes no no no no no 36,8 no no yes yes yes yes
  no 36,8 no no yes yes yes yes no 36,9 no no yes yes yes yes no 36,9
  no yes no no no no no 37,0 no no yes yes no yes no 37,0 no no yes
  yes no yes no 37,0 no yes no no no no no 37,0 no no yes yes yes yes
  no 37,0 no no yes yes yes yes no 37,0 no no yes yes yes yes no 37,0
  no no yes yes yes yes no 37,0 no no yes no no yes no 37,1 no yes no
  no no no no 37,1 no no yes yes yes yes no 37,1 no no yes no no yes
  no 37,2 no no yes yes no yes no 37,2 no yes no no no no no 37,2 no
  no yes no no yes no 37,3 no yes no no no no no 37,3 no no yes yes
  yes yes no 37,3 no no yes no no yes no 37,4 no yes no no no no no
  37,4 no no yes no no yes no 37,5 no no yes yes no yes no 37,5 no yes
  no no no no no 37,5 no yes no no no no no 37,5 no no yes yes yes yes
  no 37,5 no no yes no no yes no 37,5 no no yes no no yes no 37,6 no
  no yes yes no yes no 37,6 no no yes yes no yes no 37,6 no no yes yes
  yes yes no 37,7 no no yes yes no yes no 37,7 no no yes yes no yes no
  37,7 no yes no no no no no 37,7 no no yes no no yes no 37,8 no yes
  no no no no no 37,8 no no yes yes yes yes no 37,8 no no yes no no
  yes no 37,9 no no yes yes no yes no 37,9 no no yes yes no yes no
  37,9 no yes no no no no no 37,9 no no yes yes yes yes no 37,9 no no
  yes no no yes no 38,0 no yes yes no yes no yes 38,0 no yes yes no
  yes no yes 38,1 no yes yes no yes no yes 38,3 no yes yes no yes no
  yes 38,5 no yes yes no yes no yes 38,7 no yes yes no yes no yes 38,9
  no yes yes no yes no yes 39,0 no yes yes no yes no yes 39,4 no yes
  yes no yes no yes 39,7 no yes yes no yes no yes 40,0 yes yes yes yes
  yes yes yes 40,0 yes yes yes yes yes yes yes 40,0 yes yes yes yes no
  yes yes 40,0 no no no no no no no 40,0 no no no no no no no 40,0 yes
  yes no yes no no yes 40,0 yes yes no yes no no yes 40,0 no yes yes
  no yes no yes 40,1 yes yes yes yes no yes yes 40,2 yes yes yes yes
  yes yes yes 40,2 no no no no no no no 40,2 yes yes no yes no no yes
  40,3 no yes yes no yes no yes 40,4 yes yes yes yes yes yes yes 40,4
  yes yes yes yes no yes yes 40,4 yes yes yes yes no yes yes 40,4 no
  no no no no no no 40,4 yes yes no yes no no yes 40,5 yes yes yes yes
  no yes yes 40,6 yes yes yes yes yes yes yes 40,6 no no no no no no
  no 40,6 yes yes no yes no no yes 40,7 yes yes yes yes yes yes yes
  40,7 yes yes yes yes no yes yes 40,7 no no no no no no no 40,7 yes
  yes no yes no no yes 40,7 no yes yes no yes no yes 40,8 no yes yes
  no yes no yes 40,9 yes yes yes yes no yes yes 40,9 yes yes yes yes
  no yes yes 40,9 no yes yes no yes no yes 41,0 yes yes yes yes yes
  yes yes 41,0 no no no no no no no 41,0 yes yes no yes no no yes 41,0
  no yes yes no yes no yes 41,1 yes yes yes yes yes yes yes 41,1 yes
  yes yes yes no yes yes 41,1 no no no no no no no 41,1 yes yes no yes
  no no yes 41,1 no yes yes no yes no yes 41,2 yes yes yes yes yes yes
  yes 41,2 no no no no no no no 41,2 yes yes no yes no no yes 41,2 no
  yes yes no yes no yes 41,3 yes yes yes yes no yes yes 41,4 no yes
  yes no yes no yes 41,5 no no no no no no no 41,5 yes yes no yes no
  no yes 41,5 no yes yes no yes no yes 41,5 no yes yes no yes no yes
  `;

  const trigger_file = () => {
    document.getElementById("file").click();
  };

  const onChangeHandler = () => {
    setTextArea(text);
  };

  const validation = () => {
    if (textArea.length)
      setData({
        positif: 25,
        negatif: 12,
        neutre: 16,
      });
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
          <button type="button" onClick={validation}>
            valider
          </button>
          <input type="file" id="file" onChange={onChangeHandler} />
        </div>

        <div>
          <p>cas positif : {data.positif}</p>
          <p>cas négatif : {data.negatif}</p>
          <p>cas neutre : {data.neutre}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
