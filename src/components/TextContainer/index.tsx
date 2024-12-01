import { useEffect, useState } from "react"
import './styles.css'
import { IGNORE_KEYS } from "../../constants/ignoredkeys"
import { useTypingContext } from "../../context/useTypingContext"

const TextContainer = () => {
  const [userTypedText, setUserTypedText] = useState('')
  const { toBeCopiedText } = useTypingContext()
  const [prevKey, setPrevKey] = useState<KeyboardEvent['key']>()

  /**
   * Handles the backspace key
   */
  function handleBackspace(): void {
    setUserTypedText((prev) => prev.slice(0, -1));
  }

  /**
   * Removes the last word from the user's text
   */
  function removeLastWord(): void {
    setUserTypedText((prev) => {
      let formattedText = prev.trim().split(' ')
      formattedText.pop()
      return formattedText.join(' ')
    })
  }

  /**
   * Handles the key down event
   * @param {KeyboardEvent} event - The keyboard event
   */
  function handleKeyDown(event: KeyboardEvent) {
    if (prevKey === 'Control' && event.key === 'Backspace') return removeLastWord();

    setPrevKey(event.key);

    if (event.key === 'Backspace') return handleBackspace();

    if (!IGNORE_KEYS.includes(event.key)) {
      setUserTypedText((prev) => prev + event.key);
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [prevKey]);

  return (
    <main className="text-container-container">
      <div className="sample-text-container">
        <div className="text-style">
          {[...toBeCopiedText].map((char, index) => {
            const isCorrect = userTypedText[index] === char;
            const isTyped = index < userTypedText.length;
            const color = isCorrect ? "#f5f5f5" : isTyped ? "red" : "gray";
            const isLastChar = index === userTypedText.length - 1;

            return (
              <span key={index} style={{ color, position: 'relative' }}>
                {char}
                {isLastChar && <span className="last-char-bar" />}
              </span>
            );
          })}
        </div>
      </div>
    </main>
  )
}

export default TextContainer