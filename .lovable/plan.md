

## Remover texto "Barbearia Paradise" da SpiralAnimation

Remover o overlay com o texto "Barbearia Paradise" que aparece sobre a animação espiral, já que o componente agora é usado apenas como fundo do hero section.

### Alteração

**Arquivo: `src/components/SpiralAnimation.tsx`**

- Remover o `div` com classe `absolute inset-0 flex items-center justify-center z-10 pointer-events-none` que contém o `h1` com o texto "Barbearia Paradise"
- Manter apenas o canvas da animação

