import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUp,
  faBookOpen,
  faChalkboardUser,
  faEllipsisVertical,
  faEnvelope,
  faFilter,
  faMagnifyingGlass,
  faPlus,
  faStar,
  faUserTie,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import AdminPageHeader from './AdminPageHeader'

const stats = [
  { label: 'Total Instructors', value: '320', growth: '8%', icon: faUserTie, color: 'bg-violet-100 text-violet-700' },
  { label: 'Active Instructors', value: '286', growth: '6%', icon: faChalkboardUser, color: 'bg-emerald-100 text-emerald-700' },
  { label: 'Published Courses', value: '740', growth: '14%', icon: faBookOpen, color: 'bg-cyan-100 text-cyan-700' },
  { label: 'Avg. Rating', value: '4.92', growth: '3%', icon: faStar, color: 'bg-amber-100 text-amber-700' },
]

const instructors = [
  {
    name: 'Marcus Thorne',
    specialty: 'Product Design',
    courses: '12',
    students: '45,000',
    rating: '4.9',
    status: 'Active',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=140&q=80',
  },
  {
    name: 'Dr. Sarah Chen',
    specialty: 'Frontend Engineering',
    courses: '8',
    students: '31,420',
    rating: '4.8',
    status: 'Active',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=140&q=80',
  },
  {
    name: 'Sophia Anderson',
    specialty: 'Digital Marketing',
    courses: '6',
    students: '18,760',
    rating: '4.7',
    status: 'Review',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=140&q=80',
  },
  {
    name: 'James Wilson',
    specialty: 'Python & Data',
    courses: '10',
    students: '27,900',
    rating: '4.9',
    status: 'Active',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=140&q=80',
  },
]

const topInstructor = instructors[0]

const InstructorsPage = () => (
  <div className="px-5 py-8 xl:px-8">
    <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
      <AdminPageHeader title="Instructors" text="Review instructor profiles, ratings, and course assignments." />
      <button className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-violet-600 px-5 text-sm font-black text-white shadow-lg shadow-violet-200" type="button">
        <FontAwesomeIcon icon={faPlus} />
        Add Instructor
      </button>
    </div>

    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <article className="rounded-2xl border border-slate-100 bg-white p-5 shadow-lg shadow-slate-200/50" key={stat.label}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-slate-500">{stat.label}</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight">{stat.value}</h2>
            </div>
            <span className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl ${stat.color}`}>
              <FontAwesomeIcon icon={stat.icon} />
            </span>
          </div>
          <p className="mt-5 flex items-center gap-2 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1 font-black text-emerald-500">
              <FontAwesomeIcon icon={faArrowUp} />
              {stat.growth}
            </span>
            from last month
          </p>
        </article>
      ))}
    </div>

    <div className="mt-8 grid gap-6 2xl:grid-cols-[1fr_380px]">
      <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-200/50">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-black">Add New Instructor</h2>
            <p className="mt-1 text-sm text-slate-500">Create an instructor profile and assign a specialty.</p>
          </div>
          <span className="inline-flex w-fit rounded-full bg-violet-50 px-4 py-2 text-sm font-black text-violet-700">
            Profile Setup
          </span>
        </div>

        <form className="mt-6 grid gap-5 lg:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Full Name
            <input className="h-12 rounded-lg border border-slate-200 bg-slate-50 px-4 outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100" placeholder="Instructor name" type="text" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Email
            <input className="h-12 rounded-lg border border-slate-200 bg-slate-50 px-4 outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100" placeholder="instructor@example.com" type="email" />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Specialty
            <select className="h-12 rounded-lg border border-slate-200 bg-slate-50 px-4 outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100">
              <option>Product Design</option>
              <option>Frontend Engineering</option>
              <option>Digital Marketing</option>
              <option>Data Science</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700">
            Assigned Course
            <input className="h-12 rounded-lg border border-slate-200 bg-slate-50 px-4 outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100" placeholder="Course title" type="text" />
          </label>
          <button className="h-12 rounded-lg bg-violet-600 px-6 text-sm font-black text-white shadow-lg shadow-violet-200 lg:col-span-2" type="button">
            Add Instructor
          </button>
        </form>
      </section>

      <aside className="rounded-2xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-200/50">
        <h2 className="text-xl font-black">Top Instructor</h2>
        <div className="mt-6 text-center">
          <img className="mx-auto h-24 w-24 rounded-full object-cover ring-4 ring-violet-100" src={topInstructor.avatar} alt={topInstructor.name} />
          <h3 className="mt-4 text-xl font-black">{topInstructor.name}</h3>
          <p className="mt-1 text-sm text-slate-500">{topInstructor.specialty}</p>
          <div className="mt-5 grid grid-cols-3 gap-3">
            <div className="rounded-xl bg-slate-50 p-3">
              <p className="font-black">{topInstructor.courses}</p>
              <p className="text-xs text-slate-500">Courses</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-3">
              <p className="font-black">{topInstructor.students}</p>
              <p className="text-xs text-slate-500">Students</p>
            </div>
            <div className="rounded-xl bg-slate-50 p-3">
              <p className="font-black">{topInstructor.rating}</p>
              <p className="text-xs text-slate-500">Rating</p>
            </div>
          </div>
        </div>
      </aside>
    </div>

    <section className="mt-8 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-lg shadow-slate-200/50">
      <div className="flex flex-col gap-4 border-b border-slate-100 p-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-xl font-black">Instructor Directory</h2>
          <p className="mt-1 text-sm text-slate-500">Manage teaching profiles, specialties, and performance.</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <label className="relative">
            <FontAwesomeIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" icon={faMagnifyingGlass} />
            <input className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100 sm:w-72" placeholder="Search instructors..." type="search" />
          </label>
          <button className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200 px-4 text-sm font-semibold text-slate-700" type="button">
            <FontAwesomeIcon icon={faFilter} />
            Filter
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[920px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-widest text-slate-500">
            <tr>
              <th className="px-6 py-4">Instructor</th>
              <th className="px-6 py-4">Specialty</th>
              <th className="px-6 py-4">Courses</th>
              <th className="px-6 py-4">Students</th>
              <th className="px-6 py-4">Rating</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {instructors.map((instructor) => (
              <tr className="hover:bg-slate-50/70" key={instructor.name}>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <img className="h-12 w-12 rounded-full object-cover" src={instructor.avatar} alt={instructor.name} />
                    <div>
                      <p className="font-black">{instructor.name}</p>
                      <p className="mt-1 text-xs text-slate-500">
                        <FontAwesomeIcon className="mr-1" icon={faEnvelope} />
                        {instructor.name.toLowerCase().replaceAll(' ', '.')}@onlinecourse.edu
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5 text-slate-700">{instructor.specialty}</td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center gap-2 font-semibold">
                    <FontAwesomeIcon className="text-violet-500" icon={faBookOpen} />
                    {instructor.courses}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center gap-2 font-semibold">
                    <FontAwesomeIcon className="text-violet-500" icon={faUsers} />
                    {instructor.students}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center gap-1 font-black text-amber-500">
                    <FontAwesomeIcon icon={faStar} />
                    {instructor.rating}
                  </span>
                </td>
                <td className="px-6 py-5">
                  <span className={`rounded-full px-3 py-1 text-xs font-black ${instructor.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                    {instructor.status}
                  </span>
                </td>
                <td className="px-6 py-5 text-right text-slate-400">
                  <FontAwesomeIcon icon={faEllipsisVertical} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  </div>
)

export default InstructorsPage
