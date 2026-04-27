import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUp,
  faBookOpen,
  faCalendarDays,
  faCartShopping,
  faChevronDown,
  faGraduationCap,
  faStar,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import AdminPageHeader from './AdminPageHeader'

const stats = [
  { title: 'Total Courses', value: '120', growth: '12%', icon: faBookOpen, color: 'from-violet-500 to-indigo-600' },
  { title: 'Total Students', value: '8,540', growth: '18%', icon: faUserGroup, color: 'from-sky-500 to-blue-600' },
  { title: 'Total Sales', value: '$24,680', growth: '22%', icon: faCartShopping, color: 'from-amber-400 to-orange-500' },
  { title: 'Total Reviews', value: '1,248', growth: '15%', icon: faStar, color: 'from-rose-400 to-pink-600' },
]

const topCourses = [
  ['Web Development Bootcamp', '1,540 students', '$12,500', 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=220&q=80'],
  ['UI/UX Design Masterclass', '1,230 students', '$9,450', 'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=220&q=80'],
  ['Python Programming A-Z', '980 students', '$8,200', 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=220&q=80'],
  ['Digital Marketing Course', '870 students', '$7,300', 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=220&q=80'],
]

const students = [
  ['Sarah Johnson', 'sarah.johnson@example.com', 'Web Development', 'May 31, 2024'],
  ['Michael Brown', 'michael.brown@example.com', 'UI/UX Design', 'May 30, 2024'],
  ['Emily Davis', 'emily.davis@example.com', 'Python Programming', 'May 29, 2024'],
  ['David Wilson', 'david.wilson@example.com', 'Digital Marketing', 'May 28, 2024'],
]

const DashboardPage = () => (
  <div className="px-5 py-8 xl:px-8">
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      <AdminPageHeader title="Dashboard" text="Welcome back, Admin! Here is what is happening on your platform." />
      <button className="inline-flex h-12 items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white px-5 font-semibold shadow-sm" type="button">
        <FontAwesomeIcon icon={faCalendarDays} />
        May 1, 2024 - May 31, 2024
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
    </div>

    <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <article className="rounded-2xl border border-slate-100 bg-white p-5 shadow-md shadow-slate-200/50" key={stat.title}>
          <div className="flex items-center gap-4">
            <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} text-xl text-white shadow-md`}>
              <FontAwesomeIcon icon={stat.icon} />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-slate-500">{stat.title}</p>
              <p className="mt-1 whitespace-nowrap text-2xl font-black leading-tight tracking-tight">{stat.value}</p>
            </div>
          </div>
          <p className="mt-4 flex items-center gap-2 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1 font-black text-emerald-500">
              <FontAwesomeIcon icon={faArrowUp} />
              {stat.growth}
            </span>
            from last month
          </p>
        </article>
      ))}
    </div>

    <div className="mt-6 grid gap-6 2xl:grid-cols-[1fr_480px]">
      <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-200/50">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-black">Overview</h2>
          <div className="flex gap-6 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-violet-500" /> Students</span>
            <span className="inline-flex items-center gap-2"><span className="h-3 w-3 rounded-full bg-blue-500" /> Sales</span>
          </div>
        </div>
        <div className="mt-8 h-80">
          <svg className="h-full w-full" viewBox="0 0 760 300" preserveAspectRatio="none">
            {Array.from({ length: 5 }, (_, index) => <line key={index} x1="40" x2="730" y1={50 + index * 45} y2={50 + index * 45} stroke="#eef2ff" />)}
            <path d="M40,128 L90,122 L140,132 L180,88 L225,100 L270,112 L315,76 L360,108 L405,104 L450,70 L490,92 L535,58 L580,82 L625,78 L665,92 L710,76 L730,88" fill="none" stroke="#8b5cf6" strokeWidth="3" />
            <path d="M40,188 L90,166 L140,184 L180,170 L225,172 L270,194 L315,182 L360,162 L405,184 L450,176 L490,174 L535,136 L580,144 L625,126 L665,132 L710,106 L730,120" fill="none" stroke="#3b82f6" strokeWidth="3" />
          </svg>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-200/50">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-black">Top Courses</h2>
          <a className="text-sm font-semibold text-violet-600" href="#top">View all</a>
        </div>
        <div className="mt-7 grid gap-6">
          {topCourses.map((course, index) => (
            <article className="grid grid-cols-[36px_72px_minmax(0,1fr)] gap-4 sm:grid-cols-[36px_72px_minmax(0,1fr)_auto] sm:items-center" key={course[0]}>
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-100 font-black text-violet-600">{index + 1}</span>
              <img className="h-14 w-20 rounded-md object-cover" src={course[3]} alt={course[0]} />
              <div className="min-w-0">
                <h3 className="truncate font-semibold">{course[0]}</h3>
                <p className="mt-1 text-sm text-slate-500">{course[1]}</p>
              </div>
              <p className="col-start-3 font-black text-emerald-600 sm:col-start-auto">{course[2]}</p>
            </article>
          ))}
        </div>
      </section>
    </div>

    <section className="mt-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-200/50">
      <h2 className="text-xl font-black">Recent Students</h2>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[700px] text-left text-sm">
          <thead className="text-slate-500"><tr><th className="py-3">Student</th><th>Email</th><th>Course</th><th>Joined Date</th><th>Status</th></tr></thead>
          <tbody className="divide-y divide-slate-100">
            {students.map((student) => (
              <tr key={student[1]}>
                <td className="py-4 font-semibold">{student[0]}</td>
                <td className="text-slate-600">{student[1]}</td>
                <td className="text-slate-600">{student[2]}</td>
                <td className="text-slate-600">{student[3]}</td>
                <td><span className="rounded-full bg-emerald-100 px-3 py-1 font-black text-emerald-700">Active</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  </div>
)

export default DashboardPage
