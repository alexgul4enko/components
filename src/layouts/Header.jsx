import { Component } from 'react'

export default function Header({ children, className = '' }) {
  return (<header className={className}><div className="header_container">{children}</div></header>)
}
