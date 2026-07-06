import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Hank Linder',
  description: 'Get in touch with Hank Linder — Credit Analyst at Consolidated Electrical Distributors, open to discussing credit, financial analytics, and risk assessment.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
