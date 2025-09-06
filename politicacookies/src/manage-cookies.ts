import {
  createManageCookiesDialog,
  createManageCookiesOverlay,
  destroyBanner,
  destroyManageCookiesDialog,
  destroyManageCookiesDialogOverlay,
  getManageCookiesDialog,
  hideBanner,
  saveChoice,
  showBanner,
} from "./helpers";
import { PoliticaCookiesBrConsent } from "./types";

function manageCookies() {
  hideBanner();

  createManageCookiesDialog();

  createManageCookiesOverlay();

  /**
   * Pequeno atraso para usuários que usam 'duplo clique' para clicar em botões.
   */
  setTimeout(() => {
    const form = getForm();
    form?.addEventListener("click", onFormClick);
  }, 300);
}

function onFormClick(e: MouseEvent) {
  const action = (e.target as HTMLElement)?.getAttribute(
    "data-action"
  );

  if (action === "accept") {
    const formData = new FormData(getForm());
    const choice: PoliticaCookiesBrConsent = {
      c1: true,
      c2: formData.get("c2") === "on",
      c3: formData.get("c3") === "on",
      c4: formData.get("c4") === "on",
    };
    saveChoice(choice);
    exit();
    destroyBanner();
  }

  if (action === "close") {
    exit();
    showBanner();
  }
}

function exit() {
  const form = getForm();
  form.removeEventListener("click", onFormClick);
  destroyManageCookiesDialog();
  destroyManageCookiesDialogOverlay();
}

function getForm() {
  const dialog = getManageCookiesDialog();
  const form = dialog!.querySelector("form") as HTMLFormElement;
  return form;
}

export { manageCookies };
