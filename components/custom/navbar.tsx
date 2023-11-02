import { ThemeToggle } from "../theme/theme-toggle"
import Link from "next/link"

export function Navbar() {
  return (
    <div className="fixed top-0 w-[100%] border-b backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-[70ch] items-center px-5">
        <Link href={"/"} className="flex items-center hover:underline">
          <strong className="ml-2">32/05 TEAM</strong>
        </Link>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </nav>
    </div>
  )
}
