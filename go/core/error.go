package core

type OpensanctumError struct {
	IsOpensanctumError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewOpensanctumError(code string, msg string, ctx *Context) *OpensanctumError {
	return &OpensanctumError{
		IsOpensanctumError: true,
		Sdk:              "Opensanctum",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *OpensanctumError) Error() string {
	return e.Msg
}
