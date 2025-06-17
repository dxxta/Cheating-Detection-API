import { onMounted, reactive } from 'vue'

export const useBreakpoint = () => {
  const screens = reactive({
    sm: 600,
    md: 728,
    lg: 984,
    xl: 1240,
    xxl: 1280,
  })
  const sm = (val: number) => val >= screens.sm && val <= screens.md
  const md = (val: number) => val >= screens.md && val <= screens.lg
  const lg = (val: number) => val >= screens.lg && val <= screens.xl
  const xl = (val: number) => val >= screens.xl && val <= screens.xxl
  const xxl = (val: number) => val >= screens.xxl
  const smAndDown = (val: number) => val <= screens.sm
  const mdAndDown = (val: number) => val <= screens.md
  const lgAndDown = (val: number) => val <= screens.lg
  const getBreakpoint = (w: number) => {
    if (sm(w)) return 'sm'
    else if (md(w)) return 'md'
    else if (lg(w)) return 'lg'
    else if (xl(w)) return 'xl'
    else if (xxl(w)) return 'xxl'
    else return 'all'
  }
  const breakpoint = reactive({
    w: window.innerWidth,
    h: window.innerHeight,
    is: getBreakpoint(window.innerWidth),
    smAndDown: smAndDown(window.innerHeight),
    mdAndDown: mdAndDown(window.innerHeight),
    lgAndDown: lgAndDown(window.innerHeight),
  })
  const onChange = () => {
    breakpoint.w = window.innerWidth
    breakpoint.h = window.innerHeight
    breakpoint.is = getBreakpoint(window.innerWidth)
    breakpoint.smAndDown = smAndDown(window.innerWidth) || false
    breakpoint.mdAndDown = mdAndDown(window.innerWidth) || false
    breakpoint.lgAndDown = lgAndDown(window.innerWidth) || false
  }
  onMounted(() => {
    onChange()
    window.addEventListener('resize', onChange)
  })
  return breakpoint
}
