import React, { ReactNode } from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

interface ProductGridProps {
  children: ReactNode;
  className?: string;
}

export default function ProductGrid({ children, className }: ProductGridProps) {
  return <div className={clsx(styles.grid, className)}>{children}</div>;
}
