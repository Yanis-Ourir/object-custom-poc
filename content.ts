import { Storage } from "@plasmohq/storage";
import buttonIframe from "~functions/iframe";

const storage = new Storage();
const style = document.createElement('style');

buttonIframe();

async function getStoredColor() {
    const storedObjectColor = await storage.get("objectColor");
    return storedObjectColor;
}

// Récupère TOUS les titres des pages objets pour les  changer en rouge

const interval = setInterval(async function () {
    const storedColor = await getStoredColor();
    console.log(storedColor);
    if (document.querySelector('.private-dropdown__item__label') === null) {
        return;
    }
    clearInterval(interval);
    style.innerHTML = `.private-dropdown__item__label { color: ${storedColor};}`;
    document.head.appendChild(style);
}, 50);

// Les objets en DUR 
const entreprisesObject = '[data-key="cardPreviewHighlight.profileHeader.backButton.COMPANY"]';
const callsObject = '' // pas d'objet pour nos appels avec le compte demo-kaffein;
const transaction = '[data-key="cardPreviewHighlight.profileHeader.backButton.TRANSACTION"]';

const intervalObject = setInterval(async function () {
    const storedColor = await getStoredColor();
    if (document.querySelector('[data-key="cardPreviewHighlight.profileHeader.backButton.CONTACT"]') === null) {
        return;
    }
    clearInterval(intervalObject);
    const contactObject = document.querySelector('[data-key="cardPreviewHighlight.profileHeader.backButton.CONTACT"]');
    console.log(contactObject);
    style.innerHTML = `[data-key="cardPreviewHighlight.profileHeader.backButton.CONTACT"] { color: ${storedColor};}`;
    document.head.appendChild(style);
}, 50)

// Faire un forEach sur la bibliothèque des icones -> addEventListener qui active une fonctionne qui place l'icone dans les objets cité precedemment.

// Trouver un moyen de différencier chacun des objets

// Créer un bouton qui va s'appliquer sur toutes les pages hubspot/contacts/objects qui va récupèrer le titre avec une constante et qui fera apparaitre une iframe


