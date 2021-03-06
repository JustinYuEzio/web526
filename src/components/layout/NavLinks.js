import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

export default (props) => {
  const links = [
    { text: "Contact", href: "/contact" },
    { text: "About Us", href: "/about" },
    { text: "Characters", href: "/faqs" },
  ];

  const classNames = classnames(
    'list-reset',
    props.className
  )

  return (
    <ul className={classNames}>
      {links.map((link, index) => (
        <li key={index}>
          <NavLink to={link.href} activeClassName="is-active" style={{fontSize: '22px'}}>{link.text}</NavLink>
        </li>
      ))}
    </ul>
  )
}
