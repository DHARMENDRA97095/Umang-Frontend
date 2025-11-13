import lineClamp from '@tailwindcss/line-clamp'
import typography from '@tailwindcss/typography'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust paths for your project
  ],
  theme: {
    extend: {
      keyframes: {
        customBounce: {
          '0%, 100%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
          '50%': { transform: 'translateY(-25%)', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
        },
      },
      animation: {
        customBounce: 'customBounce 1.2s infinite',
        slowBounce: 'customBounce 2.5s infinite',
        fastBounce: 'customBounce 0.6s infinite',
      },
    },
  },
  plugins: [
    lineClamp,
    typography,
  ],
}
