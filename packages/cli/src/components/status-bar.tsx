import { TextAttributes } from "@opentui/core";

export default function StatusBar() {
    return (
        <box flexDirection="row" gap={1}>
            <text fg="cyan">Build</text>
            <text attributes={TextAttributes.DIM} fg="gray">
                {">"}
            </text>
            <text>GPT 5.4-Nano</text>
        </box>
    );
}