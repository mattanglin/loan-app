import * as React from 'react'
import { useSelector } from 'react-redux'
import { LocationState } from 'redux-first-router'
import { RootState } from 'state';

export interface Props {
  routes?: {
    [routeAction: string]: React.ComponentType<{ location: LocationState, in: boolean }>
  },
  defaultComponent?: React.ComponentType<{ location: LocationState, in: boolean }>
  transition?: string
}

const RouteSwitch = ({
  routes = {},
  defaultComponent: DefaultComponent,
  transition,
}: Props) => {
  const location = useSelector((state: RootState) => state.location)

  // Render as transitions
  if (transition) {
    let routeMatched = false
    const routeComponents = Object.keys(routes).map(routeType => {
      const isCurrentRoute = location.type === routeType
      routeMatched = routeMatched || isCurrentRoute

      const RouteTransitionComponent = routes[routeType]

      return <RouteTransitionComponent key={`${transition}:${routeType}`} location={location} in={isCurrentRoute} />
    })

    if (DefaultComponent) {
      routeComponents.push(
        <DefaultComponent key={`${transition}:default`} location={location} in={!routeMatched} />
      )
    }

    return <>{routeComponents}</>
  }

  // Render
  const RouteComponent = routes[location.type] || DefaultComponent

  if (RouteComponent) {
    return <RouteComponent location={location} in />
  }

  return null
}

export default RouteSwitch
