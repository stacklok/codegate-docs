# ProductCard Component

A reusable card component for displaying product information with hover effects.

## Usage

```jsx
import ProductCard from '@site/src/components/ProductCard';

<ProductCard
  href='/product-path'
  logo='/img/product-logo-light.svg'
  logoDark='/img/product-logo-dark.svg' // Optional
  logoAlt='Product Logo'
  logoTitle='Product Logo'
  // invertLogoOnHover={true} is the default
  description='Product description text goes here.'
  linkText='Read documentation'
/>;
```

## Props

| Prop                | Type    | Required | Description                                                                                   |
| ------------------- | ------- | -------- | --------------------------------------------------------------------------------------------- |
| `href`              | string  | Yes      | The URL the card links to                                                                     |
| `logo`              | string  | Yes      | Path to the primary logo image (used for light mode)                                          |
| `logoDark`          | string  | No       | Optional path to dark mode logo. If not provided, the primary logo will be used for dark mode |
| `logoAlt`           | string  | No       | Alt text for the logo image (for accessibility)                                               |
| `logoTitle`         | string  | No       | Title attribute for the logo image                                                            |
| `description`       | string  | Yes      | Product description text                                                                      |
| `linkText`          | string  | Yes      | Text for the call-to-action link                                                              |
| `invertLogoOnHover` | boolean | No       | Whether to invert the logo color on hover in light mode (default: true)                       |
| `className`         | string  | No       | Additional CSS class names to apply to the card                                               |

## Styling

The component uses CSS modules for styling. The styles are defined in
`styles.module.css`.

### Hover Effect

The card has a hover effect that changes the background image. The background
image is referenced using the `@site` alias:

```css
background-image: url('@site/static/img/product-card-hover.png');
```

This makes the component more portable when used in other Docusaurus projects.

### Dark Mode Support

The component supports dark mode through:

1. Optional dark mode logo via the `logoDark` prop
2. CSS that detects the theme using the `[data-theme='dark']` selector

### Logo Inversion on Hover

You can control whether the logo should be inverted on hover in light mode using
the `invertLogoOnHover` prop:

```jsx
// Logo will be inverted on hover (default behavior)
<ProductCard ... />
// or explicitly
<ProductCard invertLogoOnHover={true} ... />

// Logo will NOT be inverted on hover
<ProductCard invertLogoOnHover={false} ... />
```

This is useful for logos that need special handling on dark backgrounds. For
example, if your logo is already white or has a transparent background, you
might not want to invert it.
