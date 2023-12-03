import { useEffect, useState } from 'react'
import type { Product } from '../../../types'

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products').then(
        (res) => res.json()
      )
      setProducts(response)
    } catch (error) {
      if (error instanceof Error) {
        setError(error)
      } else {
        setError(new Error('Unknown Error'))
      }
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    fetchProducts()
  }, [])

  return { products, isLoading, error, refetch: fetchProducts }
}
