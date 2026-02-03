// for the icons bellow
import { LayoutDashboard , Package, TextAlignStart, Boxes , Package2 , ShoppingCart ,HandCoins , ShoppingBasket , DollarSign, NotepadText, CreditCard, BookText, Mail, X, Users , Tags, Truck, ShoppingBag, ArrowLeftRight, User , Book, CircuitBoard, Ham , Armchair, Mouse , Apple, Sofa} from 'lucide-react'
import type { ProductType, SupplierType , OrderType, TypeCarouselItem,Category  } from './types';

// for the side bar
export const user = {name:"ayoub" , role:"admin"};
export const navItems = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard, children: [] },
  {
    name: "Products",
    path: "/products",
    icon: Package,
    children: [
      { name: "Categories", path: "/products/categories", icon: TextAlignStart },
      { name: "Variant", path: "/products/variant", icon: Package2 },
      { name: "Batch", path: "/products/batch", icon: Boxes },
    ],
  },
  {
    name: "Orders",
    path: "/orders",
    icon: ShoppingCart,
    children: [
      { name: "Sales", path: "/orders/sales", icon: HandCoins },
      { name: "Purchase", path: "/orders/purchase", icon: ShoppingBasket },
    ],
  },
  { name: "Suppliers", path: "/suppliers", icon: Users, children: [] },
  {
    name: "Payment",
    path: "/payment",
    icon: DollarSign,
    children: [
      { name: "Invoice", path: "/payment/invoice", icon: NotepadText },
      { name: "Pay", path: "/payment/pay", icon: CreditCard },
    ],
  },
  { name: "Stock Movement", path: "/stock_movement", icon: BookText, children: [] },
  { name: "Messages", path: "/messages", icon: Mail, children: [] }
];

// search functions , 

export const searchProducts = async (query: string): Promise<ProductType[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    {
      brand: "FreshFarm",
      category: "Vegetables",
      title: "Tomatoes",
      description: "Fresh organic tomatoes",
      stock: 120,
      unit: 1,
      cost: 0.3,
      sell: 0.5,
      isPerishable: true,
      isActive: true,
    },
    {
      brand: "GoldenGrain",
      category: "Cereals",
      title: "Rice",
      description: "Long-grain white rice",
      stock: 300,
      unit: 1,
      cost: 0.8,
      sell: 1.2,
      isPerishable: false,
      isActive: true,
    },
    {
      brand: "DairyPure",
      category: "Dairy",
      title: "Milk 1L",
      description: "Pasteurized whole milk",
      stock: 80,
      unit: 1,
      cost: 0.6,
      sell: 0.9,
      isPerishable: true,
      isActive: true,
    },
    {
      brand: "SweetCo",
      category: "Snacks",
      title: "Chocolate Bar",
      description: "Dark chocolate 70%",
      stock: 200,
      unit: 1,
      cost: 0.4,
      sell: 0.75,
      isPerishable: false,
      isActive: true,
    },
    {
      brand: "CleanHome",
      category: "Household",
      title: "Dish Soap",
      description: "Lemon-scented dishwashing liquid",
      stock: 60,
      unit: 1,
      cost: 1.1,
      sell: 1.8,
      isPerishable: false,
      isActive: false,
    },
  ];
};

export const searchSuppliers = async (query: string): Promise<SupplierType[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    {
      name: "FreshFarm Suppliers",
      email: "contact@freshfarm.com",
      phoneNumber: "+213-555-123-456",
      orders: [
        {
          id: "ORD-001",
          totalCost: "450.00",
          invoiceId: "INV-1001",
          createdAt: "2025-01-10",
          receivedAt: "2025-01-12",
          status: "received",
        },
        {
          id: "ORD-002",
          totalCost: "320.50",
          invoiceId: "INV-1002",
          createdAt: "2025-01-18",
          receivedAt: "2025-01-20",
          status: "pending",
        },
      ],
      products: [
        {
          brand: "FreshFarm",
          category: "Vegetables",
          title: "Potatoes",
          description: "High quality potatoes",
          stock: 500,
          unit: 1,
          cost: 0.2,
          sell: 0.35,
          isPerishable: true,
          isActive: true,
        },
      ],
    },
    {
      name: "GoldenGrain Distributors",
      email: "sales@goldengrain.com",
      phoneNumber: "+213-555-987-654",
      orders: [
        {
          id: "ORD-003",
          totalCost: "780.00",
          invoiceId: "INV-2001",
          createdAt: "2025-02-01",
          receivedAt: "2025-02-04",
          status: "received",
        },
      ],
      products: [
        {
          brand: "GoldenGrain",
          category: "Cereals",
          title: "Wheat Flour",
          description: "Refined wheat flour",
          stock: 250,
          unit: 1,
          cost: 0.7,
          sell: 1.1,
          isPerishable: false,
          isActive: true,
        },
      ],
    },
  ];
};

