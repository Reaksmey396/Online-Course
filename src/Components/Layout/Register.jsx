import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRight,
  faBookOpen,
  faCertificate,
  faEnvelope,
  faEye,
  faLock,
  faUser,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons'

const Register = () => {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="grid min-h-screen lg:grid-cols-[0.95fr_1.05fr]">
        <div className="flex min-h-screen items-center justify-center bg-[#f7f8ff] px-5 py-10 sm:px-8">
          <div className="w-full max-w-lg">
            <a className="mb-10 inline-flex items-center gap-3 text-xl font-black text-[#1f22e8]" href="/">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf0ff]">
                <FontAwesomeIcon icon={faBookOpen} />
              </span>
              Online Course
            </a>
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/80 sm:p-9">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf0ff] text-[#302be2]">
                <FontAwesomeIcon icon={faUserPlus} />
              </span>
              <h1 className="mt-6 text-3xl font-black tracking-tight">Create account</h1>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Start learning with expert-led courses and practical projects.
              </p>

              <form className="mt-8 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2 text-sm font-semibold">
                    First Name
                    <div className="relative">
                      <FontAwesomeIcon
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        icon={faUser}
                      />
                      <input
                        className="h-14 w-full rounded-xl border border-slate-300 bg-white py-4 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#302be2] focus:ring-4 focus:ring-indigo-100"
                        placeholder="John"
                        type="text"
                      />
                    </div>
                  </label>
                  <label className="grid gap-2 text-sm font-semibold">
                    Last Name
                    <div className="relative">
                      <FontAwesomeIcon
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        icon={faUser}
                      />
                      <input
                        className="h-14 w-full rounded-xl border border-slate-300 bg-white py-4 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#302be2] focus:ring-4 focus:ring-indigo-100"
                        placeholder="Doe"
                        type="text"
                      />
                    </div>
                  </label>
                </div>

                <label className="grid gap-2 text-sm font-semibold">
                  Email Address
                  <div className="relative">
                    <FontAwesomeIcon
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      icon={faEnvelope}
                    />
                    <input
                      className="h-14 w-full rounded-xl border border-slate-300 bg-white py-4 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#302be2] focus:ring-4 focus:ring-indigo-100"
                      placeholder="john@example.com"
                      type="email"
                    />
                  </div>
                </label>

                <label className="grid gap-2 text-sm font-semibold">
                  Password
                  <div className="relative">
                    <FontAwesomeIcon
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      icon={faLock}
                    />
                    <input
                      className="h-14 w-full rounded-xl border border-slate-300 bg-white py-4 pl-11 pr-12 text-sm outline-none transition placeholder:text-slate-400 focus:border-[#302be2] focus:ring-4 focus:ring-indigo-100"
                      placeholder="Create a strong password"
                      type="password"
                    />
                    <button
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-[#302be2]"
                      type="button"
                      aria-label="Show password"
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                  </div>
                </label>

                <label className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                  <input className="mt-1 h-4 w-4 accent-[#302be2]" type="checkbox" />
                  I agree to the Terms of Service and Privacy Policy.
                </label>

                <button
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-[#302be2] py-4 text-sm font-black text-white shadow-lg shadow-indigo-500/20 transition hover:bg-[#1916b8]"
                  type="button"
                >
                  Create Account
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </form>

              <div className="mt-7 text-center text-sm text-slate-600">
                Already have an account?{' '}
                <a className="font-black text-[#302be2]" href="/login">
                  Sign in
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative hidden overflow-hidden bg-[#302be2] p-12 text-white lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover opacity-30"
            src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=85"
            alt="Learners collaborating"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1611a8] via-[#302be2]/90 to-slate-950/80" />
          <div className="relative flex h-full flex-col justify-between">
            <a className="inline-flex items-center gap-3 text-xl font-black" href="/">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                <FontAwesomeIcon icon={faCertificate} />
              </span>
              Online Course
            </a>
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-indigo-100">Start today</p>
              <h2 className="mt-5 max-w-xl text-5xl font-black leading-tight">
                Learn with mentors, projects, and certificates that prove your skills.
              </h2>
              <p className="mt-6 max-w-lg text-base leading-8 text-indigo-50">
                Build a personal course library, track progress, and learn at a pace that
                matches your life.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white/10 p-5">
                  <p className="text-2xl font-black">120+</p>
                  <p className="mt-1 text-xs text-indigo-100">Career courses</p>
                </div>
                <div className="rounded-xl bg-white/10 p-5">
                  <p className="text-2xl font-black">24/7</p>
                  <p className="mt-1 text-xs text-indigo-100">Learning access</p>
                </div>
              </div>
            </div>
            <p className="text-sm text-indigo-100">No credit card required to begin.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Register
