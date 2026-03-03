import { useEffect, useState } from 'react'

export function usePublicFileExists(path: string): boolean {
  const [exists, setExists] = useState(false)

  useEffect(() => {
    let isMounted = true

    const verify = async () => {
      try {
        const response = await fetch(path, { method: 'HEAD' })
        if (isMounted) {
          setExists(response.ok)
        }
      } catch {
        if (isMounted) {
          setExists(false)
        }
      }
    }

    void verify()

    return () => {
      isMounted = false
    }
  }, [path])

  return exists
}
