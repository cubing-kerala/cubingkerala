import React from "react"

export default function Error() {
    return (
      <div className="flex min-h-[50dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-md text-center">
            <p>401</p>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Unauthorized Access</h1>
            <p className="text-muted-foreground">You do not have permission to access this area.</p>
          </div>
        </div>
      </div>
    )
  }
  