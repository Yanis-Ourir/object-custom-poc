import { useState, useEffect } from "react"
import { Storage } from "@plasmohq/storage"


function IndexPopup() {
  const storage = new Storage();
  const [objectColor, setObjectColor] = useState("");
  const [customObjects, setCustomObjects] = useState([]);


  useEffect(() => {
    async function getCustomObject() {
      const storedObjects = await storage.getAll();
      console.log(storedObjects);

      const filteredObjects = Object.entries(storedObjects).filter(([key, value]) => key.startsWith('customObject'));
      const customObjectValues = filteredObjects.map(([key, value]) => value.trim());

      console.log(customObjectValues);
      setCustomObjects(customObjectValues);
    }
    getCustomObject();
  }, []);

  function handleColorChange(event, setColor) {
    const newColor = event.target.value;
    setColor(newColor);
  }

  function handleSubmit(event) {
    event.preventDefault();
    storage.set("objectColor", objectColor);
    chrome.tabs.reload();
  }


  return (
    <div>
      <form>
        <label>Choose your color object :</label>
        <input type="color" onChange={(e) => handleColorChange(e, setObjectColor)} value={objectColor}></input>
        <select>
          <option value="">Sélectionnez un objet</option>
          {customObjects.map((option, index) => (
            <option key={index} value={option}>{option}</option>
          ))}
        </select>
        <button type="submit" onClick={handleSubmit}>save</button>
      </form>
    </div>
  )
}

export default IndexPopup
