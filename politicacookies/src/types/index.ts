export type PoliticaCookiesBrOptions = {
  /**
   * Chave usada para salvar a escolha do usuário nos cookies do navegador. O valor padrão é o nome do pacote.
   */
  storageKey?: string;
  /**
   * Valor base do z-index usado nos elementos da interface.
   * @default 1000
   */
  zIndex?: number;
};

export type PoliticaCookiesBrConsent = {
  c1: boolean;
  c2: boolean;
  c3: boolean;
  c4: boolean;
};
