import React from 'react'
import { useSelector } from 'react-redux'
import { LocationState } from 'redux-first-router'
import { RootState } from 'state';

export interface Props {
  component: React.ComponentType<{ location: LocationState, in: boolean }>
  transition?: boolean
  routes: string[]
  renderOnMatch?: boolean
}

const RouteComponent = ({
  component: Component,
  transition,
  routes,
  renderOnMatch = true,
}: Props) => {
  const location = useSelector((state: RootState) => state.location)
  const routeMatches = routes.includes(location.type)
  const shouldRender = renderOnMatch ? routeMatches : !routeMatches

  // Only render (or send in prop) if route matches
  if (transition) {
    return (
      <Component location={location} in={shouldRender} />
    )
  }

  if (shouldRender) {
    return (
      <Component location={location} in />
    )
  }

  return null
}

export default RouteComponent
