import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRight,
  faBookOpen,
  faEnvelope,
  faEye,
  faLock,
  faShieldHalved,
  faStar,
} from '@fortawesome/free-solid-svg-icons'

const Login = () => {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <section className="grid min-h-screen lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative hidden overflow-hidden bg-[#302be2] p-12 text-white lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover opacity-30"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=85"
            alt="Students studying online"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1611a8] via-[#302be2]/90 to-slate-950/80" />
          <div className="relative flex h-full flex-col justify-between">
            <a className="inline-flex items-center gap-3 text-xl font-black" href="/">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                <FontAwesomeIcon icon={faBookOpen} />
              </span>
              Online Course
            </a>
            <div>
              <div className="mb-7 flex gap-1 text-amber-300">
                {Array.from({ length: 5 }, (_, index) => (
                  <FontAwesomeIcon icon={faStar} key={index} />
                ))}
              </div>
              <p className="text-sm font-bold uppercase tracking-wide text-indigo-100">Trusted learning platform</p>
              <h1 className="mt-5 max-w-xl text-5xl font-black leading-tight">
                Welcome back to your learning workspace.
              </h1>
              <p className="mt-6 max-w-lg text-base leading-8 text-indigo-50">
                Track progress, continue saved lessons, and keep your certificates in one
                calm, focused place.
              </p>
              <div className="mt-10 flex items-center gap-3 rounded-2xl bg-white/10 p-5 text-sm text-indigo-50 backdrop-blur">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15">
                  <FontAwesomeIcon icon={faShieldHalved} />
                </span>
                Secure sign-in protects your courses, notes, and learning history.
              </div>
            </div>
            <p className="text-sm text-indigo-100">Learn anywhere. Grow every week.</p>
          </div>
        </div>

        <div className="flex min-h-screen items-center justify-center bg-[#f7f8ff] px-5 py-10 sm:px-8">
          <div className="w-full max-w-md">
            <a className="mb-10 inline-flex items-center gap-3 text-xl font-black text-[#1f22e8] lg:hidden" href="/">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf0ff]">
                <FontAwesomeIcon icon={faBookOpen} />
              </span>
              Online Course
            </a>
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-xl shadow-slate-200/80 sm:p-9">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#edf0ff] text-[#302be2]">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <h2 className="mt-6 text-3xl font-black tracking-tight">Sign in</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Continue with your email and password.
              </p>

              <form className="mt-8 grid gap-5">
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
                      placeholder="Enter your password"
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

                <div className="flex items-center justify-between gap-4 text-sm">
                  <label className="flex items-center gap-2 text-slate-600">
                    <input className="h-4 w-4 accent-[#302be2]" type="checkbox" />
                    Remember me
                  </label>
                  <a className="font-semibold text-[#302be2]" href="#forgot">
                    Forgot password?
                  </a>
                </div>

                <button
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-[#302be2] py-4 text-sm font-black text-white shadow-lg shadow-indigo-500/20 transition hover:bg-[#1916b8]"
                  type="button"
                >
                  Sign In
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </form>

              <div className="mt-7 text-center text-sm text-slate-600">
                New to Online Course?{' '}
                <a className="font-black text-[#302be2]" href="/register">
                  Create an account
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Login
