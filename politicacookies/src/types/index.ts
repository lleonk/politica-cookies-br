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
   * URL dos Termos de Uso. Caso seja informado, um link será exibido na janela de gerenciamento de cookies.
   */
  termsOfUseUrl?: string;
  /**
   * Aqui você pode passar uma função que será chamada sempre que o usuário salvar suas preferências.
   * O consentimento salvo será passado como parâmetro para sua função.
   */
  onSave?: (ev: PoliticaCookiesBrConsent) => any;
};

export type PoliticaCookiesBrConsent = {
  /** Cookies necessários (sempre ativos) */
  c1: boolean;
  /** Cookies de funcionalidade */
  c2: boolean;
  /** Cookies de desempenho */
  c3: boolean;
  /** Cookies de publicidade */
  c4: boolean;
};
