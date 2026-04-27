import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = window.location.pathname
  const linkClass = (path) =>
    `py-5 transition hover:text-[#2d2be8] ${
      pathname === path ? 'border-b-2 border-[#2d2be8] text-[#2d2be8]' : ''
    }`
  const mobileLinkClass = (path) =>
    `rounded-lg px-4 py-3 text-base font-semibold transition ${
      pathname === path ? 'bg-[#edf0ff] text-[#2d2be8]' : 'text-slate-700 hover:bg-slate-100'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="text-xl font-black tracking-tight text-[#1f22e8]">
          Online Course
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a className={linkClass('/')} href="/">
            Home
          </a>
          <a className={linkClass('/courses')} href="/courses">
            Courses
          </a>
          <a className={linkClass('/popular')} href="/popular">
            Popular
          </a>
          <a className={linkClass('/about')} href="/about">
            About
          </a>
          <a className={linkClass('/contact')} href="/contact">
            Contact
          </a>
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <a className="hidden text-sm font-medium text-slate-500 hover:text-[#2d2be8] sm:inline" href="#login">
            Login
          </a>
          <a
            className="rounded-md bg-[#2f2bdc] px-4 py-2.5 text-sm font-bold text-white shadow-sm shadow-indigo-500/20 transition hover:bg-[#1916b8]"
            href="/pricing"
          >
            Get Started
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-800 transition hover:border-[#2d2be8] hover:text-[#2d2be8] md:hidden"
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
        </button>
      </nav>

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-50 bg-slate-950/40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          <aside className="fixed right-0 top-0 z-50 h-screen w-full bg-white shadow-2xl shadow-slate-950/20 md:hidden">
            <div className="flex h-16 items-center justify-between border-b border-slate-200 px-5">
              <a href="/" className="text-lg font-black tracking-tight text-[#1f22e8]">
                Online Course
              </a>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-2xl leading-none text-slate-700 transition hover:border-[#2d2be8] hover:text-[#2d2be8]"
                type="button"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close navigation menu"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>

            <div className="grid gap-2 px-5 py-6">
              <a className={mobileLinkClass('/')} href="/">
                Home
              </a>
              <a className={mobileLinkClass('/courses')} href="/courses">
                Courses
              </a>
              <a className={mobileLinkClass('/popular')} href="/popular">
                Popular
              </a>
              <a className={mobileLinkClass('/about')} href="/about">
                About
              </a>
              <a className={mobileLinkClass('/contact')} href="/contact">
                Contact
              </a>
            </div>

            <div className="absolute bottom-0 left-0 right-0 grid gap-3 border-t border-slate-200 p-5">
              <a
                className="rounded-lg border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-[#2d2be8] hover:text-[#2d2be8]"
                href="#login"
              >
                Login
              </a>
              <a
                className="rounded-lg bg-[#2f2bdc] px-4 py-3 text-center text-sm font-bold text-white shadow-sm shadow-indigo-500/20 transition hover:bg-[#1916b8]"
                href="/pricing"
              >
                Get Started
              </a>
            </div>
          </aside>
        </>
      )}
    </header>
  )
}

export default Navbar
