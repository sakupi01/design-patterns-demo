import { useEffect, useState } from 'react'
import type { User } from '../../../types'

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/users').then(
        (res) => res.json()
      )
      setUsers(response)
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
    fetchUsers()
  }, [])

  return { users, isLoading, error, refetch: fetchUsers }
}
