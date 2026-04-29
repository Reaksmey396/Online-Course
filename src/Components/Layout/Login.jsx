import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faEye,
  faGraduationCap,
  faLock,
} from '@fortawesome/free-solid-svg-icons'

const Login = () => {
  return (
    <main className="h-screen overflow-hidden bg-[#f8f9ff] text-[#101828]">
      <section className="grid h-screen overflow-hidden lg:grid-cols-2">
        <aside className="auth-code-panel relative hidden h-screen overflow-hidden bg-[#08264a] text-white lg:block">
          <img
            className="auth-code-image absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=85"
            alt="Student learning coding on a laptop"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071d35]/80 via-[#0b3c78]/54 to-[#0c3f98]/92" />
          <div className="auth-panel-glow" />

          <div className="relative z-10 flex h-full flex-col justify-between px-12 py-9">
            <a className="inline-flex items-center gap-3 text-2xl font-black tracking-tight" href="/">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2459df] text-lg shadow-lg shadow-blue-950/30">
                <FontAwesomeIcon icon={faGraduationCap} />
              </span>
              Online Course
            </a>

            <div className="max-w-lg">
              <h1 className="text-5xl font-black leading-[1.08] tracking-tight text-white drop-shadow-lg">
                Unlock Your Potential
              </h1>
              <p className="mt-5 max-w-md text-xl leading-8 text-white/86">
                Join thousands of learners worldwide and start your coding journey today.
              </p>
            </div>
          </div>
        </aside>

        <section className="flex h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_right,#eef4ff,transparent_34%),#f8f9ff] px-6 py-6 sm:px-10">
          <div className="w-full max-w-[460px] rounded-2xl border border-slate-200 bg-white/95 p-8 shadow-2xl shadow-blue-950/10">
            <a className="mb-6 inline-flex items-center gap-3 text-2xl font-black text-[#2459df] lg:hidden" href="/">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2459df] text-base text-white">
                <FontAwesomeIcon icon={faGraduationCap} />
              </span>
              Online Course
            </a>

            <div>
              <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#2459df]">
                Student Portal
              </span>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-[#2459df]">Online Course</h2>
              <p className="mt-2 text-base text-slate-500">Welcome back. Continue learning where you left off.</p>
            </div>

            <form className="mt-8 grid gap-5">
              <label className="grid gap-2 text-base font-semibold tracking-wide">
                Email Address
                <div className="relative">
                  <FontAwesomeIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-base text-slate-500" icon={faEnvelope} />
                  <input
                    className="h-12 w-full rounded-lg border border-slate-300 bg-white pl-11 pr-4 text-base text-slate-800 outline-none transition placeholder:text-slate-500 focus:border-[#2459df] focus:ring-4 focus:ring-blue-100"
                    placeholder="name@company.com"
                    type="email"
                  />
                </div>
              </label>

              <label className="grid gap-2 text-base font-semibold tracking-wide">
                <span className="flex items-center justify-between gap-4">
                  Password
                  <a className="text-base font-semibold text-[#0d49c8] transition hover:text-[#06328e]" href="#forgot">
                    Forgot Password?
                  </a>
                </span>
                <div className="relative">
                  <FontAwesomeIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-base text-slate-500" icon={faLock} />
                  <input
                    className="h-12 w-full rounded-lg border border-slate-300 bg-white pl-11 pr-12 text-base text-slate-800 outline-none transition placeholder:text-slate-500 focus:border-[#2459df] focus:ring-4 focus:ring-blue-100"
                    placeholder="Password"
                    type="password"
                  />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-[#2459df]" type="button" aria-label="Show password">
                    <FontAwesomeIcon icon={faEye} />
                  </button>
                </div>
              </label>

              <label className="flex items-center gap-3 text-base text-slate-700">
                <input className="h-4 w-4 rounded border-slate-300 accent-[#2459df]" type="checkbox" />
                Remember Me
              </label>

              <button className="h-12 rounded-lg bg-[#2459df] text-base font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-[#1746bc]" type="button">
                Login
              </button>
            </form>

            <p className="mt-8 border-t border-slate-200 pt-6 text-center text-base text-slate-700">
              Don&apos;t have an account?{' '}
              <a className="font-bold text-[#0d49c8] hover:text-[#06328e]" href="/register">
                Join for Free
              </a>
            </p>
          </div>
        </section>
      </section>
    </main>
  )
}

export default Login
