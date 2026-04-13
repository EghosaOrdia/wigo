import React from "react";

const VerifyAuth = () => {
  return (
    <body class="min-h-screen flex items-center justify-center p-6 bg-surface selection:bg-primary-container selection:text-on-primary-container">
      {/* <!-- Top Navigation Bar (Shared Component Strategy) --> */}
      <nav class="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-10 bg-[#f7f5ff]/80 dark:bg-[#13141f]/80 backdrop-blur-3xl h-20">
        <div class="flex items-center gap-2">
          <span class="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-linear-to-r from-[#0058bb] to-[#6c9fff]">
            Luminous
          </span>
        </div>
        <div class="flex items-center gap-4">
          <button class="flex items-center justify-center w-10 h-10 text-slate-500 hover:bg-white/50 transition-all duration-300 rounded-4xl active:scale-95">
            <span class="material-symbols-outlined">help_outline</span>
          </button>
        </div>
      </nav>
      {/* <!-- Main Content Canvas --> */}
      <main class="w-full max-w-2xl mt-20 relative">
        {/* <!-- Decorative Ambient Sparks --> */}
        <div class="absolute -top-32 -left-32 w-64 h-64 bg-primary-container/30 rounded-full blur-[80px]"></div>
        <div class="absolute -bottom-32 -right-32 w-80 h-80 bg-tertiary-container/20 rounded-full blur-[100px]"></div>
        <div class="glass-panel relative z-10 p-10 md:p-16 rounded-xl shadow-[0_32px_64px_-16px_rgba(35,44,81,0.08)] text-center border border-white/40">
          {/* <!-- Branding Header --> */}
          <div class="mb-10 inline-flex p-5 rounded-lg bg-surface-container-low text-primary">
            <span
              class="material-symbols-outlined text-4xl"
              style="font-variation-settings: 'FILL' 1;"
            >
              mark_email_unread
            </span>
          </div>
          {/* <!-- Content Header --> */}
          <div class="space-y-4 mb-12">
            <h1 class="text-4xl font-extrabold tracking-tight text-on-surface leading-tight">
              Verify your email
            </h1>
            <p class="text-body-lg text-on-surface-variant max-w-md mx-auto leading-relaxed">
              Enter the 6-digit code sent to your email{" "}
              <span class="font-semibold text-on-surface">
                (j***@example.com)
              </span>
            </p>
          </div>
          {/* <!-- OTP Input Section --> */}
          <form action="#" class="space-y-12">
            <div class="flex justify-center gap-3 md:gap-4 items-center">
              {/* <!-- Active Input --> */}
              <input
                autofocus=""
                class="otp-input w-12 h-16 md:w-16 md:h-20 text-2xl font-bold text-center rounded-lg bg-surface-container-lowest border-2 border-primary outline-none transition-all duration-300"
                maxlength="1"
                type="text"
                value="4"
              />
              {/* <!-- Inactive Inputs --> */}
              <input
                class="otp-input w-12 h-16 md:w-16 md:h-20 text-2xl font-bold text-center rounded-lg bg-surface-container-highest border-transparent hover:border-outline-variant focus:border-primary outline-none transition-all duration-300"
                maxlength="1"
                type="text"
              />
              <input
                class="otp-input w-12 h-16 md:w-16 md:h-20 text-2xl font-bold text-center rounded-lg bg-surface-container-highest border-transparent hover:border-outline-variant focus:border-primary outline-none transition-all duration-300"
                maxlength="1"
                type="text"
              />
              {/* <!-- Gap for visual grouping --> */}
              <div class="w-1 h-1 md:w-2 md:h-2 rounded-full bg-outline-variant opacity-50"></div>
              <input
                class="otp-input w-12 h-16 md:w-16 md:h-20 text-2xl font-bold text-center rounded-lg bg-surface-container-highest border-transparent hover:border-outline-variant focus:border-primary outline-none transition-all duration-300"
                maxlength="1"
                type="text"
              />
              <input
                class="otp-input w-12 h-16 md:w-16 md:h-20 text-2xl font-bold text-center rounded-lg bg-surface-container-highest border-transparent hover:border-outline-variant focus:border-primary outline-none transition-all duration-300"
                maxlength="1"
                type="text"
              />
              <input
                class="otp-input w-12 h-16 md:w-16 md:h-20 text-2xl font-bold text-center rounded-lg bg-surface-container-highest border-transparent hover:border-outline-variant focus:border-primary outline-none transition-all duration-300"
                maxlength="1"
                type="text"
              />
            </div>
            {/* <!-- Action Buttons --> */}
            <div class="flex flex-col gap-6 items-center">
              <button
                class="w-full h-14 md:h-16 text-lg font-bold text-on-primary bg-gradient-to-r from-primary to-primary-container rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 active:scale-95"
                type="submit"
              >
                Verify
              </button>
              <div class="flex flex-col gap-2 items-center">
                <button
                  class="text-primary font-semibold py-2 px-6 rounded-md hover:bg-primary-container/10 transition-colors duration-300"
                  type="button"
                >
                  Resend code
                </button>
                <p class="text-label-md text-on-surface-variant/70 tracking-wide uppercase text-xs font-medium">
                  Resend available in 30s
                </p>
              </div>
            </div>
          </form>
        </div>
        {/* <!-- Footer Help --> */}
        <div class="mt-12 text-center text-on-surface-variant flex items-center justify-center gap-8">
          <a
            class="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1.5"
            href="#"
          >
            <span class="material-symbols-outlined text-lg">support_agent</span>
            Contact Support
          </a>
          <div class="w-1 h-1 rounded-full bg-outline-variant"></div>
          <a
            class="text-sm font-medium hover:text-primary transition-colors"
            href="#"
          >
            Privacy Policy
          </a>
        </div>
      </main>
      {/* <!-- Visual Background Enhancements --> */}
      <div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div class="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-secondary-container/10 rounded-full blur-[120px]"></div>
        <div class="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]"></div>
      </div>
    </body>
  );
};

export default VerifyAuth;
