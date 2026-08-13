// Typed models for the Opensanctum SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Place {
  description?: string
  id?: string
  imageUrl?: string
  location?: Record<string, any>
  name?: string
  religion?: string
  significance?: string
  type?: string
  website?: string
  yearEstablished?: number
}

export interface PlaceListMatch {
  description?: string
  id?: string
  imageUrl?: string
  location?: Record<string, any>
  name?: string
  religion?: string
  significance?: string
  type?: string
  website?: string
  yearEstablished?: number
}

export interface Tradition {
  culturalSignificance?: string
  description?: string
  id?: string
  name?: string
  observances?: any[]
  origin?: Record<string, any>
  practices?: any[]
  religion?: string
}

export interface TraditionListMatch {
  culturalSignificance?: string
  description?: string
  id?: string
  name?: string
  observances?: any[]
  origin?: Record<string, any>
  practices?: any[]
  religion?: string
}

