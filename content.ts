import { Storage } from "@plasmohq/storage";
import buttonIframe from "~functions/iframe";

const storage = new Storage();
const style = document.createElement('style');

const config = [{
    custom_object: {
        id: 1,
        name: "", // faire correspondre nom + nom du custom object 
        color: "", // => récupèration dans le storage après un form submit
        icons: "",
    }
}];

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



const contactInterval = setInterval(function () {
    const contactNav = document.querySelector('#nav-secondary-customObjects');
    if (contactNav === null) {
        return;
    }
    clearInterval(contactInterval);
    console.log(contactNav.textContent);
}, 50)


// Faire un forEach sur la bibliothèque des icones -> addEventListener qui active une fonctionne qui place l'icone dans les objets cité precedemment.

// Trouver un moyen de différencier chacun des objets

// Créer un bouton qui va s'appliquer sur toutes les pages hubspot/contacts/objects qui va récupèrer le titre avec une constante et qui fera apparaitre une iframe


// Voici un custom object <a class="private-link uiLinkWithoutUnderline private-breadcrumbs__item uiLinkDark" href="/contacts/5483623/objects/2-4063348/restore" tabindex="0" aria-disabled="false"><span><span class="private-icon private-icon__low private-breadcrumbs__arrow private-breadcrumbs__arrow--back" data-icon-name="left"><span aria-hidden="true" class="UIIcon__IconContent-s3pqq1-0 htKeJp"></span></span>lots</span></a>

// Recupérer TOUS LES  CUSTOMS OBJECTS  ? Dans un TABLEAU ? Boucler sur tous les éléments ?
const customObjectList = document.querySelector('.tertiary-nav');
const object = customObjectList.querySelectorAll('li');

const customInterval = setInterval(async function () {
    if (customObjectList === null) {
        return;
    }
    clearInterval(customInterval);
    console.log(customObjectList);
    for (let i = 0; i < object.length; i++) {
        await storage.set(`customObject${[i]}`, object[i].textContent);
        console.log(object[i].textContent);
    }
}, 50);





