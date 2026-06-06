type Props = {
    onSubmit: (value: string) => void;
    disabled?: boolean;
};

export default function InputBar({ onSubmit, disabled }: Props) {
    return (
        <box width="100%" padding={1} backgroundColor="#1E1E29" border borderColor="#3B82F6" borderStyle="rounded">

        </box>
    )
}