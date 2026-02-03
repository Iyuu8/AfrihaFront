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
    Img?:LucideIcon // should be a string

}

// order type, again i supposed that this is the type
export interface OrderType {
    id:string,
    totalCost : string,
    invoiceId: string,
    createdAt:string,
    receivedAt:string,
    status:string

    // for the dashboard

    progress? : number 
    Img?: LucideIcon // should be a string

}

// type of supplier, again i supposed that this is the type
export interface SupplierType{
    name:string,
    email:string,
    phoneNumber:string
    orders: OrderType[],
    products : ProductType[]
    Img?:LucideIcon // should be a string


}

export interface Category {
    name:string,
    Img?:LucideIcon // should be a string
}

// the type of carousel items
export interface TypeCarouselItem {
  title: string;
  nb: number;
  Icon: LucideIcon;
  path: string;
  
};

// for the dashboard

export interface ItemStandard {
    Img?: LucideIcon, // should be a string
    name?:string,
    id? : string, 
    title? :string,
    createdAt?:string,
    brand?: string,
    phoneNumber?:string,
    progress? : number,
}