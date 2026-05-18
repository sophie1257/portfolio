export default function Header() {
  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="header">
      <a href="#home" className="logo">
        Portfolio
      </a>

      <nav className="nav">
        {menuItems.map((item) => (
          <a key={item.name} href={item.href}>
            {item.name}
          </a>
        ))}
      </nav>
    </header>
  )
}