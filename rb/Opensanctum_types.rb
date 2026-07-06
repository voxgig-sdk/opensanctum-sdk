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
# @!attribute [rw] image_url
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
# @!attribute [rw] year_established
#   @return [Integer, nil]
Place = Struct.new(
  :description,
  :id,
  :image_url,
  :location,
  :name,
  :religion,
  :significance,
  :type,
  :website,
  :year_established,
  keyword_init: true
)

# Request payload for Place#list.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] image_url
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
# @!attribute [rw] year_established
#   @return [Integer, nil]
PlaceListMatch = Struct.new(
  :description,
  :id,
  :image_url,
  :location,
  :name,
  :religion,
  :significance,
  :type,
  :website,
  :year_established,
  keyword_init: true
)

# Tradition entity data model.
#
# @!attribute [rw] cultural_significance
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
# @!attribute [rw] observance
#   @return [Array, nil]
#
# @!attribute [rw] origin
#   @return [Hash, nil]
#
# @!attribute [rw] practice
#   @return [Array, nil]
#
# @!attribute [rw] religion
#   @return [String, nil]
Tradition = Struct.new(
  :cultural_significance,
  :description,
  :id,
  :name,
  :observance,
  :origin,
  :practice,
  :religion,
  keyword_init: true
)

# Request payload for Tradition#list.
#
# @!attribute [rw] cultural_significance
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
# @!attribute [rw] observance
#   @return [Array, nil]
#
# @!attribute [rw] origin
#   @return [Hash, nil]
#
# @!attribute [rw] practice
#   @return [Array, nil]
#
# @!attribute [rw] religion
#   @return [String, nil]
TraditionListMatch = Struct.new(
  :cultural_significance,
  :description,
  :id,
  :name,
  :observance,
  :origin,
  :practice,
  :religion,
  keyword_init: true
)

