{readme}
# React Density + Spacing Inheritance Demo

A small React project demonstrating **component-level inheritance of density and spacing** using **CSS variables**, with **container queries** for responsive layouts.  

Components:
- `<Container>`: a wrapper that defines `density` and `spacing`.
- `<Child>`: a component that inherits density and spacing from the nearest parent container.

---

## Features

- **Inheritance via CSS variables:**  
  Each `Child` automatically inherits density and spacing from the nearest parent `Container`.

- **Spacing tokens:**  
  Supports `xSmall`, `small`, `medium`, `large`, `xLarge` for consistent spacing.  

- **Density levels:**  
  `low`, `default`, `high` — affects padding and font size.

- **Local defaults:**  
  Components render correctly even without a parent — default values ensure standalone usage.

- **Overriding / breaking inheritance:**  
  - Local overrides on a `Child` or nested `Container`.  
  - Optional `resetDefaults` prop on `Container` to ignore parent values.  

- **Responsive with container queries:**  
  Density can automatically adjust based on container size (e.g., narrow containers → high density).  

---

## How Inheritance Works in This Library

In this library, **density** and **spacing** are passed using **CSS variables** (`--density` and `--spacing-token`). Here's how inheritance works:

1. **Nearest-ancestor inheritance**  
   - A `Child` component automatically inherits `density` and `spacing` from the closest parent `Container` that defines them.
   - Nested `Containers` or `Children` can override these values locally.
   - Siblings or other branches are unaffected — each subtree manages its own values.

2. **Local defaults**  
   - Every component has built-in defaults:
     - `density: default`
     - `spacing-token: medium`
   - This ensures that a component can be rendered standalone, outside any `Container`.

3. **Breaking inheritance**  
   - You can reset a component to defaults using the `resetDefaults` prop on `Container`.
   - Example:
```tsx
<Container density="high">
  <Container resetDefaults>
    <Child label="Ignores parent's density → uses defaults" />
  </Container>
</Container>
```

---

## Usage

### Basic Inheritance

```tsx
<Container density="low" spacing="large">
  <Child label="A: inherits low density, large spacing" />
  <Container>
    <Child label="B: inherits low density, large spacing" />
    <Container density="high" spacing="xSmall">
      <Child label="C: overrides to high density, xSmall spacing" />
    </Container>
  </Container>
</Container>

<Container>
  <Child label="D: no parent → defaults (medium, default)" />
</Container>
```

- **A:** inherits `low` density, `large` spacing from parent.
- **B:** inherits from nearest ancestor (`low` density, `large` spacing).
- **C:** overrides parent with its own `high` density and `xSmall` spacing.
- **D:** no parent → uses default values (`default` density, `medium` spacing).

---

### Breaking Inheritance

Use the `resetDefaults` prop or inline styles:

```tsx
<Container density="high">
  <Container resetDefaults>
    <Child label="Ignores high density → uses defaults" />
  </Container>
</Container>
```

- The inner container breaks inheritance and resets to default density and spacing.

---

### Creating a New Component

To create a new component that works with this inheritance system:

1. Use the CSS variables for styling
   - Reference --density and --spacing in your component’s CSS.
   - Example:
     .my-component {
       font-size: var(--font-size, 1rem);
       padding: var(--child-padding, 1rem);
     }

2. Provide local defaults
   - Ensure your component works standalone by falling back to defaults if variables are not defined.

3. Optional local overrides
   - You can allow your component to accept props like density or spacing and apply them via inline styles.
     const style = {
       '--density': props.density ?? 'default',
       '--spacing-token': props.spacing ?? 'medium',
     } as React.CSSProperties;

4. Nestability
   - Any component built this way will automatically inherit from its parent container when nested, unless resetDefaults is used.

Summary:
- All components automatically inherit density and spacing from the nearest parent container.
- Local defaults guarantee standalone rendering.
- Adding new components is simple: use the CSS variables for styling, provide defaults, and they just work with nested Containers.

---

### Spacing Tokens

| Token    | Value  |
|----------|--------|
| xSmall   | 0.25rem |
| small    | 0.5rem  |
| medium   | 1rem    |
| large    | 1.5rem  |
| xLarge   | 2rem    |

- Tokens are mapped to `--spacing` CSS variable.  
- Children use `--child-padding` to adjust spacing based on density and token.

---

### Container Queries

- Each container uses `container-type: inline-size` to enable container queries.  
- Example: narrow containers automatically switch to `high` density.

```css
@container (max-width: 400px) {
  .container {
    --density: high;
  }
}
```

- Children inherit these dynamically updated variables without extra code.

---

## Styling Notes

- **CSS variables are the core mechanism**: `--density`, `--spacing-token`, `--spacing`, `--child-padding`, `--font-size`.  
- **Local defaults ensure stand-alone behavior**: even if a component is rendered outside a `Container`.  
- **Density mappings** adjust font size and child padding.

---

## How it Works

1. Parent `Container` defines `--density` and `--spacing-token`.  
2. Children (`Child` or nested `Container`) inherit the closest ancestor variables.  
3. CSS maps spacing tokens to actual rem values.  
4. Density can modify child padding or font size.  
5. Container queries update variables based on container size.  
6. Local defaults ensure fallback values if no ancestor defines them.  

---

## Getting Started

1. Create a Vite React TypeScript project:

```bash
npm create vite@latest my-density-demo -- --template react-ts
cd my-density-demo
npm install
```

2. Replace the `src/` folder with the provided project files (`App.tsx`, `Container.tsx`, `Child.tsx`, `styles.css`, `main.tsx`).  

3. Run the project:

```bash
npm run dev
```

4. Resize containers in the browser to see density and spacing inheritance in action.  

---

## Notes

- Use the `resetDefaults` prop to intentionally break inheritance.  
- Spacing tokens and density are designed to be **predictable, reusable, and composable**.  
- This architecture ensures **components are self-contained**, **composable**, and **responsive**, without relying on a global provider.
{readme}
