# Typed models for the Opensanctum SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Place(TypedDict, total=False):
    description: str
    id: str
    imageUrl: str
    location: dict
    name: str
    religion: str
    significance: str
    type: str
    website: str
    yearEstablished: int


class PlaceListMatch(TypedDict, total=False):
    country: str
    limit: int
    offset: int
    religion: str
    type: str


class Tradition(TypedDict, total=False):
    culturalSignificance: str
    description: str
    id: str
    name: str
    observances: list
    origin: dict
    practices: list
    religion: str


class TraditionListMatch(TypedDict, total=False):
    limit: int
    offset: int
    region: str
    religion: str
    search: str
