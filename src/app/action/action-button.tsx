'use client'

import { LoaderButton } from '@/components/loader-button'
import { btnIconStyles } from '@/styles/icons'
import { StarsIcon, Terminal } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useServerAction } from 'zsa-react'
import { toast } from 'sonner'
import { triggerServerAction } from '@/app/action/actions'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

export function ActionButton() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const { execute, error, isPending } = useServerAction(triggerServerAction, {
    onSuccess: () => {
      toast.success('Action triggered successfully!')
      setTimeout(() => {
        setIsSubmitting(false)
        router.push('/')
      }, 1000)
    },
    onError: () => {
      toast.error(`Something went wrong: ${error?.message}`)
      setTimeout(() => {
        setIsSubmitting(false)
      }, 300)
    },
  })

  return (
    <>
      <LoaderButton
        isLoading={isSubmitting || isPending}
        icon={<StarsIcon className={btnIconStyles} />}
        onClick={() => {
          setIsSubmitting(true)
          execute()
        }}
      >
        Trigger Server Action
      </LoaderButton>

      {error && (
        <Alert variant="destructive" className="mt-4">
          <Terminal className="h-4 w-4" />
          <AlertTitle className="mt-1">An error occurred!</AlertTitle>
          <AlertDescription className="mt-2">{error.message}</AlertDescription>
        </Alert>
      )}
    </>
  )
}
