import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowDown,
  faArrowRight,
  faAward,
  faChalkboardUser,
  faClock,
} from '@fortawesome/free-solid-svg-icons'

const features = [
  {
    icon: faChalkboardUser,
    title: 'Expert Instructors',
    text: 'Learn from PhD holders and industry veterans who bring real-world experience into every lecture.',
  },
  {
    icon: faClock,
    title: 'Flexible Learning',
    text: 'Self-paced modules and live sessions designed to fit seamlessly into your professional life.',
  },
  {
    icon: faAward,
    title: 'Recognized Certificates',
    text: 'Earn credentials that are globally recognized by top Fortune 500 companies and institutions.',
  },
]

const leaders = [
  {
    name: 'Dr. Elena Sterling',
    role: 'Founder & CEO',
    bio: 'Former MIT Dean with 20 years in EdTech innovation.',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=700&q=85',
  },
  {
    name: 'Marcus Chen',
    role: 'Head of Curriculum',
    bio: 'Leading AI researcher specializing in adaptive learning systems.',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=85',
  },
  {
    name: 'Sarah Jenkins',
    role: 'UX Director',
    bio: 'Passionate about creating inclusive digital educational experiences.',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=85',
  },
  {
    name: 'David Osei',
    role: 'VP of Operations',
    bio: 'Strategist with 15 years experience in scaling global learning platforms.',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=85',
  },
]

const About = () => {
  return (
    <main className="bg-[#f7f8ff] text-slate-950">
      <section className="relative min-h-[560px] overflow-hidden bg-slate-950">
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1800&q=85"
          alt="Modern study desk with laptop and learning materials"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/35 to-[#f7f8ff]" />
        <div className="relative mx-auto flex min-h-[560px] max-w-7xl flex-col items-center justify-center px-4 text-center text-white sm:px-6 lg:px-8">
          <p className="text-sm font-bold">Empowering Your Future Through Learning</p>
          <h1 className="mt-6 max-w-2xl text-2xl font-semibold leading-relaxed sm:text-3xl">
            We bridge the gap between ambition and achievement with a curriculum designed
            for the modern world.
          </h1>
          <a
            className="mt-8 flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-xl transition hover:bg-white/20"
            href="#mission"
            aria-label="Go to mission section"
          >
            <FontAwesomeIcon icon={faArrowDown} />
          </a>
        </div>
      </section>

      <section id="mission" className="py-16 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:px-8">
          <div>
            <span className="rounded-full bg-[#edf0ff] px-4 py-2 text-xs font-bold uppercase text-[#332fe0]">
              Our Mission
            </span>
            <h2 className="mt-8 text-xl font-semibold">Knowledge Without Borders</h2>
            <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600">
              <p>
                At EduPath, we are committed to making high-quality education accessible
                to everyone, everywhere. We believe that learning is a lifelong journey
                that should not be restricted by geography or financial standing.
              </p>
              <p>
                By leveraging cutting-edge technology and partnering with industry giants,
                we provide a learning environment that combines academic rigor with
                human-centric design.
              </p>
            </div>
            <div className="mt-8 grid max-w-sm grid-cols-2 gap-6 text-sm">
              <div className="border-l-2 border-[#332fe0] pl-4">
                <p className="font-black text-[#332fe0]">150+</p>
                <p className="mt-1 text-slate-600">Global Countries</p>
              </div>
              <div className="border-l-2 border-[#332fe0] pl-4">
                <p className="font-black text-[#332fe0]">2.5M</p>
                <p className="mt-1 text-slate-600">Active Learners</p>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-[#edefff] p-5 shadow-2xl shadow-slate-300/60">
            <img
              className="h-72 w-full rounded-lg object-cover shadow-lg md:h-[360px]"
              src="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=1200&q=85"
              alt="Digital global learning network"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#e7eeff] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-medium text-slate-700">Why Choose Us</p>
            <span className="mx-auto mt-3 block h-1 w-24 rounded-full bg-[#332fe0]" />
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <article
                className="rounded-lg border border-slate-300 bg-white p-9 shadow-sm"
                key={feature.title}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#edf0ff] text-lg font-black text-[#332fe0]">
                  <FontAwesomeIcon icon={feature.icon} />
                </span>
                <h3 className="mt-8 font-semibold">{feature.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-[#332fe0]">
                The Leadership
              </p>
              <h2 className="mt-3 text-xl font-semibold">Meet Our Visionaries</h2>
            </div>
            <a className="text-sm font-semibold text-[#332fe0]" href="#faculty">
              See All Faculty <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
            </a>
          </div>

          <div id="faculty" className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map((leader) => (
              <article key={leader.name}>
                <img
                  className="h-72 w-full rounded-lg object-cover object-top"
                  src={leader.image}
                  alt={leader.name}
                />
                <h3 className="mt-5 font-semibold">{leader.name}</h3>
                <p className="mt-1 text-sm font-medium text-[#332fe0]">{leader.role}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{leader.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#4a42ea] px-6 py-16 text-center text-white shadow-2xl shadow-indigo-300/60 sm:px-10">
          <h2 className="text-lg font-semibold">Join our global community of learners</h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-indigo-50">
            Start your journey today and unlock thousands of world-class courses designed
            for your career success.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-14 text-sm font-bold text-[#332fe0] transition hover:bg-indigo-50"
              href="/pricing"
            >
              Get Started
            </a>
            <a
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/50 px-14 text-sm font-bold text-white transition hover:bg-white/10"
              href="/courses"
            >
              View Courses
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
