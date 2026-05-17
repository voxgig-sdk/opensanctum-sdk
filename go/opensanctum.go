package voxgigopensanctumsdk

import (
	"github.com/voxgig-sdk/opensanctum-sdk/go/core"
	"github.com/voxgig-sdk/opensanctum-sdk/go/entity"
	"github.com/voxgig-sdk/opensanctum-sdk/go/feature"
	_ "github.com/voxgig-sdk/opensanctum-sdk/go/utility"
)

// Type aliases preserve external API.
type OpensanctumSDK = core.OpensanctumSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type OpensanctumEntity = core.OpensanctumEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type OpensanctumError = core.OpensanctumError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewPlaceEntityFunc = func(client *core.OpensanctumSDK, entopts map[string]any) core.OpensanctumEntity {
		return entity.NewPlaceEntity(client, entopts)
	}
	core.NewTraditionEntityFunc = func(client *core.OpensanctumSDK, entopts map[string]any) core.OpensanctumEntity {
		return entity.NewTraditionEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewOpensanctumSDK = core.NewOpensanctumSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
