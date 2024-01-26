import { ReactNode } from 'react';
import { Navbar } from './Navbar';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="z-20">
      <Navbar />
      <div
        style={{
          width: '100vw',
          height: '100vh',
        }}
      >
        {children}
      </div>
    </div>
  );
}
