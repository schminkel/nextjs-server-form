import { PublicError } from './errors'

// Closure to keep track of the number of calls
let callCount = 0

export async function triggerActionUseCase() {
  // Throw error on every second call
  callCount++
  if (callCount % 2 === 0) {
    throw new PublicError('Error triggering action (every second call)')
  }

  console.log(
    '### triggerActionUseCase --> action triggered successfully on server',
  )
}
