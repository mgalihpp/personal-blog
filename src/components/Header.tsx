import Link from "next/link"

export default function Header() {
  const navLink = [
    {
      name: "home",
      link: "/home",
    },
    {
      name: "about",
      link: "/about",
    },
  ]

  return (
    <header className="mb-20 mt-16 flex content-center items-center justify-between font-sans text-base">
      <div className="flex gap-4">
        {navLink.map((item) => (
          <Link href={item.link} className="uppercase">{item.name}</Link>
        ))}
      </div>
    </header>
  )
}
