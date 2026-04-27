import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBell,
  faBookOpen,
  faBullhorn,
  faChevronDown,
  faGear,
  faGraduationCap,
  faMagnifyingGlass,
  faMessage,
  faStar,
  faTableList,
  faCartShopping,
  faChartSimple,
  faHouse,
  faUserGroup,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons'
import DashboardPage from './pages/DashboardPage'
import CoursesPage from './pages/CoursesPage'
import StudentsPage from './pages/StudentsPage'
import InstructorsPage from './pages/InstructorsPage'
import SettingsPage from './pages/SettingsPage'

const navItems = [
  { label: 'Dashboard', icon: faHouse, page: DashboardPage },
  { label: 'Courses', icon: faTableList, page: CoursesPage },
  { label: 'Students', icon: faUserGroup, page: StudentsPage },
  { label: 'Instructors', icon: faUserTie, page: InstructorsPage },
  { label: 'Settings', icon: faGear, page: SettingsPage },
]

const AdminDashboard = () => {
  const [activePage, setActivePage] = useState('Dashboard')
  const CurrentPage = navItems.find((item) => item.label === activePage)?.page || DashboardPage

  return (
    <main className="min-h-screen bg-[#f6f8ff] text-[#151a33]">
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-72 flex-col border-r border-slate-200 bg-white text-slate-700 xl:flex">
        <div className="flex items-center gap-4 border-b border-slate-100 px-8 py-8">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-3xl text-violet-600">
            <FontAwesomeIcon icon={faBookOpen} />
          </span>
          <div>
            <h1 className="text-[23px] font-black text-blue-700">Online Course</h1>
            <p className="text-sm text-slate-500">Online Course Platform</p>
          </div>
        </div>

        <nav className="mt-6 grid gap-2 px-4">
          {navItems.map((item) => (
            <button
              className={`flex items-center gap-4 rounded-xl px-5 py-3.5 text-left text-base font-semibold transition ${
                activePage === item.label
                  ? 'bg-violet-50 text-violet-700 ring-1 ring-violet-100'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-violet-700'
              }`}
              key={item.label}
              onClick={() => setActivePage(item.label)}
              type="button"
            >
              <FontAwesomeIcon className="w-6" icon={item.icon} />
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      <section className="xl:pl-72">
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
          <div className="flex min-h-20 flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between xl:px-8">
            <div className="relative w-full max-w-md">
              <FontAwesomeIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" icon={faMagnifyingGlass} />
              <input
                className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm outline-none placeholder:text-slate-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                placeholder={`Search ${activePage.toLowerCase()}...`}
                type="search"
              />
            </div>

            <div className="flex items-center justify-between gap-5 md:justify-end">
              <button className="relative text-xl text-slate-600" type="button" aria-label="Notifications">
                <FontAwesomeIcon icon={faBell} />
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-rose-500 text-[10px] font-black text-white">
                  5
                </span>
              </button>
              <div className="flex items-center gap-3">
                <img className="h-11 w-11 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80" alt="Admin" />
                <div>
                  <p className="font-black">Admin</p>
                  <p className="text-sm text-slate-500">Super Admin</p>
                </div>
                <FontAwesomeIcon className="text-slate-500" icon={faChevronDown} />
              </div>
            </div>
          </div>
        </header>

        <CurrentPage />
      </section>
    </main>
  )
}

export default AdminDashboard
