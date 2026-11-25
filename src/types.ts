export type VehicleType = 'car' | 'motorcycle' | 'truck' | 'both'

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

export interface TruckBrand extends Brand {
  type: 'truck' | 'both'
}
