declare module '*.mpx' {
  const component: unknown
  export default component
}

declare module '*?fallback=true' {
  const URL: string
  export default URL
}
