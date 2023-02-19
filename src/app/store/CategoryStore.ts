import { makeAutoObservable, runInAction } from "mobx";

type Category = {
    id: number,
    name: string
}

export class CategoryStore {

    constructor() {
        makeAutoObservable
    }

    categories: Category = {
        id: 0,
        name: ''
    }

    setCategories = (categories: Category) => {
        runInAction(() => {
            this.categories = categories
        })
    }
}