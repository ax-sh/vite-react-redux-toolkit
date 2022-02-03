import React from "react";

function Layout({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <section className={`Layout ${className}`} {...props}>
      <header>
        <nav>Nav</nav>
        header
      </header>
      <main>{children}</main>
      <footer>footer</footer>
    </section>
  );
}

export default Layout;
