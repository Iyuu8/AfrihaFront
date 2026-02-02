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