import React, { FC } from "react";
import "./layout.css";

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }: Props) => {
  return (
    <div className='layout'>
      <header>Memory Challenge</header>
      <main className='main'>{children}</main>
      <footer className='footer'>Footer</footer>
    </div>
  );
};

export default Layout;
