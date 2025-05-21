# ProductGrid Component

A responsive grid container for displaying ProductCard components.

## Usage

```jsx
import ProductGrid from '@site/src/components/ProductGrid';
import ProductCard from '@site/src/components/ProductCard';

<ProductGrid>
  <ProductCard
    href='/product-1'
    logo='/img/product1-logo.svg'
    description='Product 1 description'
    linkText='Learn more'
  />
  <ProductCard
    href='/product-2'
    logo='/img/product2-logo.svg'
    description='Product 2 description'
    linkText='Learn more'
  />
  {/* Add as many ProductCard components as needed */}
</ProductGrid>;
```

## Props

| Prop        | Type      | Required | Description                                                                    |
| ----------- | --------- | -------- | ------------------------------------------------------------------------------ |
| `children`  | ReactNode | Yes      | The child components to display in the grid (typically ProductCard components) |
| `className` | string    | No       | Additional CSS class names to apply to the grid                                |

## Styling

The component uses CSS modules for styling. The styles are defined in
`styles.module.css`.

### Grid Layout

The grid uses CSS Grid with auto-fit and minmax to create a responsive layout:

```css
.grid {
  margin-top: 3rem;
  display: grid;
  gap: var(--ifm-spacing-horizontal);
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}
```

This creates a responsive grid where:

- Cards will be at least 280px wide
- The grid will automatically fit as many cards as possible in each row
- Cards will expand to fill available space
- On smaller screens, cards will stack vertically

## Best Practices

- Use this component with ProductCard components for a consistent layout
- The grid is designed to work with any number of cards, but 2-4 cards per row
  typically looks best
- For a single card, consider using the ProductCard component directly without
  the grid
