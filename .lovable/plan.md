
## Alterar badges da seção "Assine pelo app" para o estilo do modal

A imagem de referência mostra os badges em português, com texto "Disponivel na / App Store" e "Disponivel no / Google Play", em formato de botoes largos (full-width) com cantos arredondados.

### Alteracoes

**1. Atualizar textos do componente `app-store-button.tsx`**
- `AppStoreButton`: trocar "Download on the" para "Disponivel na"
- `GooglePlayButton`: trocar "GET IT ON" para "Disponivel no"

**2. Atualizar estilo dos badges na secao "Assine pelo app" em `Clube.tsx`**
- Alterar layout de `flex-col sm:flex-row` para `flex-col` empilhado
- Adicionar `w-full max-w-xs` nos links/botoes para ficarem largos como na referencia
- Adicionar classe `w-full` nos botoes para ocuparem toda a largura disponivel

### Detalhes tecnicos

- Arquivo: `src/components/ui/app-store-button.tsx` - linhas 22-23 e 48-49 (textos)
- Arquivo: `src/pages/Clube.tsx` - linhas 144-151 (secao "Assine pelo app")
- Os botoes do modal (`DownloadAppModal.tsx`) tambem serao atualizados automaticamente pois usam os mesmos componentes
