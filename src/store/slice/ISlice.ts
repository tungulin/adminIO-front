
export interface IDefaultSliceState {
    theme: string,
}

export interface IDatabaseSliceState {
    databases: {}[]
}

export interface IUserSliceState {
    isAuth: boolean,
    info: { firstName: string, lastName: string, country: string, brandId: number, avatar: string, role: string } | null
}



export interface ISlice {
    default: IDefaultSliceState,
    user: IUserSliceState
}