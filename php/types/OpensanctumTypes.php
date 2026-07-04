<?php
declare(strict_types=1);

// Typed models for the Opensanctum SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Place entity data model. */
class Place
{
    public ?string $description = null;
    public ?string $id = null;
    public ?string $image_url = null;
    public ?array $location = null;
    public ?string $name = null;
    public ?string $religion = null;
    public ?string $significance = null;
    public ?string $type = null;
    public ?string $website = null;
    public ?int $year_established = null;
}

/** Match filter for Place#list (any subset of Place fields). */
class PlaceListMatch
{
    public ?string $description = null;
    public ?string $id = null;
    public ?string $image_url = null;
    public ?array $location = null;
    public ?string $name = null;
    public ?string $religion = null;
    public ?string $significance = null;
    public ?string $type = null;
    public ?string $website = null;
    public ?int $year_established = null;
}

/** Tradition entity data model. */
class Tradition
{
    public ?string $cultural_significance = null;
    public ?string $description = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?array $observance = null;
    public ?array $origin = null;
    public ?array $practice = null;
    public ?string $religion = null;
}

/** Match filter for Tradition#list (any subset of Tradition fields). */
class TraditionListMatch
{
    public ?string $cultural_significance = null;
    public ?string $description = null;
    public ?string $id = null;
    public ?string $name = null;
    public ?array $observance = null;
    public ?array $origin = null;
    public ?array $practice = null;
    public ?string $religion = null;
}

