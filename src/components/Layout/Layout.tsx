import React from "react";

function Layout({ children, className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return (
    <section className={`Layout ${className}`} {...props}>
      <header>header</header>
      <main>{children}</main>
      <footer>footer</footer>
    </section>
  );
}

export default Layout;
