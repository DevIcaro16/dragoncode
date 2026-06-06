// Paleta azul tematica do Dragon Code (degrade do azul-escuro ao azul-claro)
const BLUE = ["#1E3A8A", "#2563EB", "#3B82F6", "#60A5FA", "#93C5FD"];

export default function Header() {
    return (
        <box alignItems="center" justifyContent="center">
            <box
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                gap={1}
                paddingTop={1}
                paddingBottom={1}
                paddingLeft={4}
                paddingRight={4}
                border
                borderStyle="rounded"
                borderColor="#3B82F6"
                title=" 🐉 Dragon Code "
                titleAlignment="center"
            >
                <box flexDirection="row" alignItems="center" justifyContent="center" gap={1.5}>
                    <ascii-font font="tiny" text="Dragon" color={BLUE} />
                    <ascii-font font="tiny" text="Code" color="#60A5FA" />
                </box>

            </box>
        </box>
    );
}
