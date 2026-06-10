import type { ReactNode } from "react";
import Header from "../components/Header";
import InputBar from "../components/input-bar";
import { useTheme } from "../providers/theme";

type Props = {
    children: ReactNode;
};

export default function ThemedRoot({ children }: Props) {

    const { colors } = useTheme();

    return (
        <box
            backgroundColor={colors.background}
            width="100%"
            height="100%"
            flexGrow={1}
        >
            {children}
        </box>
    );
}