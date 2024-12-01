import { DifficultyModes } from "../types"

export type TypingContextType = {
  setCurrentDifficulty: (difficulty: DifficultyModes) => void
  currentDifficulty: DifficultyModes
  toBeCopiedText: string
}