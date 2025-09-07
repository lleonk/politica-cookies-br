import {
  hasConsent,
  setOptions,
  showBanner,
  createBanner,
  getConsent,
} from "./helpers";
import { PoliticaCookiesBrOptions } from "./types/index";

/**
 * Função para inicializar a biblioteca.
 *
 * Se o usuário já tiver salvo suas preferências, o banner não será exibido.
 *
 * Caso contrário, o banner será criado e exibido.
 * @param options Opções de inicialização.
 */
function init(options: PoliticaCookiesBrOptions = {}) {
  setOptions(options);

  if (!hasConsent()) {
    createBanner();
    showBanner();
  }
}

export { init };

export { getConsent } from "./helpers";

export { manageCookies } from "./manage-cookies";
