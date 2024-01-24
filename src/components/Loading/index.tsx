import { createPortal } from 'react-dom';

export function Loading() {
  return createPortal(
    <div
      className="fixed flex items-center justify-center h-full w-full z-[999] top-0 left-0 bg-black opacity-60"
      role="status"
      id="loading-container"
    >
      <svg
        width="60"
        height="50"
        viewBox="0 0 48 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-ping"
      >
        <path d="M0 19.8347V0L31.9451 40H15.9726L0 19.8347Z" fill="white" />
        <path
          d="M42.6484 26.6116H27.0051L48 0V19.8347L42.6484 26.6116Z"
          fill="white"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>,

    document.body,
  );
}
