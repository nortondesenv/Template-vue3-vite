export interface RoutesType {
  path: string
  name?: string
  redirect?: string
  component: () => {}
  meta?: {
    index?: number
    keepAlive?: boolean
  }
  children?: RoutesType[]
}
