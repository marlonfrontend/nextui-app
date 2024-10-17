import { StyledAutocomplete } from './Autocomplete.styles'
import { AutocompleteProps } from './Autocomplete.types'

export const Autocomplete = ({ ...props }: AutocompleteProps) => {
  return <StyledAutocomplete {...props} />
}
