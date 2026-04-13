import { Eye, Sparkles } from "lucide-react";
import React from "react";

const Auth = () => {
  return (
    <main className="min-h-screen w-full flex flex-col md:flex-row">
      {/* <!-- Left Side: Auth Form --> */}
      <section className="flex-1 bg-surface-container-lowest flex items-center justify-center p-8 md:p-16 lg:p-24 order-2 md:order-1">
        <div className="w-full max-w-md space-y-10">
          {/* <!-- Brand Anchor --> */}
          <div className="flex items-center space-x-2">
            <span className="text-primary text-3xl font-bold tracking-tighter">
              Spark
            </span>
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight text-on-surface font-headline">
              Create your account
            </h1>
            <p className="text-on-surface-variant">
              Join the community and ignite your creativity today.
            </p>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <div className="space-y-2">
                <label className="text-on-surface font-semibold text-sm px-4">
                  First Name
                </label>
                <input
                  className="w-full px-6 py-4 rounded-3xl bg-surface-container-highest border-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all text-on-surface placeholder:text-outline outline-none mt-2"
                  placeholder="Jane"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-on-surface font-semibold text-sm px-4">
                  Last Name
                </label>
                <input
                  className="w-full px-6 py-4 rounded-3xl bg-surface-container-highest border-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all text-on-surface placeholder:text-outline outline-none mt-2"
                  placeholder="Doe"
                  type="text"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-on-surface font-semibold text-sm px-4">
                Email Address
              </label>
              <input
                className="w-full px-6 py-4 rounded-3xl bg-error-container/10 border border-error-dim/20 focus:ring-2 focus:ring-error transition-all text-on-surface placeholder:text-outline outline-none mt-2"
                placeholder="jane@example.com"
                type="email"
              />
              <span className="text-error text-xs font-medium px-4 flex items-center">
                <span className="material-symbols-outlined text-[14px] mr-1">
                  error
                </span>
                Please enter a valid email
              </span>
            </div>
            <div className="space-y-2">
              <label className="text-on-surface font-semibold text-sm px-4">
                Password
              </label>
              <div className="relative">
                <input
                  className="w-full px-6 py-4 rounded-3xl bg-surface-container-highest border-none focus:ring-2 focus:ring-primary focus:bg-surface-container-lowest transition-all text-on-surface placeholder:text-outline outline-none mt-2"
                  placeholder="••••••••"
                  type="password"
                />
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors outline-none"
                  type="button"
                >
                  <Eye />
                </button>
              </div>
              <p className="text-xs text-on-surface-variant px-4 leading-relaxed">
                Must contain at least 8 characters, one uppercase letter, and
                one symbol.
              </p>
            </div>
            <div className="flex items-start space-x-3 px-1">
              <input
                className="mt-1 h-5 w-5 rounded-md border-outline-variant text-primary focus:ring-primary transition-all outline-primary"
                id="terms"
                type="checkbox"
              />
              <label
                className="text-sm text-on-surface-variant leading-snug"
                htmlFor="terms"
              >
                By creating an account, I agree to the
                <a
                  className="text-primary font-semibold hover:underline decoration-2"
                  href="#"
                >
                  {" "}
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  className="text-primary font-semibold hover:underline decoration-2"
                  href="#"
                >
                  Privacy Policy
                </a>
                .
              </label>
            </div>
            <button
              className="w-full py-4 px-8 rounded-3xl bg-linear-to-r from-primary to-primary-container text-on-primary font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
              type="submit"
            >
              Sign Up
            </button>
          </form>
          <div className="relative flex items-center py-4">
            <div className="grow border-t border-surface-container-highest"></div>
            <span className="shrink mx-4 text-outline font-bold text-xs uppercase tracking-widest">
              OR
            </span>
            <div className="grow border-t border-surface-container-highest"></div>
          </div>
          <button className="w-full py-4 px-8 rounded-3xl bg-surface-container-high hover:bg-surface-container-highest transition-colors flex items-center justify-center space-x-3 group">
            <img
              alt="Google Logo"
              className="w-5 h-5 grayscale group-hover:grayscale-0 transition-all"
              data-alt="Official Google logo with signature four-color palette on a white background for authentication branding"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjn_gINtPOEsmjxs7M_EVKihx3CiITXuD7MxMuZasqOmVmzLrC86HMLMYQ6NaY8LNVxvBe-XiKU3ZZZZKNy5E_YgJ9bW9LAImor8VJekxgcSZXf0OUjl5mBho82CUZl2CHFxJGioFDJ0IF3i9kYkW0JovyF37WUCQ-hi5mQenRmad5p11-ayWNDqkiXeQa3O_xBiueH1QyQwOJo-sD5s2TTSu5tC_CxIZkcURgmRyMUhxtPV17oRBqhAtKXyxDv5PlSo6tbLhzMBw"
            />
            <span className="text-on-surface font-semibold">
              Continue with Google
            </span>
          </button>
          <p className="text-center text-on-surface-variant">
            Already have an account?
            <a
              className="text-primary font-bold hover:underline decoration-2 ml-1"
              href="#"
            >
              Sign In
            </a>
          </p>
        </div>
      </section>
      {/* <!-- Right Side: Luminous Canvas Abstract --> */}
      <section className="flex-1 min-h-100 md:min-h-screen relative overflow-hidden auth-gradient-bg order-1 md:order-2 flex items-center justify-center">
        {/* <!-- Decorative Sparks --> */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-tertiary-container opacity-30 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-secondary-container opacity-20 blur-[120px]"></div>
        <div className="relative z-10 w-full max-w-lg p-8">
          {/* <!-- Floating Glass Card --> */}
          <div className="glass-panel p-12 rounded-4xl shadow-2xl space-y-8 border border-white/20">
            <div className="w-20 h-20 bg-primary-container/30 rounded-3xl flex items-center justify-center backdrop-blur-md">
              <Sparkles className="text-white" />
            </div>
            <div className="space-y-4">
              <h2 className="text-5xl font-extrabold text-white leading-tight tracking-tight">
                The canvas is yours to{" "}
                <span className="text-tertiary-fixed">illuminate.</span>
              </h2>
              <p className="text-white/80 text-xl leading-relaxed font-medium">
                Capture your sparks of genius in an environment designed for
                flow, not friction.
              </p>
            </div>
            <div className="flex -space-x-4">
              <img
                className="w-12 h-12 rounded-full border-4 border-primary ring-2 ring-white/10"
                data-alt="Portrait of a creative professional woman smiling in a bright studio environment"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC215fIgZLWsRB6W2Nr6IB6BAxZqSsXJiQTmWxR9QyFwyVnqPQQJkCSOq7-yXZ6RpeEmo9ze9IUruojtYKROoC3fMamRdbdTFNbCAXq-C2HKcQ-thZ9DZfhTTWx1PCnuCAP3ucJxCI6iViKoT3DupSL9JJ1cdFZjjmBJoMxbv7QzddU61Wy7u5Vf5pM8SmdtSfd0A52Tq8Vpk_leBEcB5-d-r4TQhDjkeKLkfKRZXN7k5dpn_-thl_XPLtazIZ8K08zEAelT1lnfnE"
              />
              <img
                className="w-12 h-12 rounded-full border-4 border-primary ring-2 ring-white/10"
                data-alt="Portrait of a young male designer looking thoughtfully away from the camera in a modern workspace"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDj2D7oqDCwYjIQMEANpF93FfADhHi0M03aiSXLUZlXa6Ifvh8SMKraKdw96LtLoWGDAeOrNcfotWHhSwvifRSoaw6f0XC4RHT65XRec_4X960f7h7lCApw4Nq0wA__D_LIrVwSCJCqPYHjZyDrq8smMc_1s51DdTJF5I8nylK-ftXVck7OQWP2izvC5kLlaz7OJ75ga5WyZYirJZm7lgTRsis6byfEfebmQsjVcbBUNEqeZNCkmXLh1zE8fUGufydAKM8k9Iof6HI"
              />
              <img
                className="w-12 h-12 rounded-full border-4 border-primary ring-2 ring-white/10"
                data-alt="Smiling female developer in a casual setting with soft natural light"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVO3N1-OL5qCSQI82gJ6wEEMSAZbtlATaxGFOATw2FIvwxmfgfEZrfPlVYsOX4GI0sX5h8KZgG7_iwoaB13t2gaQSXP50yD3IulydCwhvLiZIzAKrJfJVNPrxMNRNJ0odHzDoZ_AW3V_Y-ziwIguh9gtzdWqzL4VYTl5s_cYMwGN7Tu5vkcVNPZbDxpfjVHgywMI5IARdSWqh8WAZDzq7RDYm5G_978S5p5fT9fLNBZH76vrwkqv3rxpB19ZziqrU0muyJ_zB85gQ"
              />
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center border-4 border-primary ring-2 ring-white/10 text-white font-bold text-sm">
                +2k
              </div>
            </div>
            <p className="text-white/60 text-sm font-semibold tracking-widest uppercase">
              Trusted by 2,000+ visionaries
            </p>
          </div>
        </div>
        {/* <!-- Kinetic Elements --> */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <div className="absolute top-[20%] right-[10%] w-32 h-32 border-2 border-white/20 rounded-full"></div>
          <div className="absolute bottom-[20%] left-[10%] w-64 h-64 border-2 border-white/10 rounded-full"></div>
        </div>
      </section>
    </main>
  );
};

export default Auth;
