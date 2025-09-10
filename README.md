# Política de Cookies BR

Este projeto tem como objetivo fornecer uma solução completa e customizável para a implementação de banners e gestão de consentimento de cookies em sites brasileiros, seguindo as melhores práticas de privacidade e conformidade com a LGPD.

## Uso

### Exemplo de uso com **injeção de script** diretamente no `html`.

```html
<!-- substitua `@1.0.5` pela versão que deseja utilizar -->
<link
  rel="stylesheet"
  href="https://unpkg.com/politica-cookies-br@1.0.5/dist/style.css"
/>
<script src="https://unpkg.com/politica-cookies-br@1.0.5"></script>

<!-- inicialização do banner -->
<script>
  window.addEventListener("load", () => {
    PoliticaCookiesBr.init();
  });
</script>
```

### Exemplo de uso em um projeto [Vue.js](https://github.com/lleonk/politica-cookies-br/tree/main/politicacookies.vue)

```js
import "politica-cookies-br/dist/style.css";
import { init } from "politica-cookies-br";

onMounted(() => {
  init();
});
```

## Desenvolvimento

1. Clone o repositório:
   ```sh
   git clone https://github.com/lleonk/politica-cookies-br.git
   ```
2. Instale as dependências:
   ```sh
   cd politica-cookies-br/politicacookies
   npm install
   ```

## Licença

Este projeto está licenciado sob a Licença MIT.
