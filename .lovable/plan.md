

## Corrigir Galeria 3D do Hero — Imagens Maiores e Corretas

### O que sera feito
1. Trocar as imagens da galeria 3D para usar apenas as 4 imagens da secao "O que nos torna diferentes": `service-haircut.jpg`, `service-beard.jpg`, `service-combo.jpg` e `manicure-pedicure.png`
2. Aumentar o tamanho dos planos 3D para que as imagens fiquem bem maiores e preencham melhor a tela

### Alteracoes

**Arquivo: `src/components/home/HeroSection.tsx`**
- Remover todos os imports de imagens da galeria antiga (gallery-barbearia, gallery-bar, etc.)
- Importar apenas as 4 imagens da secao de diferenciais: `service-haircut`, `service-beard`, `service-combo`, `manicure-pedicure`
- Reduzir `visibleCount` de 10 para 6 (menos imagens = mais destaque para cada uma)

**Arquivo: `src/components/ui/3d-gallery-photography.tsx`**
- Aumentar a escala base dos planos de `2` para `5` (ex: `[5 * aspect, 5, 1]`), fazendo as imagens ficarem 2.5x maiores
- Isso fara as fotos ocuparem muito mais espaco visual no fundo do hero

### Detalhes tecnicos
- Imagens usadas: `service-haircut.jpg`, `service-beard.jpg`, `service-combo.jpg`, `manicure-pedicure.png`
- Escala dos planos: de `2` para `5` unidades
- visibleCount: de `10` para `6`
- Nenhuma dependencia nova necessaria
