import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBookOpen,
  faChartLine,
  faCheckCircle,
  faChevronRight,
  faDollarSign,
  faEllipsisVertical,
  faFilm,
  faLayerGroup,
  faLink,
  faListCheck,
  faMoneyBillWave,
  faPen,
  faPlus,
  faTableList,
  faUpload,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'
import AdminPageHeader from './AdminPageHeader'

const courses = [
  {
    title: 'Web Development Bootcamp',
    category: 'Development',
    students: '1,540',
    revenue: '$12,500',
    status: 'Published',
    image:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=180&q=80',
  },
  {
    title: 'UI/UX Design Masterclass',
    category: 'Design',
    students: '1,230',
    revenue: '$9,450',
    status: 'Published',
    image:
      'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&w=180&q=80',
  },
  {
    title: 'Python Programming A-Z',
    category: 'Development',
    students: '980',
    revenue: '$8,200',
    status: 'Draft',
    image:
      'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=180&q=80',
  },
]

const courseStats = [
  { label: 'Total Courses', value: '120', icon: faBookOpen, color: 'bg-violet-100 text-violet-700' },
  { label: 'Categories', value: '14', icon: faLayerGroup, color: 'bg-cyan-100 text-cyan-700' },
  { label: 'Students', value: '8,620', icon: faUsers, color: 'bg-emerald-100 text-emerald-700' },
  { label: 'Revenue', value: '$37,450', icon: faDollarSign, color: 'bg-amber-100 text-amber-700' },
]

