

## Substituir fundo de fotos do HeroSection pela SpiralAnimation

Trocar o fundo da seção "Sua melhor versão" (HeroSection): remover a galeria 3D de fotos e usar a animação espiral como fundo.

### Alterações

**1. `src/components/home/HeroSection.tsx`**

- Remover todos os imports de imagens (heroImage, serviceHaircut, serviceBeard, serviceCombo, manicurePedicure)
- Remover o import do `InfiniteGallery` (lazy)
- Remover o import de `lazy` e `Suspense` do React
- Importar o componente `SpiralAnimation`
- Substituir o bloco `<Suspense>` com a galeria 3D por `<SpiralAnimation />` posicionado com `absolute inset-0`
- Manter o gradient overlay e todo o conteúdo de texto como estão

**2. `src/pages/Index.tsx`**

- Remover o `<SpiralAnimation />` separado que aparece antes do HeroSection (já que agora faz parte do fundo do hero)
- Remover o import do SpiralAnimation

### Resultado

A seção hero terá a animação espiral com partículas como fundo, com o texto "Sua melhor versão" por cima, sem duplicação da animação na página.
