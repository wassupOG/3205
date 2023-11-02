import { DATA_JSON } from "@/app/backend"
import { Card } from "../ui/card"

type QueryRenderProps = {
  foundUsers: DATA_JSON[] | null
}

export function QueryRender({ foundUsers }: QueryRenderProps) {
  return (
    <div className="mt-10 flex flex-col gap-3">
      {foundUsers ? (
        <Card className="p-6">
          {foundUsers.length ? (
            foundUsers.map((user, index) => (
              // * Using 'index' as 'key' since we don't mutate the rendered elements
              <div key={index}>
                <div className="flex flex-col gap-2">
                  <div>
                    <strong>Email:</strong> {user.email}
                  </div>
                  <div>
                    <strong>Number:</strong> {user.number}
                  </div>
                </div>
                {index !== foundUsers.length - 1 && <hr className="my-3" />}
              </div>
            ))
          ) : (
            <h1 className="text-center text-red-400">There are no results for your query</h1>
          )}
        </Card>
      ) : (
        <h1 className="text-center text-muted-foreground">Type your query in the form above</h1>
      )}
    </div>
  )
}
