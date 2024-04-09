// components/Link.tsx

import React, { ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode
}

const Link: React.FC<LinkProps> = ({ href, children }) => {
  return (
    <a href={href} className="font-medium text-primary-600 hover:underline dark:text-primary-500">
      {children}
    </a>
  );
};

export default Link;
