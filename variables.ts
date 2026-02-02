// for the icons bellow
import { LayoutDashboard , Package, TextAlignStart, Boxes , Package2 , ShoppingCart ,HandCoins , ShoppingBasket , DollarSign, NotepadText, CreditCard, BookText, Mail, X } from 'lucide-react'

// for the side bar
export const user = {name:"ayoub" , role:"admin"};
export const navItems = [
{name: "Dashboard",path: "/dashboard" , icon : LayoutDashboard , children:[]},
{name: "Products",path: "/products" , icon : Package , children:[
    {name: "Categories",path: "/products/categories" , icon : TextAlignStart},
    {name: "Variant",path: "/products/variant" , icon : Package2},
    {name: "Batch",path: "/products/batch" , icon : Boxes}
]},
{name: "Orders",path: "/orders" , icon : ShoppingCart , children:[
    {name: "Sales",path: "/orders/sales" , icon : HandCoins},
    {name: "Purchase",path: "/orders/purchase" , icon :ShoppingBasket },
]},
{name: "Payment",path: "/payment" , icon : DollarSign , children:[
    {name: "Invoice",path: "/payment/invoice" , icon : NotepadText},
    {name: "pay",path: "/payment/pay" , icon :CreditCard },
]},
{name: "Stock Movement",path: "/stock_movement" , icon : BookText , children:[]},
{name: "Messages",path: "/messages" , icon :  Mail, children:[]},

]