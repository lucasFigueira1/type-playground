import { createContext, useEffect, useState } from "react";
import { DifficultyModes } from "../types";
import { HARD_LEVEL_TEXT, MEDIUM_LEVEL_TEXT } from "../constants/texts";
import { EASY_LEVEL_TEXT } from "../constants/texts";
import { TypingContextType } from "./types";

export const TypingContext = createContext<TypingContextType | any>(null)

export const TypingContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentDifficulty, setCurrentDifficulty] = useState<DifficultyModes>('easy')
  const [toBeCopiedText, setToBeCopiedText] = useState<string>('')

  const handleChangeDifficulty = () => {
    if (currentDifficulty === 'easy') return setToBeCopiedText(EASY_LEVEL_TEXT)
    if (currentDifficulty === 'medium') return setToBeCopiedText(MEDIUM_LEVEL_TEXT)
    if (currentDifficulty === 'hard') return setToBeCopiedText(HARD_LEVEL_TEXT)
  }

  useEffect(() => {
    handleChangeDifficulty()
  }, [currentDifficulty])

  const values = {
    setCurrentDifficulty,
    currentDifficulty,
    toBeCopiedText
  }

  return (
    <TypingContext.Provider value={values}>
      {children}
    </TypingContext.Provider>
  )
}