export const searchOrders = async (query: string): Promise<OrderType[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mock data
  const orders: OrderType[] = [
    {
      id: "ORD-001",
      totalCost: "450.00",
      invoiceId: "INV-1001",
      createdAt: "2025-01-10",
      receivedAt: "2025-01-12",
      status: "received",
    },
    {
      id: "ORD-002",
      totalCost: "320.50",
      invoiceId: "INV-1002",
      createdAt: "2025-01-18",
      receivedAt: "2025-01-20",
      status: "pending",
    },
    {
      id: "ORD-003",
      totalCost: "780.00",
      invoiceId: "INV-2001",
      createdAt: "2025-02-01",
      receivedAt: "2025-02-04",
      status: "received",
    },
    {
      id: "ORD-004",
      totalCost: "150.00",
      invoiceId: "INV-2002",
      createdAt: "2025-02-05",
      receivedAt: "2025-02-06",
      status: "pending",
    },
    {
      id: "ORD-005",
      totalCost: "600.00",
      invoiceId: "INV-3001",
      createdAt: "2025-03-01",
      receivedAt: "2025-03-05",
      status: "received",
    },
  ];

  return orders;
};


// for the Dashboard's carousel
export const carouselData: TypeCarouselItem[] = [
  {
    title: "Total Products",
    nb: 1,
    Icon: Package,
    path: "/products"
  },
  {
    title: "Categories",
    nb: 9,
    Icon: Tags,
    path: "/products/categories"
  },
  {
    title: "Suppliers",
    nb: 4,
    Icon: Truck,
    path: "/suppliers"
  },
  {
    title: "Purchase Orders",
    nb: 0,
    Icon: ShoppingCart,
    path: "/orders/purchase"
  },
  {
    title: "Sales Orders",
    nb: 0,
    Icon: ShoppingBag,
    path: "/orders/sales"
  },
  {
    title: "Revenue",
    nb: 24500,
    Icon: ArrowLeftRight,
    path: "/stock_movement"
  }
];

// for the dashboard: current live orders
export const ordersData : OrderType[] = [
  {
    id: "ORD-2024-001",
    totalCost: "$1,245.50",
    invoiceId: "INV-2024-001",
    createdAt: "2024-01-15T10:30:00Z",
    receivedAt: "2024-01-20T14:45:00Z",
    status: "Delivered",
    progress: 100,
    Img : User
  },
  {
    id: "ORD-2024-002",
    totalCost: "$890.25",
    invoiceId: "INV-2024-002",
    createdAt: "2024-01-18T09:15:00Z",
    receivedAt: "2024-01-22T11:20:00Z",
    status: "In Transit",
    progress: 65,
    Img : User
  },
  {
    id: "ORD-2024-003",
    totalCost: "$2,350.00",
    invoiceId: "INV-2024-003",
    createdAt: "2024-01-20T13:00:00Z",
    receivedAt: "2024-01-25T16:30:00Z",
    status: "Processing",
    progress: 30,
    Img : User
  },
]

export const productsData: ProductType[] = [
  {
    brand: "TechPro",
    category: "Electronics",
    title: "Wireless Mouse",
    description: "Ergonomic wireless mouse with USB receiver",
    stock: 150,
    unit: 1,
    cost: 12.50,
    sell: 24.99,
    isPerishable: false,
    isActive: true,
    Img: Mouse
  },
  {
    brand: "FreshFarm",
    category: "Food",
    title: "Organic Apples",
    description: "Fresh organic apples from local farms",
    stock: 200,
    unit: 5,
    cost: 2.00,
    sell: 4.99,
    isPerishable: true,
    isActive: true,
    Img: Apple
  },
  {
    brand: "HomeComfort",
    category: "Furniture",
    title: "Office Chair",
    description: "Adjustable ergonomic office chair with lumbar support",
    stock: 45,
    unit: 1,
    cost: 89.00,
    sell: 179.99,
    isPerishable: false,
    isActive: true,
    Img: Armchair
  }
]

export const suppliersData: SupplierType[] = [
  {
    name: "TechSupply Inc.",
    email: "contact@techsupply.com",
    phoneNumber: "+1-555-0101",
    orders: [ordersData[0]], // Reference to first order
    products: [productsData[0]], // Reference to first product
    Img: Users
  },
  {
    name: "Fresh Foods Distributor",
    email: "orders@freshfoods.com",
    phoneNumber: "+1-555-0202",
    orders: [ordersData[1]], // Reference to second order
    products: [productsData[1]], // Reference to second product
    Img: Users
  },
  {
    name: "Furniture Wholesale Co.",
    email: "sales@furniturewholesale.com",
    phoneNumber: "+1-555-0303",
    orders: [ordersData[2]], // Reference to third order
    products: [productsData[2]], // Reference to third product
    Img: Users
  }
]

export const categoriesData: Category[] = [
  {
    name: "Electronics",
    Img: CircuitBoard
  },
  {
    name: "Food",
    Img: Ham
  },
  {
    name: "Furniture",
    Img: Sofa
  },
]