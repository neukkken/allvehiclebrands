import { describe, it, expect } from 'vitest'
import { carBrands, motorcycleBrands, allBrands } from '../src/data'
import { brandsByCountry, brandsByType, activeBrands, searchBrands, getCountries, getGroups } from '../src/utils/filters'

describe('carBrands', () => {
  it('should have at least 100 car brands', () => {
    expect(carBrands.length).toBeGreaterThanOrEqual(100)
  })

  it('should have all required fields', () => {
    for (const brand of carBrands) {
      expect(brand.name).toBeTruthy()
      expect(brand.country).toBeTruthy()
      expect(['car', 'both']).toContain(brand.type)
      expect(['active', 'inactive', 'defunct']).toContain(brand.status)
    }
  })
})

describe('motorcycleBrands', () => {
  it('should have at least 100 motorcycle brands', () => {
    expect(motorcycleBrands.length).toBeGreaterThanOrEqual(100)
  })

  it('should have all required fields', () => {
    for (const brand of motorcycleBrands) {
      expect(brand.name).toBeTruthy()
      expect(brand.country).toBeTruthy()
      expect(['motorcycle', 'both']).toContain(brand.type)
      expect(['active', 'inactive', 'defunct']).toContain(brand.status)
    }
  })
})

describe('allBrands', () => {
  it('should not have duplicate names', () => {
    const names = allBrands.map(b => b.name.toLowerCase())
    const unique = new Set(names)
    expect(unique.size).toBe(names.length)
  })
})

describe('filters', () => {
  it('brandsByCountry should filter correctly', () => {
    const japanese = brandsByCountry(allBrands, 'Japan')
    expect(japanese.length).toBeGreaterThan(5)
    expect(japanese.every(b => b.country === 'Japan')).toBe(true)
  })

  it('brandsByType should filter by vehicle type', () => {
    const cars = brandsByType(allBrands, 'car')
    expect(cars.every(b => b.type === 'car')).toBe(true)
  })

  it('activeBrands should return only active brands', () => {
    const active = activeBrands(allBrands)
    expect(active.every(b => b.status === 'active')).toBe(true)
  })

  it('searchBrands should find by name', () => {
    const results = searchBrands(allBrands, 'toyota')
    expect(results.length).toBeGreaterThan(0)
    expect(results[0].name.toLowerCase()).toContain('toyota')
  })

  it('getCountries should return unique countries', () => {
    const countries = getCountries(allBrands)
    expect(countries.length).toBeGreaterThan(10)
    expect(countries).toContain('Japan')
    expect(countries).toContain('Germany')
  })

  it('getGroups should return unique groups', () => {
    const groups = getGroups(allBrands)
    expect(groups.length).toBeGreaterThan(5)
    expect(groups).toContain('Toyota Group')
  })
})
