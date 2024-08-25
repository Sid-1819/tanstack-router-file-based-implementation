import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/profile')({
  component: () => <div>Hello!  This is profile page!</div>
})