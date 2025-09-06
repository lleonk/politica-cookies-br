export default `
<form>
    <div>
        <h3>Preferências de Cookies</h3>
        <button type="button" data-action="close" class="close-button">&#10005;</button>
    </div>

    <label>
        <input type="checkbox" name="c1" checked disabled>
        Cookies estritamente necessários (sempre ativos)
    </label>
    <p>Esses cookies permitem funcionalidades essenciais, tais como segurança, verificação de identidade e gestão de rede. Esses cookies não podem ser desativados em nossos sistemas. Embora sejam necessários, você pode bloquear esses cookies diretamente no seu navegador, mas isso pode comprometer sua experiência e prejudicar o funcionamento do site.</p>
    
    <label>
        <input type="checkbox" name="c2">
        Cookies de funcionalidade
    </label>
    <p>Permitem funcionalidades avançadas, como preferências do usuário, idioma escolhido ou personalização de conteúdo. Eles ajudam a tornar sua experiência mais fluida e personalizada.</p>
    
    <label>
        <input type="checkbox" name="c3">
        Cookies de desempenho e análise
    </label>
    <p>Visam a melhoria do desempenho do site por meio da coleta de dados anonimizados sobre navegação e uso dos recursos disponibilizados. Se você não permitir a coleta desses cookies, esses dados não serão usados para melhoria do site.</p>

    <label>
        <input type="checkbox" name="c4">
        Cookies de marketing e publicidade
    </label>
    <p>Usados para exibir anúncios relevantes com base nos seus interesses. Também ajudam a medir a eficácia das campanhas publicitárias e limitar a repetição de anúncios.</p>
    
    <div>
        <button type="button" data-action="accept">ACEITAR SELECIONADOS</button>
        <button type="button" data-action="close" class="secondary">FECHAR</button>
    </div>
</form>`;
