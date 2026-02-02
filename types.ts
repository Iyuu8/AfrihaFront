import { LucideIcon } from "lucide-react"

export interface userType { // temporary type
    role:string,
    name:string
}

export interface TypeNavPath {
    name:string,
    path : string,
    icon : LucideIcon
}

export interface TypeNavPathContainer extends TypeNavPath {
    children : TypeNavPath[];
}

// type of product
export interface ProductType { // i for the time being i supposed that this is the structure
    brand: string,
    category: string,
    title:string,
    description: string,
    stock: number,
    unit: number,
    cost: number,
    sell: number,
    isPerishable: boolean,
    isActive: boolean,
}

// order type, again i supposed that this is the type
export interface OrderType {
    id:string,
    totalCost : string,
    invoiceId: string,
    createdAt:string,
    receivedAt:string,
    status:string
}

// type of supplier, again i supposed that this is the type
export interface SupplierType{
    name:string,
    email:string,
    phoneNumber:string
    orders: OrderType[],
    products : ProductType[]
}

