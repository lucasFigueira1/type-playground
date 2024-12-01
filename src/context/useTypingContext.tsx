import { useContext } from "react"
import { TypingContext } from "./TypingContext"
import { TypingContextType } from "./types"

export const useTypingContext = (): TypingContextType => {
  const context = useContext(TypingContext)
  if (context === null) {
    throw new Error('useTypingContext must be used within a TypingContextProvider')
  }
  return context
}