

## Adicionar glow radial atrás da imagem do modelo

Criar um efeito de brilho/sombra radial suave posicionado atrás da imagem do modelo na hero da página Clube, adicionando profundidade e integrando melhor a imagem ao fundo escuro.

### Alteração

**Arquivo: `src/pages/Clube.tsx` (linha ~67-68)**

Adicionar um pseudo-elemento ou `div` absoluto atrás da imagem com um gradiente radial branco/cinza semi-transparente, criando um efeito de glow sutil:

- Inserir um `div` com `absolute inset-0` e um gradiente radial (`bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.08)_0%,_transparent_70%)]`) posicionado atrás da imagem
- Escalar o glow levemente maior que a imagem para um efeito mais natural
- Manter o `drop-shadow-2xl` existente na imagem

