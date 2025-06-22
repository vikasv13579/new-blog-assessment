import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = React.memo(function Header(props) {
  return (
    <>
      <header className="header_section">
        <div className="container">
          <div className="heading_wrap">
            <nav className="breadcrumb_wrap">
              <ul className="breadcrumb">
                <li className="breadcrumb_item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb_item">
                  <Link href="/blog">Blog</Link>
                </li>
                <li className="breadcrumb_item active" aria-current="page">
                  Articles
                </li>
              </ul>
            </nav>
            <div className="main_heading">
              <h1 className="title">{props.title}</h1>
            </div>
          </div>
        </div>
        <div className="container_fluid">
          <Image
            src={props.image}
            alt={props.title}
            title={props.title}
            className="img_fluid w_100"
            width={1440}
            height={480}
          />
        </div>
      </header>
    </>
  );
});

export default Header;
