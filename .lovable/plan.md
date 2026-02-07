
## Melhorar a legibilidade dos menus no Header

### Problemas identificados
1. **Logo muito grande**: A logo tem `h-44`/`h-52` mas o header tem apenas `h-16`/`h-20`, fazendo ela transbordar e sobrepor os textos do menu
2. **Textos pequenos e com pouco contraste**: Os links do desktop usam `text-sm` e cor `text-muted-foreground` (cinza claro), dificultando a leitura
3. **Menu mobile**: Os textos do MenuVertical podem estar sendo parcialmente cobertos pela logo grande

### Solucao proposta

**1. Ajustar a altura do header para acomodar a logo**
- Aumentar a altura do header de `h-16 lg:h-20` para `h-24 lg:h-28`, dando mais espaco para a logo sem que ela sobreponha o conteudo

**2. Melhorar legibilidade dos links desktop**
- Aumentar o tamanho do texto dos links de `text-sm` para `text-base`
- Usar `text-foreground/80` ao inves de `text-muted-foreground` para melhor contraste
- Aumentar o `font-medium` para `font-semibold` nos links ativos

**3. Garantir que o menu mobile nao seja coberto**
- Aumentar o `pt-24` do overlay mobile para `pt-32` para compensar o header maior

### Detalhes tecnicos

Arquivo alterado: `src/components/Header.tsx`

- Linha 58: `h-16 lg:h-20` -> `h-24 lg:h-28`
- Linha 74: `text-sm` -> `text-base`, `text-muted-foreground` -> `text-foreground/70`
- Linha 130: `pt-24` -> `pt-32`
