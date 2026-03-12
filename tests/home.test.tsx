/* eslint-disable @next/next/no-img-element */

import { render, screen } from '@testing-library/react';
import type { ImgHTMLAttributes, ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';

import Home from '../pages/index';

vi.mock('next/head', () => ({
  default: ({ children }: { children: ReactNode }) => <>{children}</>,
}));

vi.mock('next/image', () => ({
  default: ({ src, alt, ...rest }: ImgHTMLAttributes<HTMLImageElement>) => (
    // Next/Image is mocked to a native img for test environment rendering.
    <img src={typeof src === 'string' ? src : ''} alt={alt ?? ''} {...rest} />
  ),
}));

describe('Home page', () => {
  it('renders the portfolio owner name', () => {
    render(<Home />);

    expect(screen.getByText('Henry Adagala')).toBeInTheDocument();
  });
});
