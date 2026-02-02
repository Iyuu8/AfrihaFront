import React from 'react'
import { searchProducts,searchSuppliers, searchOrders} from '@/variables_functions';
import { Section } from '@/components/section';

export default async function SearchPage({searchParams} : {searchParams: {query? : string}}) {
  const query = searchParams.query?.trim();
  if(!query) return (<p>type something to search</p>);

  const [products, suppliers , orders] = await Promise.all([
    searchProducts(query),
    searchSuppliers(query),
    searchOrders(query)
  ])

  return (
    <>
      <h1>Search results for “{query}”</h1>

      {products.length > 0 && (
        <Section title="Products" data={products} />
      )}

      {suppliers.length > 0 && (
        <Section title="suppliers" data={suppliers} />
      )}

      {orders.length > 0 && (
        <Section title="orders" data={orders} />
      )}

      {products.length+suppliers.length+orders.length===0 &&
        <h1>no matching results</h1>
      }
    </>
  )
}
