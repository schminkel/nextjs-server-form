import { Button, ButtonProps } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { ReactNode } from 'react'

interface LoaderButtonProps extends ButtonProps {
  isLoading: boolean
  icon: ReactNode
  children: ReactNode
}

export function LoaderButton({
  isLoading,
  icon,
  children,
  ...props
}: LoaderButtonProps) {
  return (
    <Button disabled={isLoading} {...props}>
      {isLoading ? (
        <Loader2 className="mr-1 h-4 w-4 animate-spin" />
      ) : (
        <span className="mr-1">{icon}</span>
      )}
      {children}
    </Button>
  )
}