const CoursesPage = () => (
  <div className="px-5 py-8 xl:px-8">
    <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
      <AdminPageHeader title="Courses" text="Manage course content, categories, and publishing status." />
      <button className="inline-flex h-12 items-center justify-center gap-3 rounded-lg bg-violet-600 px-7 text-sm font-black text-white shadow-lg shadow-violet-200" type="button">
        <FontAwesomeIcon icon={faPlus} />
        Add Course
      </button>
    </div>

    <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {courseStats.map((item) => (
        <article className="rounded-2xl border border-slate-100 bg-white p-5 shadow-md shadow-slate-200/50" key={item.label}>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-slate-500">{item.label}</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight">{item.value}</h2>
            </div>
            <span className={`flex h-12 w-12 items-center justify-center rounded-xl text-xl ${item.color}`}>
              <FontAwesomeIcon icon={item.icon} />
            </span>
          </div>
        </article>
      ))}
    </div>

    <section className="mt-8 rounded-2xl border border-slate-100 bg-white p-6 shadow-md shadow-slate-200/50">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-black">Add New Course</h2>
          <p className="mt-2 text-sm text-slate-500">Create a course record before publishing it to learners.</p>
        </div>
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-violet-50 px-5 py-2 text-sm font-black text-violet-700">
          <FontAwesomeIcon icon={faChartLine} />
          Draft Mode
        </span>
      </div>

      <form className="mt-7 grid gap-5 lg:grid-cols-[1.4fr_0.8fr_0.8fr_auto] lg:items-end">
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Course Title
          <input className="h-12 rounded-lg border border-slate-200 bg-slate-50 px-4 outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100" placeholder="Enter course title" type="text" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Category
          <select className="h-12 rounded-lg border border-slate-200 bg-slate-50 px-4 outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100">
            <option>Development</option>
            <option>Design</option>
            <option>Marketing</option>
            <option>Business</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Price
          <input className="h-12 rounded-lg border border-slate-200 bg-slate-50 px-4 outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100" placeholder="$99.00" type="text" />
        </label>
        <button className="h-12 rounded-lg bg-violet-600 px-7 text-sm font-black text-white shadow-lg shadow-violet-200" type="button">
          Add Course
        </button>
      </form>
    </section>

    <section className="mt-8 grid gap-6 2xl:grid-cols-[1fr_380px]">
      <div className="grid gap-6">
        <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md shadow-slate-200/50">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-xl text-violet-700">
              <FontAwesomeIcon icon={faPen} />
            </span>
            <div>
              <h2 className="text-xl font-black">Basic Information</h2>
              <p className="mt-1 text-sm text-slate-500">Set up your educational content and structure.</p>
            </div>
          </div>

          <div className="mt-7 grid gap-5">
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              Course Title
              <input className="h-14 rounded-lg border border-slate-200 bg-white px-4 text-base outline-none placeholder:text-slate-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100" placeholder="e.g. Advanced Principles of Quantum Computing" type="text" />
            </label>
            <div className="grid gap-5 lg:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Category
                <select className="h-14 rounded-lg border border-slate-200 bg-white px-4 text-base outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-100">
                  <option>Select Category</option>
                  <option>Development</option>
                  <option>Design</option>
                  <option>Marketing</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700">
                Subtitle
                <input className="h-14 rounded-lg border border-slate-200 bg-white px-4 text-base outline-none placeholder:text-slate-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100" placeholder="A brief catchphrase for the course" type="text" />
              </label>
            </div>
            <label className="grid gap-2 text-sm font-semibold text-slate-700">
              Course Description
              <div className="overflow-hidden rounded-lg border border-slate-200">
                <div className="flex h-12 items-center gap-5 border-b border-slate-200 bg-slate-50 px-5 text-sm font-black text-slate-500">
                  <span>B</span>
                  <span>I</span>
                  <FontAwesomeIcon icon={faTableList} />
                  <FontAwesomeIcon icon={faLink} />
                </div>
                <textarea className="min-h-52 w-full resize-none p-5 text-base outline-none placeholder:text-slate-400" placeholder="Describe what students will learn in this course..." />
              </div>
            </label>
          </div>
        </article>

        <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md shadow-slate-200/50">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-xl text-violet-700">
                <FontAwesomeIcon icon={faListCheck} />
              </span>
              <h2 className="text-xl font-black">Curriculum Structure</h2>
            </div>
            <button className="inline-flex items-center gap-2 text-sm font-black text-violet-700" type="button">
              <FontAwesomeIcon icon={faPlus} />
              Add Module
            </button>
          </div>
          <div className="mt-7 rounded-xl border border-slate-200 p-5">
            <div className="grid gap-4 lg:grid-cols-[1fr_180px_auto]">
              <input className="h-12 rounded-lg border border-slate-200 px-4 outline-none" defaultValue="Welcome & Getting Started" />
              <select className="h-12 rounded-lg border border-slate-200 px-4 outline-none">
                <option>Video</option>
                <option>Article</option>
              </select>
              <button className="rounded-lg border border-slate-200 px-5 font-black text-slate-500" type="button">
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            </div>
            <button className="mt-5 h-12 w-full rounded-lg border border-dashed border-slate-300 text-sm font-semibold text-slate-500" type="button">
              <FontAwesomeIcon className="mr-2" icon={faPlus} />
              Add New Lesson
            </button>
          </div>
        </article>
      </div>

      <aside className="grid gap-6 self-start">
        <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md shadow-slate-200/50">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-xl text-violet-700">
              <FontAwesomeIcon icon={faFilm} />
            </span>
            <h2 className="text-xl font-black">Course Media</h2>
          </div>
          <div className="mt-7">
            <p className="text-sm font-semibold text-slate-700">Course Thumbnail</p>
            <button className="mt-3 flex h-44 w-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 text-slate-500" type="button">
              <FontAwesomeIcon className="text-3xl" icon={faUpload} />
              <span className="mt-3 font-semibold">Click to upload image</span>
              <span className="mt-1 text-xs">Recommended: 1280x720</span>
            </button>
          </div>
          <label className="mt-6 grid gap-2 text-sm font-semibold text-slate-700">
            Promo Video URL
            <input className="h-12 rounded-lg border border-slate-200 px-4 outline-none placeholder:text-slate-400" placeholder="Youtube or Vimeo link" type="text" />
          </label>
        </article>

        <article className="rounded-2xl border border-slate-100 bg-white p-6 shadow-md shadow-slate-200/50">
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-50 text-xl text-violet-700">
              <FontAwesomeIcon icon={faMoneyBillWave} />
            </span>
            <h2 className="text-xl font-black">Pricing & Value</h2>
          </div>
          <div className="mt-7 rounded-xl bg-slate-50 p-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold">Free Course</span>
              <span className="h-6 w-11 rounded-full bg-slate-200 p-1">
                <span className="block h-4 w-4 rounded-full bg-white" />
              </span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-4">
            <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-400">
              Regular Price
              <input className="h-12 rounded-lg border border-slate-200 px-4 text-base font-medium text-slate-950 outline-none" defaultValue="$ 99.00" />
            </label>
            <label className="grid gap-2 text-xs font-black uppercase tracking-wide text-slate-400">
              Discount Price
              <input className="h-12 rounded-lg border border-slate-200 px-4 text-base font-medium text-slate-950 outline-none" defaultValue="$ 0.00" />
            </label>
          </div>
          <div className="mt-6 border-t border-slate-100 pt-5">
            <div className="flex justify-between text-sm text-slate-600">
              <span>Platform Fee (5%)</span>
              <span>-$4.95</span>
            </div>
            <div className="mt-3 flex justify-between text-lg font-black">
              <span>Your Earnings</span>
              <span className="text-violet-700">$94.05</span>
            </div>
          </div>
        </article>

        <article className="rounded-2xl bg-violet-600 p-6 text-white shadow-xl shadow-violet-200">
          <p className="leading-7 text-violet-100">Complete all required sections to enable public enrollment for your new course.</p>
          <div className="mt-6 grid gap-4 text-sm font-black">
            <span><FontAwesomeIcon className="mr-2" icon={faCheckCircle} /> Basic info complete</span>
            <span><FontAwesomeIcon className="mr-2" icon={faCheckCircle} /> Media uploaded</span>
            <span className="text-violet-200">○ Add at least 3 lessons</span>
          </div>
          <div className="mt-6 h-2 rounded-full bg-violet-400">
            <span className="block h-full w-[65%] rounded-full bg-cyan-300" />
          </div>
          <p className="mt-3 text-right text-sm font-black">65% Progress</p>
        </article>
      </aside>
    </section>

    <section className="mt-8 overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md shadow-slate-200/50">
      <div className="flex flex-col gap-4 border-b border-slate-100 p-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-xl font-black">Course List</h2>
          <p className="mt-1 text-sm text-slate-500">View, edit, and track every course on the platform.</p>
        </div>
        <a className="inline-flex items-center gap-2 text-sm font-black text-violet-600" href="#courses">
          View all
          <FontAwesomeIcon icon={faChevronRight} />
        </a>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[920px] text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase tracking-widest text-slate-500">
            <tr>
              <th className="px-6 py-4">Course</th>
              <th className="px-6 py-4">Category</th>
              <th className="px-6 py-4">Students</th>
              <th className="px-6 py-4">Revenue</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {courses.map((course) => (
              <tr className="hover:bg-slate-50/70" key={course.title}>
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <img className="h-14 w-20 rounded-lg object-cover" src={course.image} alt={course.title} />
                    <div>
                      <p className="font-black">{course.title}</p>
                      <p className="mt-1 text-xs text-slate-500">Updated this week</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5 text-slate-700">{course.category}</td>
                <td className="px-6 py-5">
                  <span className="inline-flex items-center gap-2 font-semibold">
                    <FontAwesomeIcon className="text-violet-500" icon={faUsers} />
                    {course.students}
                  </span>
                </td>
                <td className="px-6 py-5 font-black text-emerald-600">{course.revenue}</td>
                <td className="px-6 py-5">
                  <span className={`rounded-full px-3 py-1 text-xs font-black ${course.status === 'Published' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                    {course.status}
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

export default CoursesPage
