

## Mapa em Preto e Branco

Aplicar um filtro CSS `grayscale(100%)` nos iframes do Google Maps para que fiquem em preto e branco, combinando com a identidade visual monocromatica do site.

### Alteracoes

**1. `src/components/home/LocationSection.tsx`**
- Adicionar `className` com `grayscale` no iframe do mapa (ou no container)

**2. `src/pages/Contato.tsx`**
- Aplicar o mesmo filtro `grayscale` no iframe do mapa da pagina de contato

### Detalhe tecnico
Basta adicionar a classe Tailwind `grayscale` ao elemento `iframe` ou ao `div` container do mapa. Isso aplica `filter: grayscale(100%)` via CSS, tornando o mapa completamente preto e branco sem alterar nenhuma funcionalidade.

