import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';

import KaswangaGreenProject from '../pages/projects/kaswanga-green-project';

vi.mock('next/head', () => ({
  default: ({ children }: { children: ReactNode }) => <>{children}</>,
}));

describe('Kaswanga Green Project case study', () => {
  it('renders the project narrative and a route back to the portfolio', () => {
    render(<KaswangaGreenProject />);

    expect(
      screen.getByRole('heading', { name: 'Kaswanga Green Project' }),
    ).toBeInTheDocument();
    expect(screen.getByText('Plant & restore')).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Back to all work' }),
    ).toHaveAttribute('href', '/');
    expect(
      screen.getByRole('link', { name: 'Read website proposal' }),
    ).toHaveAttribute('href', '/website-proposal/kaswanga-green-project');
  });
});
