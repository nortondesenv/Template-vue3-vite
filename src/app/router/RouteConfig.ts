export default interface RouteConfig {
  path: string
  name?: string
  redirect?: string
  component: () => {}
  meta?: {
    index?: number
    keepAlive?: boolean
  }
  children?: Array<RouteConfig>
}
