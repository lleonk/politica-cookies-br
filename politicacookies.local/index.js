import {
  init,
  getConsent,
  manageCookies,
} from "../politicacookies/dist/index.js";

window.addEventListener("load", () => {
  init({
    storageKey: "pcbr-consentimento",
    onSave: (ev) => {
      document.body.insertAdjacentHTML(
        "beforeend",
        `<pre>${JSON.stringify(ev)}</pre>`
      );
    },
  });

  document
    .querySelector("button[data-action='manage']")
    .addEventListener("click", () => {
      manageCookies();
    });

  document
    .querySelector("button[data-action='consent']")
    .addEventListener("click", () => {
      alert(JSON.stringify(getConsent()));
    });

  document
    .querySelector("button[data-action='reset']")
    .addEventListener("click", () => {
      document.cookie =
        "pcbr-consentimento=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
      location.reload();
    });
});
