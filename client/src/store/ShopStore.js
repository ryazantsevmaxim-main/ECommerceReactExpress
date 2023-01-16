import {makeAutoObservable} from "mobx";

export default class ShopStore {
    constructor() {
        this._types = [];
        this._brands = [];
        this._devices = {};
        this._selectedTypeId = null;
        this._selectedBrandId = null;
        this._selectedPage = 1;

        makeAutoObservable(this);
    }

    get types() {
        return this._types;
    }

    get brands() {
        return this._brands;
    }

    get devices() {
        return this._devices;
    }

    get selectedTypeId() {
        return this._selectedTypeId;
    }

    get selectedBrandId() {
        return this._selectedBrandId;
    }

    get selectedPage() {
        return this._selectedPage;
    }

    setTypes(types) {
        this._types = types;
    }

    setBrands(brands) {
        this._brands = brands;
    }

    setDevices(devices) {
        this._devices = devices;
    }

    setSelectedTypeId(typeId) {
        this._selectedPage = 1;
        this._selectedTypeId = typeId;
    }

    setSelectedBrandId(brandId) {
        this._selectedPage = 1;
        this._selectedBrandId = brandId;
    }

    setSelectedPage(page) {
        this._selectedPage = page;
    }
}