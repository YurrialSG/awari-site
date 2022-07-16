import { useEffect, useLayoutEffect } from 'react'

export function getMediaQuery(breakpoint, rule = 'min') {
	return `@media(${rule}-width: ${breakpoint}px)`
}

export const useIsomorphicLayoutEffect =
	typeof window !== 'undefined' ? useLayoutEffect : useEffect
