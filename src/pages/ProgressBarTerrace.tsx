import { Progress, Text } from "@chakra-ui/react"

const ProgressBar = ({ value, label }: { value: string; label: string }) => {
    return (
        <div className="flex flex-col gap-2">
            <Text className="text-[#860A10] font-bold text-lg">{value}%</Text>
            <Text className="text-[#212121] font-medium">{label}</Text>
            <Progress value={Number(value)} />
        </div>
    )
}

export default ProgressBar