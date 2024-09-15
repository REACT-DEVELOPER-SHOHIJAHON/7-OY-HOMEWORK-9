import { Suspense } from "react"

const SuspenseComponent = ({children}) => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
        {children}
    </Suspense>
  )
}

export default SuspenseComponent