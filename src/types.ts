export type VehicleType = 'car' | 'motorcycle' | 'both'

export type BrandStatus = 'active' | 'inactive' | 'defunct'

export interface Brand {
  name: string
  type: VehicleType
  country: string
  status: BrandStatus
  group?: string
}

export interface CarBrand extends Brand {
  type: 'car' | 'both'
}

export interface MotorcycleBrand extends Brand {
  type: 'motorcycle' | 'both'
}
