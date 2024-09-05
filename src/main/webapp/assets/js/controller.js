/**
 * Permite la interaccion del usuario con el sistema en relacion a cambio de tema en la vista principal.
 * @version 0.1.0
 * @date 2024/04/29
 */


let labelDark = document.querySelector("a#labelDark");
let labelLight = document.querySelector("a#labelLight");

Action.verifyTheme();

labelLight.addEventListener("click", Action.themeLight);
labelDark.addEventListener("click", Action.themeDark);
