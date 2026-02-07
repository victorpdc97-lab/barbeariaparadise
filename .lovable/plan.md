

## Corrigir visibilidade da logo no header

A logo não aparece porque a classe `brightness-0` no CSS força a imagem a ficar totalmente preta.

### Alteracao

**Arquivo: `src/components/Header.tsx` (linha 68)**

- Remover a classe `brightness-0` do `<img>` da logo
- Manter as demais classes de tamanho e layout

### Detalhe tecnico

A classe Tailwind `brightness-0` aplica `filter: brightness(0)`, tornando todos os pixels da imagem pretos. Isso era usado com a logo anterior (provavelmente branca, invertida para preta), mas com a nova logo nao faz sentido.

