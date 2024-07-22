import { Box, Button, Checkbox, Input, Text } from "@chakra-ui/react"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from "zod"

const schema = z.object({
    email: z.string({
        required_error: 'Por favor, insira um e-mail válido.'
    }).email({
        message: 'Por favor, insira um e-mail válido.'
    }),
    policy: z.literal('on')
})

type NewsletterForm = z.infer<typeof schema>

const NewsletterForm = () => {

    const {
        handleSubmit,
        setValue,
        resetField,
        control,
        formState: { errors },
      } = useForm<NewsletterForm>({
        resolver: zodResolver(schema),
        mode: 'onChange',
      })

    const onSubmit = (data: NewsletterForm) => {
        const sendNewsletterSubscription = async () => {
            try {

            } catch (err) {

            }
        }

        sendNewsletterSubscription()
    }


    return (
        <Box className="bg-[#F5F5F5] p-6 lg:p-16 lg:px-12 lg:max-w-[500px] xl:max-w-[620px] mt-10 lg:mt-0">
            <Text as='h3' fontSize='2xl' color='#252525' marginBottom={6 }>ASSINE A NEWSLETTER</Text>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller 
                    control={control} 
                    name="email" 
                    render={({ field }) => (
                        <Box display='flex' flexDirection='column'>
                            <label htmlFor="email">E-mail</label>
                            <Input id='email' {...field} type="text" marginTop={3} marginBottom={2} placeholder="Insira seu e-mail aqui" backgroundColor={'#FFFFFF'} border={'none'} className="border-none p-4 rounded-lg text-[#00000] placeholder:text-sm" />
                            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </Box>
                    )} />

                    <Controller control={control} name="policy" render={({ field }) => <Checkbox className="mt-5" borderColor='#860A10' type="checkbox" id="policy" {...field} colorScheme="red" >Marque a caixa para concordar com a política de privacidade</Checkbox>} />

                    <Button width='100%' type="submit" marginTop={{ sm: 8, lg: 8 }} fontSize={{ md: 'sm', lg: 'md' }} backgroundColor='#860A10' color='#FFF' borderRadius='none' padding={{ md: 4, lg: 8 }} _hover={{ backgroundColor: '#860A1090' }}>Enviar</Button>
            </form>
        </Box>
    )
}

export default NewsletterForm