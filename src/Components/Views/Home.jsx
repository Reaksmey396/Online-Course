import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRight,
  faBullhorn,
  faBriefcase,
  faCertificate,
  faCode,
  faPalette,
  faQuoteRight,
  faStar,
  faUser,
  faUsers,
} from '@fortawesome/free-solid-svg-icons'

const categories = [
  {
    icon: faCode,
    title: 'Development',
    text: 'Python, React, Blockchain and more.',
    courses: '120+ Courses',
  },
  {
    icon: faBriefcase,
    title: 'Business',
    text: 'Strategy, Finance, Leadership.',
    courses: '85+ Courses',
  },
  {
    icon: faPalette,
    title: 'Design',
    text: 'UI/UX, Branding, Graphic Design.',
    courses: '94+ Courses',
  },
  {
    icon: faBullhorn,
    title: 'Marketing',
    text: 'SEO, Social Media, Content.',
    courses: '62+ Courses',
  },
]

const sideCourses = [
  {
    label: 'Design',
    rating: '4.8',
    title: 'Mastering UX Design for Enterprise',
    price: '$49.99',
    hours: '12.5 Hours',
    image:
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80',
  },
  {
    label: 'Marketing',
    rating: '4.7',
    title: 'Growth Hacking: Zero to Hero',
    price: '$59.99',
    hours: '18.2 Hours',
    image:
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80',
  },
]

const Home = () => {
  return (
    <main>
      <section id="courses" className="bg-[#edf2ff] py-14 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-medium text-slate-700">Popular Categories</p>
              <h2 className="mt-2 max-w-md text-sm leading-6 text-slate-600">
                Explore courses by top-performing industry sectors
              </h2>
            </div>
            <a
              className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#302be2] shadow-sm ring-1 ring-indigo-100 transition hover:bg-[#f7f8ff]"
              href="#courses"
            >
              View All
              <FontAwesomeIcon className="text-xs" icon={faArrowRight} />
            </a>
          </div>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <article
                key={category.title}
                className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#edf0ff] text-lg font-black text-[#302be2]">
                  <FontAwesomeIcon icon={category.icon} />
                </span>
                <h3 className="mt-7 text-base font-semibold text-slate-950">{category.title}</h3>
                <p className="mt-3 min-h-12 text-sm leading-6 text-slate-600">{category.text}</p>
                <p className="mt-5 text-sm font-bold text-[#302be2]">{category.courses}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8ff] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-slate-700">Featured Courses</p>

          <div className="mt-10 grid gap-6 lg:grid-cols-[2fr_0.95fr]">
            <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="relative">
                <img
                  className="h-64 w-full object-cover sm:h-80 lg:h-[400px]"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1300&q=85"
                  alt="Instructor portrait for the featured React course"
                />
                <span className="absolute left-5 top-5 rounded-full bg-cyan-300 px-4 py-2 text-xs font-bold text-slate-900">
                  Best Seller
                </span>
              </div>
              <div className="grid gap-6 p-6 sm:p-8 md:grid-cols-[1fr_auto]">
                <div>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-bold">
                    <span className="rounded-full bg-[#edf0ff] px-3 py-1.5 text-[#302be2]">
                      DEVELOPMENT
                    </span>
                    <span className="flex items-center gap-1 text-amber-500">
                      <FontAwesomeIcon icon={faStar} /> 4.9
                    </span>
                    <span className="text-slate-500">(2.1k reviews)</span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-950">
                    Advanced React Patterns: Build Scalable Apps
                  </h3>
                  <div className="mt-6 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-500 text-sm font-black text-white">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold">Sarah Jenkins</p>
                      <p className="text-xs text-slate-500">Senior Frontend Engineer at Meta</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between gap-5 md:items-end">
                  <p className="text-3xl font-black text-[#1f22e8]">$89.99</p>
                  <a
                    className="inline-flex justify-center rounded-md bg-[#302be2] px-7 py-3 text-sm font-bold text-white transition hover:bg-[#1916b8]"
                    href="#newsletter"
                  >
                    Enroll Now
                  </a>
                </div>
              </div>
            </article>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              {sideCourses.map((course) => (
                <article
                  key={course.title}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  <img className="h-44 w-full object-cover" src={course.image} alt={course.title} />
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="rounded-full bg-[#edf0ff] px-2.5 py-1 font-bold text-[#302be2]">
                        {course.label}
                      </span>
                      <span className="flex items-center gap-1 font-bold text-amber-500">
                        <FontAwesomeIcon icon={faStar} /> {course.rating}
                      </span>
                    </div>
                    <h3 className="mt-4 text-sm font-semibold text-slate-950">{course.title}</h3>
                    <div className="mt-5 flex items-center justify-between gap-4">
                      <span className="text-xl font-black text-[#1f22e8]">{course.price}</span>
                      <span className="text-xs font-medium text-slate-500">{course.hours}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-[#3326d9] py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-indigo-200">Success Stories</p>
            <h2 className="mt-4 text-xl font-semibold">Why students love learning with EduPro</h2>
            <div className="mt-9 grid gap-6">
              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 font-black">
                  <FontAwesomeIcon icon={faCertificate} />
                </span>
                <div>
                  <h3 className="font-semibold">Industry Recognized</h3>
                  <p className="mt-1 text-sm leading-6 text-indigo-100">
                    Certificates trusted by Fortune 500 companies.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 font-black">
                  <FontAwesomeIcon icon={faUsers} />
                </span>
                <div>
                  <h3 className="font-semibold">Global Community</h3>
                  <p className="mt-1 text-sm leading-6 text-indigo-100">
                    Network with 200k+ learners from 150 countries.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <article className="rounded-2xl bg-white p-7 text-slate-950 shadow-2xl shadow-indigo-950/20 sm:p-10">
            <div className="flex items-center justify-between">
              <div className="flex gap-1 text-lg text-amber-400">
                {Array.from({ length: 5 }, (_, index) => (
                  <FontAwesomeIcon icon={faStar} key={index} />
                ))}
              </div>
              <FontAwesomeIcon className="text-5xl text-indigo-100" icon={faQuoteRight} />
            </div>
            <p className="mt-6 text-sm italic leading-7 text-slate-600">
              The structured approach and quality of mentors at EduPro completely changed
              my career path. I went from a junior dev to a tech lead in less than 18 months.
            </p>
            <div className="mt-7 flex items-center gap-3">
              <img
                className="h-11 w-11 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80"
                alt="Student testimonial avatar"
              />
              <div>
                <h3 className="text-sm font-semibold">Alex Rivera</h3>
                <p className="text-xs text-slate-500">Tech Lead at Shopify</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="newsletter" className="bg-[#f7f8ff] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-3xl bg-[#e6eeff] px-6 py-10 sm:px-10 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-lg font-semibold">Start your learning journey today</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Subscribe to our newsletter for exclusive discounts and new course alerts.
            </p>
          </div>
          <form className="grid gap-3 sm:grid-cols-[minmax(220px,320px)_auto]">
            <input
              className="h-12 rounded-lg border border-slate-300 bg-white px-4 text-sm outline-none transition focus:border-[#302be2] focus:ring-4 focus:ring-indigo-100"
              placeholder="Enter your email"
              type="email"
            />
            <button
              className="h-12 rounded-lg bg-[#302be2] px-7 text-sm font-bold text-white transition hover:bg-[#1916b8]"
              type="button"
            >
              Join Now
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default Home
