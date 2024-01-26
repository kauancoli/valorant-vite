import { ReactNode } from 'react';
import { Navbar } from './Navbar';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div
      className="bg-accent"
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <Navbar />
      <div className="z-10">{children}</div>
    </div>
  );
}
