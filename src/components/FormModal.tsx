import { Box, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import StyledButton from "../styledcomponents/Button";
import { StyledInput } from "../styledcomponents/Input";
import { StyledTextArea } from "../styledcomponents/TextArea";

export function FormModal() {

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const handleNameChange = (e: any) => setName(e.target.value)
    const handleMailChange = (e: any) => setMail(e.target.value)
    const handlePhoneChange = (e: any) => setPhone(e.target.value)
    const handleMessageChange = (e: any) => setMessage(e.target.value)
  

    return (
      <form action="">
      <FormControl isRequired marginTop='45px'>
      <StyledInput
        type='text'
        value={name}
        placeholder='Nome'
        onChange={handleNameChange}
      />
    </FormControl>
    <FormControl marginTop='10px' isRequired>
      <StyledInput
        type='email'
        value={mail}
        placeholder='Email'
        onChange={handleMailChange}
      />
    </FormControl>
    <FormControl marginTop='10px' isRequired>
      <StyledInput
        type='phone'
        value={phone}
        placeholder='Telefone'
        onChange={handlePhoneChange}
      />
    </FormControl>
    <FormControl marginTop='10px' isRequired>
      <StyledTextArea
        type='phone'
        value={phone}
        placeholder='Escreva sua mensagem:'
        onChange={handlePhoneChange}
      />
    </FormControl>
    <Box marginTop='10px' display='flex' justifyContent='flex-end'>
        <StyledButton type='submit'>
            ENVIAR
        </StyledButton>
    </Box>
    </form>
    
    )
}