import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faGraduationCap,
  faLock,
  faUser,
} from '@fortawesome/free-solid-svg-icons'

const Register = () => {
  return (
    <main className="h-screen overflow-hidden bg-[#f8f9ff] text-[#101828]">
      <section className="grid h-screen overflow-hidden lg:grid-cols-2">
        <aside className="auth-code-panel relative hidden h-screen overflow-hidden bg-[#08264a] text-white lg:block">
          <img
            className="auth-code-image absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1400&q=85"
            alt="Learners studying programming together"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#071d35]/82 via-[#0b3c78]/56 to-[#0c3f98]/94" />
          <div className="auth-panel-glow" />

          <div className="relative z-10 flex h-full flex-col justify-between px-12 py-9">
            <a className="inline-flex items-center gap-3 text-2xl font-black tracking-tight" href="/">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2459df] text-lg shadow-lg shadow-blue-950/30">
                <FontAwesomeIcon icon={faGraduationCap} />
              </span>
              Online Course
            </a>

            <div className="max-w-lg">
              <h1 className="text-4xl font-black leading-[1.12] tracking-tight text-white drop-shadow-lg">
                Build real coding skills with the world&apos;s best mentors.
              </h1>
              <p className="mt-5 max-w-md text-xl leading-8 text-white/86">
                Join over 2 million learners and start building projects that prove your talent.
              </p>
            </div>
          </div>
        </aside>

        <section className="flex h-screen items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top_right,#eef4ff,transparent_34%),#f8f9ff] px-6 py-5 sm:px-10">
          <div className="w-full max-w-[460px] rounded-2xl border border-slate-200 bg-white/95 p-7 shadow-2xl shadow-blue-950/10">
            <a className="mb-5 inline-flex items-center gap-3 text-2xl font-black text-[#2459df] lg:hidden" href="/">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2459df] text-base text-white">
                <FontAwesomeIcon icon={faGraduationCap} />
              </span>
              Online Course
            </a>

            <div>
              <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#2459df]">
                Start Learning
              </span>
              <h2 className="mt-4 text-4xl font-black tracking-tight">Create Account</h2>
              <p className="mt-2 text-base text-slate-600">Set up your profile and begin coding today.</p>
            </div>

            <form className="mt-7 grid gap-4">
              <label className="grid gap-1.5 text-sm font-semibold uppercase tracking-wide">
                Full Name
                <div className="relative">
                  <FontAwesomeIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-base text-slate-500" icon={faUser} />
                  <input
                    className="h-11 w-full rounded-lg border border-slate-300 bg-white pl-11 pr-4 text-base normal-case tracking-normal text-slate-800 outline-none transition placeholder:text-slate-500 focus:border-[#2459df] focus:ring-4 focus:ring-blue-100"
                    placeholder="Enter your full name"
                    type="text"
                  />
                </div>
              </label>

              <label className="grid gap-1.5 text-sm font-semibold uppercase tracking-wide">
                Email Address
                <div className="relative">
                  <FontAwesomeIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-base text-slate-500" icon={faEnvelope} />
                  <input
                    className="h-11 w-full rounded-lg border border-slate-300 bg-white pl-11 pr-4 text-base normal-case tracking-normal text-slate-800 outline-none transition placeholder:text-slate-500 focus:border-[#2459df] focus:ring-4 focus:ring-blue-100"
                    placeholder="name@company.com"
                    type="email"
                  />
                </div>
              </label>

              <label className="grid gap-1.5 text-sm font-semibold uppercase tracking-wide">
                Password
                <div className="relative">
                  <FontAwesomeIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-base text-slate-500" icon={faLock} />
                  <input
                    className="h-11 w-full rounded-lg border border-slate-300 bg-white pl-11 pr-4 text-base normal-case tracking-normal text-slate-800 outline-none transition placeholder:text-slate-500 focus:border-[#2459df] focus:ring-4 focus:ring-blue-100"
                    placeholder="Password"
                    type="password"
                  />
                </div>
              </label>

              <label className="grid gap-1.5 text-sm font-semibold uppercase tracking-wide">
                Confirm Password
                <div className="relative">
                  <FontAwesomeIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-base text-slate-500" icon={faLock} />
                  <input
                    className="h-11 w-full rounded-lg border border-slate-300 bg-white pl-11 pr-4 text-base normal-case tracking-normal text-slate-800 outline-none transition placeholder:text-slate-500 focus:border-[#2459df] focus:ring-4 focus:ring-blue-100"
                    placeholder="Confirm password"
                    type="password"
                  />
                </div>
              </label>

              <label className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-700">
                <input className="h-4 w-4 rounded border-slate-300 accent-[#2459df]" type="checkbox" />
                <span>I agree to the</span>
                <a className="text-[#0d49c8] hover:text-[#06328e]" href="#terms">Terms of Service</a>
                <span>and</span>
                <a className="text-[#0d49c8] hover:text-[#06328e]" href="#privacy">Privacy Policy</a>
              </label>

              <button className="mt-2 h-12 rounded-lg bg-[#2459df] text-base font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-[#1746bc]" type="button">
                Create Account
              </button>
            </form>

            <p className="mt-7 border-t border-slate-200 pt-5 text-center text-base text-slate-700">
              Already have an account?{' '}
              <a className="font-bold text-[#0d49c8] hover:text-[#06328e]" href="/login">
                Log In
              </a>
            </p>

          </div>
        </section>
      </section>
    </main>
  )
}

export default Register
