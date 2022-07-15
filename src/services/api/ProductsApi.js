import {request} from "./request";

export const ProductsApi = {
    getProducts() {
        return request.get("/products/")
    }
}