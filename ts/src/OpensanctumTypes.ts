// Typed models for the Opensanctum SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Place {
  description?: string
  id?: string
  image_url?: string
  location?: Record<string, any>
  name?: string
  religion?: string
  significance?: string
  type?: string
  website?: string
  year_established?: number
}

export interface PlaceListMatch {
  description?: string
  id?: string
  image_url?: string
  location?: Record<string, any>
  name?: string
  religion?: string
  significance?: string
  type?: string
  website?: string
  year_established?: number
}

export interface Tradition {
  cultural_significance?: string
  description?: string
  id?: string
  name?: string
  observance?: any[]
  origin?: Record<string, any>
  practice?: any[]
  religion?: string
}

export interface TraditionListMatch {
  cultural_significance?: string
  description?: string
  id?: string
  name?: string
  observance?: any[]
  origin?: Record<string, any>
  practice?: any[]
  religion?: string
}

