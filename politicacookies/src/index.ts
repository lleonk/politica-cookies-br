import {
  hasConsent,
  setOptions,
  showBanner,
  createBanner,
} from "./helpers";
import { PoliticaCookiesBrOptions } from "./types/index";

function init(options: PoliticaCookiesBrOptions = {}) {
  setOptions(options);

  if (hasConsent()) {
    return;
  }

  createBanner();

  showBanner();
}

init();

export { getConsent } from "./helpers";

export { manageCookies } from "./manage-cookies";
