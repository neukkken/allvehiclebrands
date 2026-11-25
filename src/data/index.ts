import type { Brand } from '../types'
import { carBrands } from './cars'
import { motorcycleBrands } from './motorcycles'
import { truckBrands } from './trucks'

export { carBrands } from './cars'
export { motorcycleBrands } from './motorcycles'
export { truckBrands } from './trucks'

function deduplicate(brands: Brand[]): Brand[] {
  const seen = new Set<string>()
  return brands.filter(b => {
    const key = b.name.toLowerCase()
    if (seen.has(key)) return false
    seen.add(key)
    return true
  })
}

export const allBrands: Brand[] = deduplicate([...carBrands, ...motorcycleBrands, ...truckBrands])
