# Instruções

Para visualizar o resultado deste projeto, basta abrir o arquivo `index.html` desta pasta "politicacookies.local" no VS Code e utilizar a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer). Com ela, você pode clicar com o botão direito no arquivo `index.html` e selecionar "Open with Live Server" para abrir o projeto em seu navegador e ver o resultado em tempo real.

Se ainda não tiver a extensão instalada, procure por "Live Server" na loja de extensões do VS Code e instale-a gratuitamente.

Este arquivo `index.html` contém um exemplo completo da implementação do banner de cookies em uma página HTML.

# Incluindo o banner de cookies em um projeto Webforms, Blazor, ASP.MVC e outros com javascript puro
Basicamente a adição do banner ocorre com a adição das linhas:

```html
<!-- importa os estilos css e o código javascript que cria o banner -->
<link rel="stylesheet" href="https://unpkg.com/politica-cookies-br@1.0.5/dist/style.css">
<script src="https://unpkg.com/politica-cookies-br@1.0.5"></script>

<!-- incialização do banner -->
<script>
    window.addEventListener('load', () => {
      setTimeout(() => {
        PoliticaCookiesBr.init();
      }, 2000);
    });
</script>
```

O uso do setTimeout é opcional e pode ser retirado caso não seja necessário

# Incluindo o banner de cookies em um projeto Vue.js