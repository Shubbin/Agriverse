---
name: AgriVerse Production System
colors:
  surface: '#f5fbf4'
  surface-dim: '#d5dcd5'
  surface-bright: '#f5fbf4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff5ee'
  surface-container: '#e9f0e8'
  surface-container-high: '#e3eae3'
  surface-container-highest: '#dee4dd'
  on-surface: '#171d19'
  on-surface-variant: '#3d4a41'
  inverse-surface: '#2b322d'
  inverse-on-surface: '#ecf2eb'
  outline: '#6d7a71'
  outline-variant: '#bccabf'
  surface-tint: '#006c45'
  primary: '#006c45'
  on-primary: '#ffffff'
  primary-container: '#1fa971'
  on-primary-container: '#003520'
  inverse-primary: '#61dda0'
  secondary: '#3b6756'
  on-secondary: '#ffffff'
  secondary-container: '#bbead4'
  on-secondary-container: '#406b5a'
  tertiary: '#7d5800'
  on-tertiary: '#ffffff'
  tertiary-container: '#c28b0f'
  on-tertiary-container: '#3e2a00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#7ffaba'
  primary-fixed-dim: '#61dda0'
  on-primary-fixed: '#002112'
  on-primary-fixed-variant: '#005233'
  secondary-fixed: '#beedd7'
  secondary-fixed-dim: '#a2d1bb'
  on-secondary-fixed: '#002116'
  on-secondary-fixed-variant: '#234f3f'
  tertiary-fixed: '#ffdea9'
  tertiary-fixed-dim: '#fabc45'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5f4100'
  background: '#f5fbf4'
  on-background: '#171d19'
  surface-variant: '#dee4dd'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  3xl: 64px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
---

## Brand & Style

The design system is engineered for a high-trust, bank-grade agricultural ecosystem. It balances the vitality of agriculture with the precision of a fintech platform. The visual narrative is **Corporate Minimalist**, drawing inspiration from industry leaders like Stripe and Notion to convey stability, transparency, and professional growth.

The target audience ranges from novice farmers to institutional investors. Consequently, the UI avoids "tech-hype" aesthetics (glassmorphism, neon, heavy gradients) in favor of:
- **Clarity:** Generous whitespace and a rigid 8pt grid.
- **Authority:** A deep forest palette and structured information density.
- **Modernity:** Sharp functional components with purposeful, soft-touch rounding.

The emotional response should be one of "Reliable Innovation"—a platform that is as sophisticated as a modern bank but as grounded as the soil.

## Colors

The palette is strategically segmented to provide immediate semantic meaning without visual clutter.

- **Primary (Emerald Green):** Reserved for core actions, success states, and progress indicators. It represents growth and vitality.
- **Deep Forest:** Used for structural navigation (Sidebars, Top Bars). This provides a "heavy" anchor to the interface, signaling institutional strength.
- **Gold Accent:** Strictly limited to financial "Trust" markers—verification badges, credit scores, and loan-related modules. This prevents the color from losing its high-value significance.
- **AI Blue:** Utilized exclusively for Gemini-powered features to distinguish machine-generated insights from systemic data.
- **Neutral Foundation:** Warm White background reduces eye strain compared to pure white, while pure White surfaces are used for cards to create a clear layering effect.

## Typography

The design system utilizes **Inter** exclusively to maintain a clean, functional, and highly legible interface across all devices.

- **Scale:** A modular scale ensures hierarchy is clear. Display and Headline levels use tighter letter-spacing and heavier weights (600-700) to command attention.
- **Readability:** Body text is set at 16px for desktop to ensure accessibility for users in outdoor farming environments.
- **Semantic Labels:** Small labels (12px) use uppercase and slightly increased letter-spacing to differentiate them from body text without requiring a second font family.
- **Mobile Adaptation:** Headlines scale down on mobile to prevent awkward line breaks while maintaining a bold presence.

## Layout & Spacing

This design system is built on a **strict 8-point grid**. All dimensions, padding, and margins must be multiples of 8 (or 4 for micro-adjustments).

- **Grid System:** Use a 12-column fluid grid for desktop with 24px gutters. For tablets, use 8 columns. For mobile, use a 4-column fluid grid with 16px side margins.
- **Alignment:** Content should be left-aligned to mirror the reading pattern of professional documents (Notion-style). 
- **Density:** Use `lg` (24px) spacing between unrelated sections and `md` (16px) within card content to maintain a professional, airy feel that avoids information density fatigue.

## Elevation & Depth

Hierarchy is established through **Tonal Layering** and **Subtle Shadows** rather than intense color blocks.

- **Level 0 (Background):** Warm White (#F8FAF8).
- **Level 1 (Surfaces):** Pure White (#FFFFFF) cards. Cards must use a 1px solid border in `#E6EAE8` and a very soft, diffused shadow: `0 4px 12px rgba(0, 0, 0, 0.03)`.
- **Level 2 (Interaction):** Hover states for cards increase shadow depth slightly `0 8px 24px rgba(0, 0, 0, 0.06)` and may include a 1px primary-colored border.
- **Navigation:** The Sidebar (Deep Forest) sits at the highest conceptual level but uses flat color without shadows to maintain a "fixed-anchor" corporate feel.

## Shapes

The shape language is "Soft-Professional."

- **Cards:** Use a 16px radius. This is large enough to feel modern and approachable but small enough to maintain a structured grid.
- **Buttons:** Use a 12px radius. This "squircle-adjacent" look is a hallmark of modern fintech (Moniepoint style).
- **Inputs:** Use an 8px radius to provide a slightly more disciplined look than the buttons.
- **Badges/Chips:** Use pill-shaped (9999px) radii for verification tags and status indicators to differentiate them from interactive buttons.

## Components

### Buttons
- **Primary:** Emerald Green background, White text. High emphasis. 12px radius.
- **Secondary:** White background, Deep Forest border (1px), Deep Forest text.
- **Ghost:** No background or border. Deep Forest text. Used for less frequent actions.
- **AI Action:** Blue (#2F80ED) background with a Gemini sparkle icon.

### Cards
- Always use the White surface. 
- 1px #E6EAE8 border is mandatory to define boundaries against the Warm White background.
- Padding should be a consistent 24px (lg).

### Input Fields
- Background: Pure White.
- Border: 1px #E6EAE8.
- Focus State: 1px Emerald Green border with a 3px soft Emerald glow (10% opacity).
- Label: Inter Bold (600), 14px, Deep Forest.

### Badges & Status
- **Verified:** Gold (#F4B740) background with 10% opacity, Gold text, and a "Verified" check icon.
- **Success:** Primary (Emerald) 10% opacity, Emerald text.
- **AI Tag:** Blue (#2F80ED) 10% opacity, Blue text.

### Icons
- Use **Lucide** or **Material Symbols Outlined**.
- Stroke weight should be 1.5px to 2px for consistency.
- Icons in navigation should be Deep Forest (60% opacity) when inactive, and Primary (Emerald) when active.