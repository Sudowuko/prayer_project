import React from 'react';
import Link from 'next/link';

function Navigation() {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/">
        <a>About</a>
      </Link>
    </nav>
  );
}

export default Navigation;
