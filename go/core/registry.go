package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewPlaceEntityFunc func(client *OpensanctumSDK, entopts map[string]any) OpensanctumEntity

var NewTraditionEntityFunc func(client *OpensanctumSDK, entopts map[string]any) OpensanctumEntity

