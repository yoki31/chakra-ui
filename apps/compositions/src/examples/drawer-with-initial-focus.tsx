"use client"

import { Input, Stack } from "@chakra-ui/react"
import { Button } from "compositions/ui/button"
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "compositions/ui/drawer"
import { useRef } from "react"

export const DrawerWithInitialFocus = () => {
  const ref = useRef<HTMLInputElement>(null)
  return (
    <DrawerRoot initialFocusEl={() => ref.current}>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <Button variant="outline" size="sm">
          Open Drawer
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Drawer Title</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Stack mt="5">
            <Input defaultValue="Naruto" placeholder="First name" />
            <Input ref={ref} placeholder="Email" />
          </Stack>
        </DrawerBody>
        <DrawerFooter>
          <Button variant="outline">Cancel</Button>
          <Button>Save</Button>
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  )
}
