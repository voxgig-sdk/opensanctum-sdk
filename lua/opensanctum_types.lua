-- Typed models for the Opensanctum SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Place
---@field description? string
---@field id? string
---@field image_url? string
---@field location? table
---@field name? string
---@field religion? string
---@field significance? string
---@field type? string
---@field website? string
---@field year_established? number

---@class PlaceListMatch
---@field description? string
---@field id? string
---@field image_url? string
---@field location? table
---@field name? string
---@field religion? string
---@field significance? string
---@field type? string
---@field website? string
---@field year_established? number

---@class Tradition
---@field cultural_significance? string
---@field description? string
---@field id? string
---@field name? string
---@field observance? table
---@field origin? table
---@field practice? table
---@field religion? string

---@class TraditionListMatch
---@field cultural_significance? string
---@field description? string
---@field id? string
---@field name? string
---@field observance? table
---@field origin? table
---@field practice? table
---@field religion? string

local M = {}

return M
