"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRef, useState } from "react"
import { DATA_JSON, findUsers } from "./backend"
import { cn } from "@/lib/utils"
import { Spinner } from "../components/custom/spinner"
import { customInputMask } from "./utils/input-mask"
import { QueryRender } from "@/components/custom/query-render"

export default function Home() {
  const [isLoading, setLoading] = useState(false)
  const [input, setInput] = useState({ email: "", number: "" })
  const [foundUsers, setFoundUsers] = useState<DATA_JSON[] | null>(null)
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null)

  // * Updating form input fields
  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.name === "number") {
      const formatted = customInputMask(e.target.value)
      setInput({ ...input, [e.target.name]: formatted })
    } else {
      setInput({ ...input, [e.target.name]: e.target.value })
    }
  }

  // * Handling form submission
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current)
    console.log(input)
    setLoading(true)
    timeoutIdRef.current = setTimeout(() => {
      findUsers(input).then((data) => setFoundUsers(data))
      setLoading(false)
    }, 5000)
    setInput({ email: "", number: "" })
  }

  function handleClear() {
    setInput({ email: "", number: "" })
    setFoundUsers(null)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Input
          onChange={handleInput}
          value={input.email}
          name="email"
          placeholder="something@gmail.com"
          required
          type="email"
        />

        <Input
          pattern="^\d{2}-\d{2}-\d{2}$"
          name="number"
          title="Example: 12-34-56 (6 digits)"
          placeholder="12-34-56"
          onChange={handleInput}
          value={input.number}
          autoComplete="off"
        />

        <div className="flex items-end justify-between">
          <Button type="submit" className="self-start">
            Submit
          </Button>

          <div className={cn("flex items-center text-muted-foreground", isLoading ? "" : "hidden")}>
            Loading... <Spinner />
          </div>

          <Button
            disabled={isLoading}
            onClick={handleClear}
            type="submit"
            variant={"destructive"}
            className="self-start"
          >
            Clear
          </Button>
        </div>
      </form>

      <QueryRender foundUsers={foundUsers} />
    </>
  )
}
