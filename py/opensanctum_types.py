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
    image_url: str
    location: dict
    name: str
    religion: str
    significance: str
    type: str
    website: str
    year_established: int


class PlaceListMatch(TypedDict, total=False):
    description: str
    id: str
    image_url: str
    location: dict
    name: str
    religion: str
    significance: str
    type: str
    website: str
    year_established: int


class Tradition(TypedDict, total=False):
    cultural_significance: str
    description: str
    id: str
    name: str
    observance: list
    origin: dict
    practice: list
    religion: str


class TraditionListMatch(TypedDict, total=False):
    cultural_significance: str
    description: str
    id: str
    name: str
    observance: list
    origin: dict
    practice: list
    religion: str
