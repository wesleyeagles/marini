import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure } from "@chakra-ui/react"
import { useRef } from "react"
import { NavLink } from "../styledcomponents/Typograph"

export function DrawerMenu({isDrawerOpen, Close}: any) {
    const { isOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure()
    const btnRef = useRef<any>()
  
    return (
      <>
        <Drawer
          isOpen={isDrawerOpen}
          placement='right'
          onClose={Close}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton  />
            <DrawerBody>
              <Box>
                <NavLink>
                    Página Inicial
                </NavLink>
              </Box>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onDrawerClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    )
  }