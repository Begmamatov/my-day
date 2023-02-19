import { makeAutoObservable } from "mobx";

export class ProductStore {

    constructor() {
        makeAutoObservable(this)
    }

    oneProduct = {}

    setProduct = (product:any) => {
        this.oneProduct = product
    }

}