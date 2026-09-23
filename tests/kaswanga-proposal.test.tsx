import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, expect, it, vi } from 'vitest';

import WebsiteProposal from '../pages/website-proposal/kaswanga-green-project';

vi.mock('next/head', () => ({
  default: ({ children }: { children: ReactNode }) => <>{children}</>,
}));

describe('Kaswanga Green Project website proposal', () => {
  it('renders the proposal, contents navigation, and organization details', () => {
    render(<WebsiteProposal />);

    expect(
      screen.getByRole('heading', { name: 'Kaswanga Green Project' }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: 'Proposal contents' }),
    ).toBeInTheDocument();
    expect(screen.getAllByText('Limited by Guarantee')).toHaveLength(2);
    expect(
      screen.getByText('Recommended website features.'),
    ).toBeInTheDocument();
    expect(screen.getByText('KES 30,000.00')).toBeInTheDocument();
    expect(screen.getByText('Website and email hosting')).toBeInTheDocument();
    expect(screen.getByText('KES 5,000.00')).toBeInTheDocument();
  });
});
