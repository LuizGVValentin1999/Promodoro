import { ThemeProvider } from "styled-components";
import { useState } from 'react'
import { Button } from './components/Button'

import { defaultTheme } from "./styles/themes/default";

export function App() {
  const [count, setCount] = useState(0)

  return (
  <ThemeProvider theme={defaultTheme}>
    <Button variant="primary" />
    <Button variant="secondary" />
    <Button variant="success" />
    <Button variant="danger" />
    <Button />
  </ThemeProvider>
  )
}
