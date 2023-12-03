import { CardsSkeleton, ListSkeleton } from '@/ui/skeletons'

export interface InjectingProps {
  isLoading: boolean
  error: Error | null
  whichSkelton: 'card' | 'list'
}

export function withFetchingState<T>(Component: React.ComponentType<T>) {
  return ({
    isLoading,
    error,
    whichSkelton,
    data,
  }: {
    isLoading: InjectingProps['isLoading']
    error: InjectingProps['error']
    whichSkelton: InjectingProps['whichSkelton']
    data: T
  }) => {
    if (isLoading) {
      switch (whichSkelton) {
        case 'card':
          return <CardsSkeleton />
        case 'list':
          return <ListSkeleton />
        default:
          return <ListSkeleton />
      }
    }
    if (error) return <p>Sorry, data could not be fetched.🥲</p>
    if (!data) return <p> No data was found.☹️</p>
    return <Component {...data} />
  }
}
