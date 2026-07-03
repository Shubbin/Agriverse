---
name: AgriVerse Ecosystem
colors:
  surface: '#f6faf8'
  surface-dim: '#d7dbd9'
  surface-bright: '#f6faf8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4f2'
  surface-container: '#ebefed'
  surface-container-high: '#e5e9e7'
  surface-container-highest: '#dfe3e1'
  on-surface: '#181c1c'
  on-surface-variant: '#3d4a41'
  inverse-surface: '#2d3130'
  inverse-on-surface: '#eef2f0'
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
  background: '#f6faf8'
  on-background: '#181c1c'
  surface-variant: '#dfe3e1'
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
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
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
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

This design system is engineered for a professional, corporate agricultural ecosystem that bridges the gap between traditional farming and modern financial inclusion. The aesthetic is **Corporate Modern**, drawing inspiration from high-end SaaS and fintech platforms like Stripe and Linear. It prioritizes clarity, authority, and trustworthiness to make farmers feel like bankable entrepreneurs.

The visual narrative avoids "rural" cliches in favor of a "Fintech for Agriculture" approach. It utilizes expansive whitespace, precise alignment, and a sophisticated color palette to elevate the user's perception of their own professional data. The emotional response should be one of stability and progress.

**Key Stylistic Pillars:**
- **Authenticity:** Use high-resolution, authentic photography of African agriculture. Images should focus on dignity, productivity, and modern techniques.
- **Precision:** Thin 1px borders and a strict 8pt grid create a sense of institutional reliability.
- **Contextual Intelligence:** Distinct visual cues for AI-powered insights and financial status levels.

## Colors

The palette is rooted in the "Emerald Green" of action and growth, grounded by a "Deep Forest" navigation tier that provides a serious, professional frame for the content.

- **Primary (Emerald Green):** Used for primary actions, progress bars, and positive growth trends.
- **Deep Forest:** Reserved for structural elements like sidebars, headers, and footers to provide a "banking-grade" contrast.
- **Gold Accent:** This is a "Sacred Color" within the system. Use it strictly for high-value indicators: Verified badges, Credit Readiness scores, and Loan Eligibility status.
- **AI Highlight (Blue):** A dedicated functional color used only for Google Gemini-powered insights, chatbot interfaces, and automated suggestions.
- **Neutrals:** A warm white background prevents the UI from feeling sterile, while the thin gray borders (#E6EAE8) maintain structure.

## Typography

This design system relies exclusively on **Inter** to achieve a clean, utilitarian, and global professional feel. The scale uses tight tracking on larger headlines to mimic modern SaaS aesthetics and generous line-height on body text to ensure readability for farmers in varied environments.

**Usage Rules:**
- **Headlines:** Use SemiBold (600) or Bold (700) for all section headers. Use tight letter spacing (-0.01em to -0.02em) for "Display" sizes.
- **Body:** Standard reading text should always be Regular (400) at 16px.
- **Labels:** Small labels and metadata should use Medium (500) or SemiBold (600) at 12px or 14px.
- **Numbers:** For financial data (Credit Scores, Loan amounts), use SemiBold to emphasize the data's importance.

## Layout & Spacing

The system follows a strict **8pt grid** to ensure mathematical harmony between elements. The layout philosophy is a **Fixed Grid** on desktop (max-width 1280px) and a **Fluid Grid** on mobile.

**Breakpoints:**
- **Mobile (0-599px):** 4-column layout, 16px side margins.
- **Tablet (600-1023px):** 8-column layout, 24px side margins.
- **Desktop (1024px+):** 12-column layout, 24px gutters, margins scale to center content.

Spacing between cards should default to `md` (24px). Spacing within components (like internal card padding) should follow the `sm` (12px) or `md` (24px) units to maintain a "generous" and premium feel.

## Elevation & Depth

To maintain a "SaaS Banking" feel, depth is communicated through **Tonal Layers** and **Subtle Shadows** rather than aggressive elevation.

- **Background:** Warm White (#F8FAF8) provides the lowest layer.
- **Surface:** White (#FFFFFF) cards sit on top of the background.
- **Borders:** All cards and interactive elements use a 1px solid border (#E6EAE8).
- **Shadows:** Use a single, highly diffused "Soft Drop" for cards: `0px 4px 12px rgba(0, 0, 0, 0.03)`. 
- **Active State:** When an element is clicked or active, the border shifts to Emerald Green (#1FA971), but the shadow does not increase significantly, keeping the interface grounded.

## Shapes

The shape language balances approachability with structured professionalism.

- **Cards:** Use a 16px (`rounded-xl` equivalent) radius to soften the high-information density.
- **Buttons & Inputs:** Use a 12px (`rounded-lg` equivalent) radius. This differentiates interactive elements from the containers they sit in.
- **Chips/Badges:** Use a fully rounded "Pill" shape for status indicators (e.g., "Active", "Pending").
- **Icons:** Use **Material Symbols Outlined** (weight 300) or **Lucide** icons. Line weight should be consistent (2px) to match the thin border language.

## Components

### Buttons
- **Primary:** Emerald Green background, White text. 12px radius. 
- **Secondary:** Transparent background, Emerald Green 1px border. 
- **Ghost:** No border or background, Emerald Green text. Used for less frequent actions.
- **AI Action:** Blue (#2F80ED) background with a Gemini spark icon.

### Cards
- **Standard Card:** White background, 16px radius, #E6EAE8 border.
- **Insight Card:** Features a 4px left-accent border in AI Blue or Emerald Green depending on the content source.

### Input Fields
- 12px radius, #E6EAE8 border, 16px horizontal padding.
- Focused state: 1px Emerald Green border with a 2px soft green outer glow (20% opacity).

### Badges & Chips
- **Verified Badge:** Gold (#F4B740) background or text, paired with a checkmark icon.
- **Status Chips:** Light tinted backgrounds (e.g., 10% opacity of the status color) with high-contrast text.

### Lists
- Use 1px horizontal dividers (#E6EAE8). Ensure 16px of vertical padding between items for a "premium" airy feel.

### Specialized Components
- **Credit Score Gauge:** A semi-circular gauge using the Gold (#F4B740) for high scores, positioned within a prominent dashboard card.
- **Verification Progress:** A stepper component using Emerald Green to indicate completed 3MTT modules.