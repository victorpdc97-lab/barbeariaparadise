

## Remover overlay "@paradise" no hover dos cards da equipe

Remover o overlay escuro com o link "@paradise" que aparece ao passar o mouse nas fotos dos membros da equipe na seção TeamSection.

### Alteração

**Arquivo: `src/components/home/TeamSection.tsx` (linhas 33-35)**

Remover o `div` com classe `absolute inset-0 bg-black/40...` que contém o link `@paradise`, mantendo apenas a imagem com o efeito de zoom no hover.

