

## Galeria 3D no Hero da Home

### O que sera feito
Substituir a imagem estatica de fundo do Hero por uma galeria 3D imersiva com as fotos da barbearia passando em profundidade (efeito tunnel/infinite gallery). O conteudo do hero (titulo, texto, botoes) permanece por cima.

### Passos

**1. Instalar dependencias**
- `three` (versao >=0.133)
- `@react-three/fiber` (versao ^8.18 -- compativel com React 18)
- `@react-three/drei` (versao ^9.122.0)

**2. Criar o componente**
- Criar `src/components/ui/3d-gallery-photography.tsx` com o codigo do InfiniteGallery
- O componente fornecido tem JSX incompleto (tags vazias nos retornos). Sera reconstruido com a estrutura correta:
  - Canvas do Three.js com a cena da galeria
  - Planos com texturas das imagens flutuando em profundidade
  - Efeito de blur e fade nas bordas
  - Auto-play com retomada apos 3s de inatividade

**3. Integrar no HeroSection**
- Substituir a tag `<img>` de fundo pela galeria 3D
- Usar as imagens existentes do projeto como fonte (gallery-barbearia, gallery-bar, gallery-banheiro, gallery-loja, gallery-outlet, gallery-logo-madeira, barbearia-3, barbershop-interior, barber-at-work, hero-barbershop)
- Manter o gradient overlay por cima para legibilidade do texto
- Manter todo o conteudo (titulo, subtitulo, botoes) inalterado

### Estrutura final do Hero

```text
+---------------------------------------+
|  [Galeria 3D - imagens flutuando]     |
|                                       |
|  [Gradient overlay escuro]            |
|                                       |
|  Sua melhor                           |
|  versao (com underline animado)       |
|                                       |
|  Texto descritivo...                  |
|                                       |
|  [Agendar Horario] [Ver Servicos]     |
+---------------------------------------+
```

### Detalhes tecnicos

- **Dependencias novas**: `three`, `@react-three/fiber@^8.18`, `@react-three/drei@^9.122.0`
- **Arquivo novo**: `src/components/ui/3d-gallery-photography.tsx`
- **Arquivo editado**: `src/components/home/HeroSection.tsx`
- A galeria ocupa o fundo completo do hero com `position: absolute` e `inset: 0`
- O componente inclui fallback para navegadores sem WebGL (mostra uma imagem estatica)
- Auto-play ativado por padrao para que as imagens passem automaticamente

