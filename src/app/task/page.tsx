'use server'

import Link from 'next/link'
import { ArrowLeftIcon } from 'lucide-react'

import { CreateTaskForm } from './create-task-form'

/**
 * @description
 * This is the task page.
 * It uses the createTaskFormAction server action to create a task.
 */
export default async function TaskPage() {
  return (
    <div className="container mx-auto max-w-2xl px-4 py-8 sm:ml-2">
      <Link
        href="/"
        className="mb-4 inline-flex items-center text-blue-500 hover:underline"
      >
        <ArrowLeftIcon className="mr-2 h-4 w-4" />
        <span>Back to Home</span>
      </Link>

      <h1 className="mb-4 text-2xl font-bold">Create New Task</h1>

      <CreateTaskForm />

      <div className="mt-12 space-y-4 text-xs text-muted-foreground">
        <p>
          <strong>Validation rule:</strong> The title must be at least 3
          characters long.
        </p>
        <p>
          <strong>Server Error:</strong> Enter <strong>{'err'}</strong> as the
          title to simulate a server-side error.
        </p>
      </div>
    </div>
  )
}
