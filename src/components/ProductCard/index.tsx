import React from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

interface ProductCardProps {
  href: string;
  logo: string; // Path to primary logo (used for light mode by default)
  logoDark?: string; // Optional path to dark mode logo
  logoAlt?: string; // Alt text for the logo
  logoTitle?: string; // Title for the logo
  description?: string; // Optional description (can use children instead)
  linkText: string;
  invertLogoOnHover?: boolean; // Whether to invert the logo color on hover in light mode
  className?: string;
  children?: React.ReactNode; // Allow children for description content
}

export default function ProductCard({
  href,
  logo,
  logoDark,
  logoAlt = '',
  logoTitle = '',
  description,
  linkText,
  invertLogoOnHover = true,
  className,
  children,
}: ProductCardProps) {
  return (
    <a className={clsx(styles.card, className)} href={href}>
      <div
        className={clsx(styles.logo, invertLogoOnHover && styles.invertOnHover)}
      >
        <ThemedImage
          alt={logoAlt}
          title={logoTitle}
          sources={{
            light: useBaseUrl(logo),
            dark: useBaseUrl(logoDark || logo), // Use logo for dark mode if logoDark is not provided
          }}
        />
      </div>
      <div className={styles.body}>{children || description}</div>
      <div className={styles.link}>{linkText}</div>
    </a>
  );
}
