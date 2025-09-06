import bannerTemplate from "./templates/banner-template";
import {
  PoliticaCookiesBrOptions,
  PoliticaCookiesBrConsent,
} from "./types";
import pkg from "../package.json";
import manageTemplate from "./templates/manage-template";
import { manageCookies } from "./manage-cookies";

const _opts: PoliticaCookiesBrOptions = {
  storageKey: pkg.name,
  zIndex: 1000,
};

let _banner: HTMLElement | null = null;

let _manageDialog: HTMLElement | null = null;

let _manageDialogOverlay: HTMLElement | null = null;

function addCommonCss(el: HTMLElement) {
  el.classList.add(`${__PREFIX__}__common`);
}

function getConsent(): PoliticaCookiesBrConsent | null {
  const { storageKey } = getOptions();
  try {
    const match = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${storageKey}=`));
    if (!match) {
      return null;
    }
    return JSON.parse(decodeURIComponent(match.split("=")[1]));
  } catch {
    return null;
  }
}

function hasConsent() {
  return getConsent() !== null;
}

function acceptAllCookies() {
  saveChoice({
    c1: true,
    c2: true,
    c3: true,
    c4: true,
  });
}

function rejectAllCookies() {
  saveChoice({
    c1: true,
    c2: false,
    c3: false,
    c4: false,
  });
}

function saveChoice(value: PoliticaCookiesBrConsent) {
  const { storageKey } = getOptions();
  try {
    document.cookie = `${storageKey}=${JSON.stringify(
      value
    )}; path=/; max-age=${60 * 60 * 24 * 365}`;
    if (!hasConsent()) {
      throw "Não foi possível salvar suas preferências. Os cookies estão desabilitados ou bloqueados no seu navegador.";
    }
    emitConsent();
  } catch (err) {
    alert(err);
  }
}

function emitConsent() {
  const consent = getConsent();
  if (consent) {
    const event: CustomEvent<PoliticaCookiesBrConsent> =
      new CustomEvent("politicaCookiesBr:consent", {
        detail: consent,
      });
    window.dispatchEvent(event);
  }
}

function createElement(html: string, id: string) {
  const el = document.createElement("div");
  el.innerHTML = html;
  el.id = `${__PREFIX__}-${id}`;
  addCommonCss(el);
  return el;
}

function createBanner() {
  _banner = createElement(bannerTemplate, "banner");

  _banner.style.zIndex = `${getOptions().zIndex}`;

  document.body.appendChild(_banner);

  _banner.addEventListener("click", onBannerClick);
}

function onBannerClick(e: MouseEvent) {
  const btn = (e.target as HTMLElement).closest(
    "[data-action]"
  ) as HTMLElement | null;

  if (!btn) {
    return;
  }

  const action = btn.getAttribute("data-action");

  if (action === "manage") {
    manageCookies();
    return;
  }

  if (action === "accept") {
    acceptAllCookies();
    destroyBanner();
    return;
  }

  if (action === "reject") {
    rejectAllCookies();
    destroyBanner();
    return;
  }
}

function createManageCookiesDialog() {
  _manageDialog = document.createElement("div");
  _manageDialog.id = `${__PREFIX__}-manage`;
  addCommonCss(_manageDialog);
  _manageDialog.innerHTML = manageTemplate;
  _manageDialog.style.zIndex = `${getOptions().zIndex! + 1}`;
  document.body.appendChild(_manageDialog);
}

function destroyManageCookiesDialog() {
  _manageDialog?.remove();
  _manageDialog = null;
}

function createManageCookiesOverlay() {
  _manageDialogOverlay = document.createElement("div");
  _manageDialogOverlay.id = `${__PREFIX__}-manage-overlay`;
  document.body.appendChild(_manageDialogOverlay);
  _manageDialogOverlay.style.zIndex = `${getOptions().zIndex!}`;
}

function destroyManageCookiesDialogOverlay() {
  _manageDialogOverlay?.remove();
  _manageDialogOverlay = null;
}

function getManageCookiesDialog() {
  return _manageDialog;
}

function getBanner() {
  return _banner;
}

function setOptions(options: Partial<PoliticaCookiesBrOptions>) {
  Object.assign(_opts, options);
}

function getOptions() {
  return _opts;
}

function destroyBanner() {
  _banner?.removeEventListener("click", onBannerClick);
  _banner?.remove();
  _banner = null;
}

function hideBanner() {
  _banner?.classList.remove("__visible");
}

function showBanner() {
  _banner?.classList.add("__visible");
}

export {
  addCommonCss,
  acceptAllCookies,
  hasConsent,
  rejectAllCookies,
  saveChoice,
  createElement,
  createBanner,
  getBanner,
  setOptions,
  getOptions,
  destroyBanner,
  hideBanner,
  showBanner,
  createManageCookiesDialog,
  getManageCookiesDialog,
  createManageCookiesOverlay,
  destroyManageCookiesDialog,
  destroyManageCookiesDialogOverlay,
  getConsent,
};
