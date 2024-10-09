import { Stack } from "@chakra-ui/react"
import { Button } from "compositions/ui/button"

export const ButtonWithLoading = () => {
  return (
    <Stack direction="row" gap="4" align="center">
      <Button loading>Click me</Button>
      <Button loading loadingText="Saving...">
        Click me
      </Button>
    </Stack>
  )
}
