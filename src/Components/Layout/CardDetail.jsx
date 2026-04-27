import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBookOpen,
  faCartShopping,
  faCertificate,
  faCheck,
  faChevronRight,
  faClock,
  faFileLines,
  faInfinity,
  faMedal,
  faPlay,
  faStar,
  faUsers,
  faVideo,
} from '@fortawesome/free-solid-svg-icons'

const outcomes = [
  'Deep dive into Design Thinking methodologies and user-centric strategies.',
  'Build a professional portfolio with 3 real-world capstone projects.',
  'Master industry-standard tools like Figma, FigJam, and Adobe Creative Cloud.',
  'Learn to communicate design decisions to stakeholders effectively.',
]

const curriculum = [
  { title: 'Foundations of Design', meta: '8 lessons • 2h 45m' },
  { title: 'User Research & Synthesis', meta: '12 lessons • 4h 15m' },
  { title: 'Information Architecture & Prototyping', meta: '15 lessons • 6h 30m' },
]

const includes = [
  { icon: faVideo, text: '24.5 hours on-demand video' },
  { icon: faFileLines, text: '18 downloadable resources' },
  { icon: faInfinity, text: 'Full lifetime access' },
  { icon: faCertificate, text: 'Certificate of completion' },
]

const reviews = [
  {
    name: 'Jessica Simmons',
    role: 'Product Designer',
    avatar: 'JS',
    text: 'Absolutely transformative! This boot camp gave me the confidence and portfolio I needed to land my first junior UX role within 3 months.',
  },
  {
    name: 'Aaron Klein',
    role: 'Marketing Manager',
    avatar: 'AK',
    text: 'Marcus is a fantastic instructor. The modules on Information Architecture were particularly enlightening. Highly recommended.',
  },
]

const CardDetail = () => {
  return (
    <main className="bg-[#f7f8ff] text-slate-950">
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_390px] lg:px-8">
        <div>
          <span className="inline-flex rounded-full bg-[#4b3ff0] px-4 py-2 text-sm font-bold uppercase text-white">
            Design Track
          </span>
          <h1 className="mt-6 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
            The Ultimate UI/UX Design Boot Camp
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-700">
            Master the end-to-end design process from user research to high-fidelity
            prototyping. A comprehensive, project-based journey for aspiring product
            designers.
          </p>

          <div className="mt-7 flex flex-wrap gap-6 text-sm text-slate-700">
            <span className="inline-flex items-center gap-2">
              <FontAwesomeIcon className="text-amber-500" icon={faStar} />
              4.8 (8,920 reviews)
            </span>
            <span className="inline-flex items-center gap-2">
              <FontAwesomeIcon className="text-[#302be2]" icon={faUsers} />
              15,420 Students enrolled
            </span>
          </div>

          <section className="mt-10 rounded-xl border border-slate-300 bg-white p-7 shadow-sm sm:p-10">
            <h2 className="font-semibold">About this course</h2>
            <div className="mt-7 grid gap-6 md:grid-cols-2">
              {outcomes.map((item) => (
                <div className="flex gap-4" key={item}>
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#302be2] text-[10px] text-white">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <p className="text-sm leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <h2 className="font-semibold">Curriculum</h2>
            <div className="mt-6 grid gap-4">
              {curriculum.map((item, index) => (
                <article
                  className="flex items-center justify-between gap-4 rounded-xl border border-slate-300 bg-white p-5 shadow-sm"
                  key={item.title}
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#dfe8ff] font-black text-[#302be2]">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
                        {item.meta}
                      </p>
                    </div>
                  </div>
                  <FontAwesomeIcon className="text-slate-800" icon={faChevronRight} />
                </article>
              ))}
            </div>
          </section>

          <section className="mt-14">
            <h2 className="font-semibold">Instructor</h2>
            <article className="mt-6 rounded-xl border border-slate-300 bg-[#edf3ff] p-7 shadow-sm sm:flex sm:gap-8">
              <img
                className="h-24 w-24 rounded-full border-4 border-white object-cover shadow-lg"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=85"
                alt="Marcus Thorne"
              />
              <div className="mt-5 sm:mt-0">
                <h3 className="font-semibold">Marcus Thorne</h3>
                <p className="mt-1 text-sm font-medium text-[#302be2]">
                  Senior Product Designer at TechFlow
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-700">
                  With over 12 years of experience in the design industry, Marcus has led
                  design teams at Fortune 500 companies. He is passionate about making
                  design education accessible and practical for everyone.
                </p>
                <div className="mt-5 flex flex-wrap gap-5 text-sm text-slate-700">
                  <span className="inline-flex items-center gap-2">
                    <FontAwesomeIcon icon={faUsers} />
                    45,000+ Students
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <FontAwesomeIcon icon={faBookOpen} />
                    12 Courses
                  </span>
                </div>
              </div>
            </article>
          </section>

          <section className="mt-14">
            <h2 className="font-semibold">Reviews</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {reviews.map((review) => (
                <article className="rounded-xl border border-slate-300 bg-white p-7 shadow-sm" key={review.name}>
                  <div className="flex gap-1 text-amber-500">
                    {Array.from({ length: 5 }, (_, index) => (
                      <FontAwesomeIcon icon={faStar} key={index} />
                    ))}
                  </div>
                  <p className="mt-5 text-sm leading-7 text-slate-800">"{review.text}"</p>
                  <div className="mt-6 flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-300 font-semibold text-[#064f60]">
                      {review.avatar}
                    </span>
                    <div>
                      <h3 className="font-semibold">{review.name}</h3>
                      <p className="text-sm text-slate-600">{review.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <article className="overflow-hidden rounded-xl border border-slate-300 bg-white shadow-2xl shadow-slate-300/60">
            <div className="relative">
              <img
                className="h-56 w-full object-cover"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85"
                alt="Course preview instructor"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/30">
                <button
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80 text-xl text-[#302be2] shadow-xl backdrop-blur"
                  type="button"
                  aria-label="Preview course"
                >
                  <FontAwesomeIcon icon={faPlay} />
                </button>
              </div>
              <span className="absolute bottom-4 left-4 rounded bg-slate-950 px-3 py-1.5 text-[10px] font-black uppercase text-white">
                Preview Course
              </span>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-3">
                <span className="text-xl font-semibold">$74.99</span>
                <span className="text-sm text-slate-500 line-through">$199.99</span>
                <span className="ml-auto text-sm font-black text-red-600">62% OFF</span>
              </div>

              <div className="mt-8 grid gap-4">
                <button className="h-14 rounded-lg bg-[#302be2] text-sm font-black text-white transition hover:bg-[#1916b8]" type="button">
                  Buy Now
                </button>
                <button className="inline-flex h-14 items-center justify-center gap-2 rounded-lg border-2 border-[#302be2] bg-white text-sm font-black text-[#302be2] transition hover:bg-[#edf0ff]" type="button">
                  <FontAwesomeIcon icon={faCartShopping} />
                  Add to Cart
                </button>
              </div>

              <div className="mt-8 border-t border-slate-300 pt-8">
                <h2 className="font-semibold">This course includes:</h2>
                <div className="mt-5 grid gap-4">
                  {includes.map((item) => (
                    <div className="flex items-center gap-3 text-sm text-slate-700" key={item.text}>
                      <FontAwesomeIcon className="w-5 text-[#302be2]" icon={item.icon} />
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
          <p className="mt-6 text-center text-sm text-slate-600">
            <FontAwesomeIcon className="mr-2" icon={faMedal} />
            30-Day Money-Back Guarantee
          </p>
        </aside>
      </section>
    </main>
  )
}

export default CardDetail
