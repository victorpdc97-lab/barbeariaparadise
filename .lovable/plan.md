

## Integrar componente AnimatedText (Underline Animado)

### O que sera feito
Adicionar um componente de texto com underline animado ao projeto. Esse componente usa `framer-motion` para criar uma animacao de sublinhado SVG que aparece ao passar o mouse.

### Passos

**1. Instalar dependencia**
- Adicionar `framer-motion` ao projeto

**2. Criar o componente**
- Criar o arquivo `src/components/ui/animated-underline-text-one.tsx` com o codigo do componente AnimatedText
- O componente ja usa `@/lib/utils` que existe no projeto

**3. Correcao necessaria no codigo**
- O codigo fornecido tem JSX incompleto (tags vazias). Sera reconstruido com a estrutura correta baseada nas props e no padrao do componente:
  - Um container `div` com `group` para hover
  - O texto como `span`
  - Um `svg` com `motion.path` para o underline animado

### Detalhes tecnicos

- **Dependencia**: `framer-motion` (nova)
- **Arquivo**: `src/components/ui/animated-underline-text-one.tsx`
- O componente nao sera integrado em nenhuma pagina automaticamente -- ficara disponivel para uso futuro
- A estrutura do projeto ja suporta shadcn, Tailwind e TypeScript

