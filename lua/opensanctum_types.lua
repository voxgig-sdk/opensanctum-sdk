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
---@field imageUrl? string
---@field location? table
---@field name? string
---@field religion? string
---@field significance? string
---@field type? string
---@field website? string
---@field yearEstablished? number

---@class PlaceListMatch
---@field description? string
---@field id? string
---@field imageUrl? string
---@field location? table
---@field name? string
---@field religion? string
---@field significance? string
---@field type? string
---@field website? string
---@field yearEstablished? number

---@class Tradition
---@field culturalSignificance? string
---@field description? string
---@field id? string
---@field name? string
---@field observances? table
---@field origin? table
---@field practices? table
---@field religion? string

---@class TraditionListMatch
---@field culturalSignificance? string
---@field description? string
---@field id? string
---@field name? string
---@field observances? table
---@field origin? table
---@field practices? table
---@field religion? string

local M = {}

return M
