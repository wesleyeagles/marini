import { Box, Button, Input, Textarea } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";

type ContactForm = z.infer<typeof schema>

const schema = z.object({
    name: z.string({
        required_error: 'Por favor, insira seu nome.'
    }),
    email: z.string({
        required_error: 'Por favor, insira um e-mail válido.'
    }).email({
        message: 'Por favor, insira um e-mail válido.'
    }),
    phone: z.string({
        required_error: 'Por favor, insira seu telefone.'
    }),
    message: z.string({
        required_error: 'Por favor, insira sua mensagem.'
    }),
})

export default function ContactForm() {

    const [isSending, setIsSending] = useState(false)

    const {
        handleSubmit,
        resetField,
        control,
        formState: { errors },
    } = useForm<ContactForm>({
        resolver: zodResolver(schema),
        mode: 'onChange',
    })

    const onSubmit = (data: ContactForm) => {

        const sendContactForm = async () => {
            setIsSending(true)
            
            console.log(data)

            toast.loading('Enviando formulário...', {
                isLoading: isSending,
                theme: 'colored',
                autoClose: 4000
            })

            setTimeout(() => {
                setIsSending(false)

                toast.success('Formulário enviado com sucesso!', {
                    isLoading: false,
                    theme: 'colored',
                    autoClose: 3500
                })
            }, 4000)
        }

        sendContactForm()
    }


    return (
        <Box className="bg-white w-full md:w-[500px] p-10">
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset disabled={isSending} className="flex flex-col gap-8">
                    <Controller
                        control={control}
                        name="name"
                        render={({ field }) => (
                            <Box display='flex' flexDirection='column'>
                                <label htmlFor="name">Nome</label>
                                <Input id='name' {...field} type="text" marginTop={3} marginBottom={2} placeholder="Insira seu nome" backgroundColor={'#FFFFFF'} className="border-none p-4 py-5 rounded-lg text-[#00000] placeholder:text-sm" />
                                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                            </Box>
                        )} />

                    <Controller
                        control={control}
                        name="email"
                        render={({ field }) => (
                            <Box display='flex' flexDirection='column'>
                                <label htmlFor="email">E-mail</label>
                                <Input id='email' {...field} type="text" marginTop={3} marginBottom={2} placeholder="Insira seu email" backgroundColor={'#FFFFFF'} className="border-none p-4 py-5 rounded-lg text-[#00000] placeholder:text-sm" />
                                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                            </Box>
                        )} />


                    <Controller
                        control={control}
                        name="phone"
                        render={({ field }) => (
                            <Box display='flex' flexDirection='column'>
                                <label htmlFor="phone">Telefone</label>
                                <Input id='phone' {...field} type="text" marginTop={3} marginBottom={2} placeholder="Insira seu telefone" backgroundColor={'#FFFFFF'} className="border-none p-4 py-5 rounded-lg text-[#00000] placeholder:text-sm" />
                                {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                            </Box>
                        )} />

                    <Controller
                        control={control}
                        name="message"
                        render={({ field }) => (
                            <Box display='flex' flexDirection='column'>
                                <label htmlFor="message">Mensagem</label>
                                <Textarea size='lg' id='message' {...field} marginTop={3} marginBottom={2} placeholder="Insira sua mensagem" backgroundColor={'#FFFFFF'} className="border-none p-4 py-5 rounded-lg text-[#00000] placeholder:text-sm" />
                                {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                            </Box>
                        )} />

                    <Box className="flex justify-end">
                        <Button type="submit" fontSize={{ md: 'sm', lg: 'md' }} disabled={isSending} backgroundColor='#860A10' color='#FFF' borderRadius='none' padding={{ md: 4, lg: 8 }} _hover={{ backgroundColor: '#860A1090' }}>ENVIAR</Button>
                    </Box>
                </fieldset>
            </form>
        </Box>
    )
}