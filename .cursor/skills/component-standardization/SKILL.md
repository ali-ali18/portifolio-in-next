---
name: component-standardization
description: Padroniza criação e revisão de componentes React/Next com cn, CVA e tipos no topo do projeto. Use ao criar ou refatorar componentes UI, bases ou seções, ou quando o usuário pedir padronização de componentes.
---

# Padronização de Componentes

## Regras

### 1. Sempre usar `cn` para className

- Importar `cn` de `@/lib/utils`.
- Aplicar classes base e permitir override via prop `className`: `className={cn("base-classes", className)}` ou `className={cn(variants({ ... }), className)}`.

### 2. Componentes com variantes: usar CVA

- Instalar/usar `class-variance-authority`.
- Definir variantes com `cva("base-classes", { variants: { ... }, defaultVariants: { ... } })`.
- Tipar props com `VariantProps<typeof nomeVariants>` (e cruzar com outras props do componente).
- Aplicar: `className={cn(nomeVariants({ variant, size, ... }), className)}`.
- Exportar as variantes quando forem reutilizáveis: `export { Component, componentVariants }`.
- Para variantes de tamanho, usar apenas a escala **xs | sm | md | lg | xl**. Mapear "default" para um deles (ex.: md) se necessário.

### 3. Tipagem

- **Tipos compartilhados**: em `src/types/`, um arquivo por domínio, nomes claros (ex.: `NavLink`, `HeaderProps`).
- **Props do componente**: podem ficar no topo do arquivo; para elementos nativos ou de lib, estender `ComponentPropsWithRef<typeof Element>` e incluir `className?: string`.
- Sufixo consistente para props: `XProps` para o componente `X`.

### 4. Tamanhos (size)

- Escala única em variantes de tamanho: **xs, sm, md, lg, xl**.
- Não introduzir tamanhos como "default" sem mapear para um da escala; preferir `md` como padrão quando fizer sentido.

### 5. Nomes

- Componentes e tipos em **PascalCase**; nomes explicativos, sem abreviações obscuras.
- Arquivos: seguir o restante do projeto (ex.: `Header.tsx`, `button.tsx`).

### 6. compoundVariants

- Usar apenas quando precisar de combinações (ex.: variant X + size Y). Opcional.

## Checklist antes de finalizar

- [ ] `cn` usado para montar `className`
- [ ] Se há variantes, usar CVA + `VariantProps`
- [ ] Tipos compartilhados em `src/types/`
- [ ] Size apenas xs, sm, md, lg, xl
- [ ] Nomes explicativos para componentes e tipos

## Referência

Para exemplos de Button (CVA + size), Header (CVA) e SubTitle (sem CVA, só cn), ver [examples.md](examples.md).
