
export interface IDefaultSliceState {
    theme: string,
}

export interface IDatabaseSliceState {
    databases: {}[]
}



export interface ISlice {
    default: IDefaultSliceState
}