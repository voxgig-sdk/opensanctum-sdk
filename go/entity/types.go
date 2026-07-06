// Typed models for the Opensanctum SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Place is the typed data model for the place entity.
type Place struct {
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	ImageUrl *string `json:"image_url,omitempty"`
	Location *map[string]any `json:"location,omitempty"`
	Name *string `json:"name,omitempty"`
	Religion *string `json:"religion,omitempty"`
	Significance *string `json:"significance,omitempty"`
	Type *string `json:"type,omitempty"`
	Website *string `json:"website,omitempty"`
	YearEstablished *int `json:"year_established,omitempty"`
}

// PlaceListMatch is the typed request payload for Place.ListTyped.
type PlaceListMatch struct {
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	ImageUrl *string `json:"image_url,omitempty"`
	Location *map[string]any `json:"location,omitempty"`
	Name *string `json:"name,omitempty"`
	Religion *string `json:"religion,omitempty"`
	Significance *string `json:"significance,omitempty"`
	Type *string `json:"type,omitempty"`
	Website *string `json:"website,omitempty"`
	YearEstablished *int `json:"year_established,omitempty"`
}

// Tradition is the typed data model for the tradition entity.
type Tradition struct {
	CulturalSignificance *string `json:"cultural_significance,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Observance *[]any `json:"observance,omitempty"`
	Origin *map[string]any `json:"origin,omitempty"`
	Practice *[]any `json:"practice,omitempty"`
	Religion *string `json:"religion,omitempty"`
}

// TraditionListMatch is the typed request payload for Tradition.ListTyped.
type TraditionListMatch struct {
	CulturalSignificance *string `json:"cultural_significance,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Observance *[]any `json:"observance,omitempty"`
	Origin *map[string]any `json:"origin,omitempty"`
	Practice *[]any `json:"practice,omitempty"`
	Religion *string `json:"religion,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
