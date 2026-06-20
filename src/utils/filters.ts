import type { Brand, VehicleType, BrandStatus } from '../types'

export function brandsByCountry(brands: Brand[], country: string): Brand[] {
  return brands.filter(b => b.country.toLowerCase() === country.toLowerCase())
}

export function brandsByGroup(brands: Brand[], group: string): Brand[] {
  return brands.filter(b => b.group?.toLowerCase() === group.toLowerCase())
}

export function brandsByType(brands: Brand[], type: VehicleType): Brand[] {
  return brands.filter(b => b.type === type)
}

export function activeBrands(brands: Brand[]): Brand[] {
  return brands.filter(b => b.status === 'active')
}

export function inactiveBrands(brands: Brand[]): Brand[] {
  return brands.filter(b => b.status === 'inactive' || b.status === 'defunct')
}

export function brandsByStatus(brands: Brand[], status: BrandStatus): Brand[] {
  return brands.filter(b => b.status === status)
}

export function searchBrands(brands: Brand[], query: string): Brand[] {
  const q = query.toLowerCase()
  return brands.filter(
    b =>
      b.name.toLowerCase().includes(q) ||
      b.country.toLowerCase().includes(q) ||
      (b.group?.toLowerCase() ?? '').includes(q),
  )
}

export function getCountries(brands: Brand[]): string[] {
  return [...new Set(brands.map(b => b.country))].sort()
}

export function getGroups(brands: Brand[]): string[] {
  return [...new Set(brands.map(b => b.group).filter((g): g is string => !!g))].sort()
}
