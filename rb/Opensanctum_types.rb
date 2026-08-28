# frozen_string_literal: true

# Typed models for the Opensanctum SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Place entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] imageUrl
#   @return [String, nil]
#
# @!attribute [rw] location
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] religion
#   @return [String, nil]
#
# @!attribute [rw] significance
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
#
# @!attribute [rw] website
#   @return [String, nil]
#
# @!attribute [rw] yearEstablished
#   @return [Integer, nil]
Place = Struct.new(
  :description,
  :id,
  :imageUrl,
  :location,
  :name,
  :religion,
  :significance,
  :type,
  :website,
  :yearEstablished,
  keyword_init: true
)

# Request payload for Place#list.
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Integer, nil]
#
# @!attribute [rw] religion
#   @return [String, nil]
#
# @!attribute [rw] type
#   @return [String, nil]
PlaceListMatch = Struct.new(
  :country,
  :limit,
  :offset,
  :religion,
  :type,
  keyword_init: true
)

# Tradition entity data model.
#
# @!attribute [rw] culturalSignificance
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] observances
#   @return [Array, nil]
#
# @!attribute [rw] origin
#   @return [Hash, nil]
#
# @!attribute [rw] practices
#   @return [Array, nil]
#
# @!attribute [rw] religion
#   @return [String, nil]
Tradition = Struct.new(
  :culturalSignificance,
  :description,
  :id,
  :name,
  :observances,
  :origin,
  :practices,
  :religion,
  keyword_init: true
)

# Request payload for Tradition#list.
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] offset
#   @return [Integer, nil]
#
# @!attribute [rw] region
#   @return [String, nil]
#
# @!attribute [rw] religion
#   @return [String, nil]
#
# @!attribute [rw] search
#   @return [String, nil]
TraditionListMatch = Struct.new(
  :limit,
  :offset,
  :region,
  :religion,
  :search,
  keyword_init: true
)

