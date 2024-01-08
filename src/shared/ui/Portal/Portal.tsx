import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  element?: HTMLElement;
}
const Portal = ({
  children,
  element = document.getElementById('root') ??
    document.getElementById('storybook-root')
}: PortalProps) => {
  return createPortal(children, element);
};

export default Portal;
