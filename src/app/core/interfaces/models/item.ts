export interface ItemsModel {
    name: string,
    img: string,
    price: number
}

export interface InitialStateItems {
    loading: boolean,
    itemsList: ReadonlyArray<ItemsModel>
}
