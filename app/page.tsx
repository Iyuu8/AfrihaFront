import React from 'react'
import Carousel from '@/components/carousel'
import { ordersData,productsData,suppliersData,categoriesData } from '@/variables_functions'
import type { OrderType } from '@/types'
import DashBoardLive from '@/components/dashBoardLive'

export default function Dashboard() {
  return (
    <section className="flex overflow-y-auto flex-col gap-5 mb-5">
      <Carousel />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='flex flex-col gap-4'>
            <DashBoardLive<OrderType>  ordersData = {ordersData} progressBar = {true} path={"/orders"} title={"Live Orders"}/>  
            <DashBoardLive  ordersData = {suppliersData} progressBar = {false} path={"/products"} title={"Products"}/>  

        </div>
        <div className='flex flex-col gap-4'>
            <DashBoardLive  ordersData = {productsData} progressBar = {false} path={"/suppliers"} title={"Suppliers"}/>  
            <DashBoardLive  ordersData = {categoriesData} progressBar = {false} path={"/categories"} title={"Categories"}/>  
        </div>

      </div>

    </section>
  )
}
