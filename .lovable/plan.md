

## Alinhar cards da equipe

Remover o deslocamento vertical (staggered/offset) dos cards da seção "Nossa Equipe", fazendo com que todos fiquem alinhados na mesma linha.

### Alteracao

**Arquivo: `src/components/home/TeamSection.tsx`**
- Remover a classe condicional `sm:mt-8` que é aplicada nos cards de índice ímpar (linha 27), eliminando o efeito de escalonamento vertical
- Todos os 4 cards ficarão alinhados no topo do grid

