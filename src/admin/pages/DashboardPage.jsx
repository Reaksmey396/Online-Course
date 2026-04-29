import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUp,
  faBookOpen,
  faCalendarDays,
  faCartShopping,
  faChevronDown,
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

const chartMonths = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const chartGrid = ['80Hr', '60Hr', '40Hr', '20Hr', '0Hr']
const chartBounds = { left: 56, right: 844, top: 48, bottom: 288, max: 80 }

// Change these monthly values to control the graph's increases and decreases.
const studyHours = [4, 14, 35, 48, 27, 34, 3, 8, 1, 10, 27, 17]
const testHours = [8, 24, 14, 58, 39, 24, 38, 16, 48, 60, 47, 7]

const getChartPoints = (values) => {
  const xStep = (chartBounds.right - chartBounds.left) / (chartMonths.length - 1)

  return values.map((value, index) => ({
    month: chartMonths[index],
    value,
    x: chartBounds.left + index * xStep,
    y: chartBounds.bottom - (value / chartBounds.max) * (chartBounds.bottom - chartBounds.top),
  }))
}

const getSmoothPath = (points) => points.reduce((path, point, index) => {
  if (index === 0) {
    return `M${point.x},${point.y}`
  }

  const previous = points[index - 1]
  const controlDistance = (point.x - previous.x) * 0.42

  return `${path} C${previous.x + controlDistance},${previous.y} ${point.x - controlDistance},${point.y} ${point.x},${point.y}`
}, '')

const getAreaPath = (points) => `${getSmoothPath(points)} L${chartBounds.right},298 L${chartBounds.left},298 Z`

const chartSeries = [
  { label: 'Study', color: '#0fb7bb', areaId: 'studyArea', points: getChartPoints(studyHours) },
  { label: 'Test', color: '#ff8a4c', areaId: 'testArea', points: getChartPoints(testHours) },
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
      <section className="rounded-2xl border border-cyan-50 bg-white p-5 shadow-lg shadow-cyan-100/60">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl font-black text-slate-950">Study Statistics</h2>
          <div className="flex items-center gap-5 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#0fb7bb]" /> Study</span>
            <span className="inline-flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#ff8a4c]" /> Test</span>
            <button className="inline-flex h-10 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-500 shadow-sm" type="button">
              Monthly
              <FontAwesomeIcon className="text-xs" icon={faChevronDown} />
            </button>
          </div>
        </div>

        <div className="mt-7 h-80 overflow-hidden">
          <svg className="h-full w-full" viewBox="0 0 860 320" preserveAspectRatio="none" role="img" aria-label="Study and test hours by month">
            <defs>
              <linearGradient id="studyArea" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#0fb7bb" stopOpacity="0.48" />
                <stop offset="100%" stopColor="#0fb7bb" stopOpacity="0.04" />
              </linearGradient>
              <linearGradient id="testArea" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#ff8a4c" stopOpacity="0.42" />
                <stop offset="100%" stopColor="#ff8a4c" stopOpacity="0.03" />
              </linearGradient>
            </defs>

            {[48, 98, 148, 198, 248].map((y) => (
              <line key={y} x1="54" x2="838" y1={y} y2={y} stroke="#edf2f7" strokeDasharray="3 4" />
            ))}

            {chartGrid.map((label, index) => (
              <text key={label} x="8" y={52 + index * 50} fill="#6b7280" fontSize="13" fontWeight="600">
                {label}
              </text>
            ))}

            {chartSeries.map((series) => (
              <path key={`${series.label}-area`} d={getAreaPath(series.points)} fill={`url(#${series.areaId})`} />
            ))}

            {chartSeries.map((series) => (
              <path
                key={`${series.label}-line`}
                d={getSmoothPath(series.points)}
                fill="none"
                stroke={series.color}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
              />
            ))}

            {chartSeries.flatMap((series) => series.points.map((point, index) => {
              const previousValue = series.points[index - 1]?.value ?? point.value
              const trend = point.value - previousValue
              const trendText = trend > 0 ? `increased ${trend}Hr` : trend < 0 ? `decreased ${Math.abs(trend)}Hr` : 'no change'

              return (
                <circle key={`${series.label}-${point.month}`} cx={point.x} cy={point.y} r="4" fill={series.color} stroke="#ffffff" strokeWidth="2">
                  <title>{`${series.label} ${point.month}: ${point.value}Hr, ${trendText}`}</title>
                </circle>
              )
            }))}

            <g>
              <rect x="350" y="68" width="74" height="56" rx="8" fill="#ffffff" stroke="#edf2f7" />
              <text x="382" y="88" fill="#334155" fontSize="13" fontWeight="600">Study</text>
              <text x="382" y="108" fill="#334155" fontSize="13" fontWeight="600">Test</text>
              <rect x="362" y="78" width="8" height="8" rx="2" fill="#0fb7bb" />
              <rect x="362" y="98" width="8" height="8" rx="2" fill="#ff8a4c" />
            </g>

            {chartMonths.map((month, index) => (
              <text key={month} x={60 + index * 72} y="316" fill="#6b7280" fontSize="13" fontWeight="600" textAnchor="middle">
                {month}
              </text>
            ))}
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
