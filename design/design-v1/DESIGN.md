---
name: Obsidian Flux
colors:
  surface: '#0f1418'
  surface-dim: '#0f1418'
  surface-bright: '#353a3e'
  surface-container-lowest: '#0a0f13'
  surface-container-low: '#171c20'
  surface-container: '#1b2024'
  surface-container-high: '#252b2f'
  surface-container-highest: '#30353a'
  on-surface: '#dee3e9'
  on-surface-variant: '#bec8d2'
  inverse-surface: '#dee3e9'
  inverse-on-surface: '#2c3135'
  outline: '#88929b'
  outline-variant: '#3e4850'
  surface-tint: '#89ceff'
  primary: '#89ceff'
  on-primary: '#00344d'
  primary-container: '#0ea5e9'
  on-primary-container: '#003751'
  inverse-primary: '#006591'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#ffb86e'
  on-tertiary: '#492900'
  tertiary-container: '#de8712'
  on-tertiary-container: '#4d2b00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c9e6ff'
  primary-fixed-dim: '#89ceff'
  on-primary-fixed: '#001e2f'
  on-primary-fixed-variant: '#004c6e'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#ffdcbd'
  tertiary-fixed-dim: '#ffb86e'
  on-tertiary-fixed: '#2c1600'
  on-tertiary-fixed-variant: '#693c00'
  background: '#0f1418'
  on-background: '#dee3e9'
  surface-variant: '#30353a'
  slate-base: '#0A0A0B'
  slate-surface: '#171719'
  slate-muted: '#A3A3A3'
  accent-teal: '#2DD4BF'
  glass-border: rgba(255, 255, 255, 0.08)
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.2'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  mono:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  island-padding: 12px 20px
  section-gap: 120px
---

## Brand & Style

This design system is crafted for the high-end software engineering persona. It balances technical precision with a fluid, modern aesthetic that feels alive rather than static. The personality is "Quietly Confident"—avoiding the aggressive "gamer" aesthetic in favor of a sophisticated, editorial-tech look.

The primary movement is **Minimalism** blended with **Glassmorphism**. It utilizes a "Dynamic Island" philosophy where the navigation is a floating, intelligent container that adapts its width and contents based on the user's scroll depth and context. Visual interest is generated through deep, layered surfaces and subtle atmospheric glows rather than heavy ornamentation.

Target Audience:
- Technical recruiters and engineering managers looking for premium talent.
- Potential collaborators in the open-source and startup space.
- Clients seeking modern, high-performance software solutions.

## Colors

The palette is anchored in a deep, nocturnal base to reduce eye strain and provide a premium canvas for code and content. 

- **Primary & Secondary**: A gradient of Electric Blue to Violet is used for interactive focal points, such as the "Hire Me" button and active navigation states.
- **Surface Strategy**: We use tiered slate tones. `#0A0A0B` serves as the canvas, while `#171719` is used for floating cards and the dynamic island navigation.
- **Accents**: Teal is reserved for "success" states or category tags (e.g., "Coding") to maintain high legibility against the dark background.
- **Gradients**: Use linear-gradients at 135 degrees for primary actions, mixing the blue and violet sparingly to avoid visual fatigue.

## Typography

This design system leverages **Geist** for its technical, monospaced-influenced DNA in headlines and UI labels, paired with **Inter** for long-form body text to ensure maximum readability.

- **Headlines**: Use tight letter-spacing and bold weights to create a "locked-in" architectural feel. 
- **Body**: Standardized on Inter for its neutral, humanist qualities that soften the technical edge of the Geist headers.
- **Code/Meta**: Use the Geist font for small labels and category tags to reinforce the developer-centric nature of the portfolio.
- **Responsive**: Scale down headlines by 15-20% on mobile devices while maintaining line-height ratios.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy with generous vertical breathing room to allow individual projects and sections to stand alone as distinct "chapters."

- **The Dynamic Island**: A floating header container fixed to the top. It uses a horizontal flex layout with a max-width that expands or contracts based on content.
- **Desktop**: A 12-column grid with a max-width of 1200px. Sections are separated by a consistent 120px gap.
- **Mobile**: Single-column layout with 20px side margins. The Dynamic Island shifts to the bottom of the screen (reachable zone) for better UX.
- **Rhythm**: All spacing is derived from an 8px base unit.

## Elevation & Depth

Visual hierarchy is established through **Tonal Layering** and **Ambient Glows**.

- **Level 0 (Background)**: Solid `#0A0A0B`.
- **Level 1 (Cards)**: `#171719` with a subtle `1px` solid border using `glass-border`.
- **Level 2 (Dynamic Island/Modals)**: Semi-transparent `#171719` with a 12px backdrop-blur. 
- **Shadows**: Instead of black shadows, use very soft, large-radius shadows with a slight blue tint (e.g., `0 20px 40px rgba(0, 0, 0, 0.4)`).
- **Interactive Depth**: On hover, cards should lift slightly and increase the opacity of their border-color to simulate a light source moving closer.

## Shapes

The shape language is defined by large, friendly radii that contrast against the sharp technical typography. 

- **Containers**: Use `rounded-2xl` (1.5rem) for main content cards to create a modern, hardware-like feel.
- **Navigation**: The Dynamic Island and primary buttons use `pill-shaped` (full radius) to emphasize their interactive nature.
- **Inner Elements**: Smaller components like tags or input fields use `rounded-lg` (1rem) to maintain nested harmony.

## Components

### Dynamic Island (Navigation)
- **Style**: Floating, blurred background, pill-shaped.
- **Interaction**: On scroll, it may shrink to show only icons; on hover, it expands to show text labels.
- **Items**: Use Geist mono-style icons with 16px size.

### Primary Button
- **Style**: Pill-shaped, gradient background (Blue to Violet).
- **Typography**: Label-caps (Geist).
- **Hover**: Subtle scale-up (1.02x) and an increased outer glow.

### Service/Project Cards
- **Structure**: Glass container -> Category Tag -> Headline -> Description.
- **Grid Detail**: Use a subtle 20px background grid pattern inside the card header to emphasize the "work-in-progress" or "blueprint" nature of engineering.

### Inputs & Text Areas
- **Style**: Darker than the card surface (`#0A0A0B`), `rounded-lg`, with a 1px border that glows blue on focus.
- **Labels**: Small caps Geist text placed above the field.

### Chips & Tags
- **Style**: Low-contrast teal or slate background, Geist Mono font, 12px size. Used for listing tech stacks (e.g., "React", "Rust").