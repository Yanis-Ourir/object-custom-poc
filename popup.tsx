import { useState, useEffect } from "react"
import { Storage } from "@plasmohq/storage"


function IndexPopup() {
  const storage = new Storage();
  const [objectColor, setObjectColor] = useState("");

  useEffect(() => {
    async function getColors() {

      const storedObjectColor = await storage.get("objectColor");
      setObjectColor(storedObjectColor);
    }
    getColors();
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
        <button type="submit" onClick={handleSubmit}>save</button>
      </form>
    </div>
  )
}

export default IndexPopup
