

## Descer imagem do modelo na página Clube

Ajustar a posição vertical da imagem do modelo (blusa xadrez com tesoura) na seção hero da página Clube, movendo-a um pouco para baixo.

### Alteração

**Arquivo: `src/pages/Clube.tsx` (linha 68)**
- Adicionar a classe `mt-8 lg:mt-12` ao elemento `<img>` ou ao seu container `<div>` para empurrar a imagem para baixo
- Alternativamente, usar `object-position` ou `translate-y` para um ajuste mais sutil

