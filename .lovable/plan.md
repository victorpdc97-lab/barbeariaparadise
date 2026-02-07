

## Modernizar botoes App Store e Google Play na secao "Assine pelo app"

### O que vai mudar

Os botoes atuais sao simples com fundo semi-transparente e borda sutil. Vamos transforma-los em botoes mais modernos e atraentes com:

- **Fundo com gradiente sutil** (glass morphism) ao inves de cor solida
- **Icones maiores** e mais destacados
- **Efeito hover com escala e glow** para dar feedback visual premium
- **Bordas com gradiente** para um visual mais sofisticado
- **Cantos mais arredondados** (rounded-xl)
- **Sombra luminosa no hover** para dar profundidade

### Visual esperado

Os botoes terao um estilo "glassmorphism" com backdrop-blur, bordas sutis brilhantes, e ao passar o mouse crescem levemente com um brilho ao redor -- alinhado com a identidade premium e monocromatica do site.

### Detalhes tecnicos

**Arquivo:** `src/pages/Clube.tsx` (linhas 143-152)

Substituir os dois botoes `<a>` por versoes estilizadas com:
- Classes: `group rounded-xl px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:bg-white/10 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300`
- Icones com `w-7 h-7` e animacao `group-hover:scale-110`
- Texto principal com `text-base font-semibold`
- Subtexto com `text-[11px] uppercase tracking-wider`

