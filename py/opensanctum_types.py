# Typed models for the Opensanctum SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Place:
    description: Optional[str] = None
    id: Optional[str] = None
    image_url: Optional[str] = None
    location: Optional[dict] = None
    name: Optional[str] = None
    religion: Optional[str] = None
    significance: Optional[str] = None
    type: Optional[str] = None
    website: Optional[str] = None
    year_established: Optional[int] = None


@dataclass
class PlaceListMatch:
    description: Optional[str] = None
    id: Optional[str] = None
    image_url: Optional[str] = None
    location: Optional[dict] = None
    name: Optional[str] = None
    religion: Optional[str] = None
    significance: Optional[str] = None
    type: Optional[str] = None
    website: Optional[str] = None
    year_established: Optional[int] = None


@dataclass
class Tradition:
    cultural_significance: Optional[str] = None
    description: Optional[str] = None
    id: Optional[str] = None
    name: Optional[str] = None
    observance: Optional[list] = None
    origin: Optional[dict] = None
    practice: Optional[list] = None
    religion: Optional[str] = None


@dataclass
class TraditionListMatch:
    cultural_significance: Optional[str] = None
    description: Optional[str] = None
    id: Optional[str] = None
    name: Optional[str] = None
    observance: Optional[list] = None
    origin: Optional[dict] = None
    practice: Optional[list] = None
    religion: Optional[str] = None

