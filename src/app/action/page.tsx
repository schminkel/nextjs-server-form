'use server'

import Link from 'next/link'
import { ArrowLeftIcon } from 'lucide-react'
import { ActionButton } from '@/app/action/action-button'

export default async function ActionPage() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-8 sm:ml-2">
      <Link
        href="/"
        className="mb-4 inline-flex items-center text-blue-500 hover:underline"
      >
        <ArrowLeftIcon className="mr-2 h-4 w-4" />
        <span>Back to Home</span>
      </Link>

      <h1 className="mb-4 text-2xl font-bold">Action Button</h1>

      <ActionButton />

      <div className="mt-6 space-y-4 text-xs text-muted-foreground">
        <p>Error will be thrown on every second call.</p>
      </div>
    </div>
  )
}
