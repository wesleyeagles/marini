import { Box, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input } from "@chakra-ui/react";
import { useState } from "react";
import StyledButton from "../styledcomponents/Button";
import { StyledInput } from "../styledcomponents/Input";
import { StyledTextArea } from "../styledcomponents/TextArea";

export function FormModal({formAction, colorBg = false, empreendimento}: any) {

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const handleNameChange = (e: any) => setName(e.target.value)
    const handleMailChange = (e: any) => setMail(e.target.value)
    const handlePhoneChange = (e: any) => setPhone(e.target.value)
    const handleMessageChange = (e: any) => setMessage(e.target.value)
  

    return (
      <form action={formAction}>
        <input type="hidden" name="_email.template.title" value="Formulário de Contato" />
        <input type="hidden" name="_email.template.footer" value="false" />
        <input type="hidden" name="_email.from" value="Marini" />
        <input type="hidden" name="_email.subject" value={`Novo Contato! - Formulário - ${empreendimento}`} />
        <input type="hidden" name="_redirect" value='https://mariniconstrucoes.com.br' />
      <FormControl isRequired marginTop='45px'>
      <StyledInput
        type='text'
        value={name}
        name="Nome"
        placeholder='Nome'
        onChange={handleNameChange}
      />
    </FormControl>
    <FormControl marginTop='10px' isRequired>
      <StyledInput
        type='email'
        value={mail}
        name="Email"
        placeholder='Email'
        onChange={handleMailChange}
      />
    </FormControl>
    <FormControl marginTop='10px' isRequired>
      <StyledInput
        type='phone'
        name="Telefone"
        value={phone}
        placeholder='Telefone'
        onChange={handlePhoneChange}
      />
    </FormControl>
    <FormControl marginTop='10px' isRequired>
      <StyledTextArea
        type='text'
        name="Mensagem"
        value={message}
        placeholder='Escreva sua mensagem:'
        onChange={handleMessageChange}
      />
    </FormControl>
    <Box marginTop='10px' display='flex' justifyContent='flex-end'>
        <StyledButton terrace={colorBg} type='submit'>
            ENVIAR
        </StyledButton>
    </Box>
    </form>
    
    )
}