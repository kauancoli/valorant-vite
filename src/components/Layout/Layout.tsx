import { ReactNode } from 'react';
import { Navbar } from './Navbar';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
