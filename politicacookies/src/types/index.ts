export type PoliticaCookiesBrOptions = {
  /**
   * Chave usada para salvar a escolha do usuário nos cookies do navegador.
   * @default "politica-cookies-br"
   */
  storageKey?: string;
  /**
   * Valor base do z-index usado nos elementos.
   * @default 1000
   */
  zIndex?: number;

  /**
   * Aqui você pode passar uma função que será chamada sempre que o usuário salvar suas preferências.
   * O consentimento salvo será passado como parâmetro para sua função.
   */
  onSave?: (ev: PoliticaCookiesBrConsent) => any;
};

export type PoliticaCookiesBrConsent = {
  c1: boolean;
  c2: boolean;
  c3: boolean;
  c4: boolean;
};
