import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

// criando os types do projeto com base no meu tema default
type ThemeType = typeof defaultTheme

// definido esse tyoes para o projeto
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
