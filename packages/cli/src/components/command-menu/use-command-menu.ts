import type { ScrollBoxRenderable } from "@opentui/core";
import type { RefObject } from "react";
import React from "react";
import getFilteredCommands from "./filter-commands";
import type { Command } from "./types";
import { useKeyboard } from "@opentui/react";
import { useKeyboardLayer } from "../../providers/keyboard-layer";

type UseCommandMenuReturn = {
    showCommandMenu: boolean;
    commandQuery: string;
    selectedIndex: number;
    scrollRef: RefObject<ScrollBoxRenderable | null>;
    handleContentChange: (value: string) => void;
    resolveCommand: (index: number) => Command | undefined;
    setSelectedIndex: (index: number) => void;
};

export default function useCommandMenu(): UseCommandMenuReturn {

    const [textValue, setTextValue] = React.useState<string>("");
    const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
    const [showCommandMenu, setShowCommandMenu] = React.useState<boolean>(false);
    const scrollRef = React.useRef<ScrollBoxRenderable | null>(null);
    const { pop, push, isTopLayer } = useKeyboardLayer();

    const commandQuery = showCommandMenu && textValue.startsWith("/") ? textValue.slice(1) : "";

    const filteredCommands = React.useMemo(() => getFilteredCommands(commandQuery), [commandQuery]);

    const handleContentChange = (text: string) => {
        setTextValue(text);
        setSelectedIndex(0);
        const scrollBox = scrollRef.current;
        if (scrollBox) scrollBox.scrollTo(0);

        const prefix = text.startsWith("/") ? text.slice(1) : null;

        if (prefix !== null && !prefix.includes(" ")) {
            setShowCommandMenu(true);
            push("command", () => {
                setShowCommandMenu(false);
                pop("command");
                return true
            });
        } else {
            setShowCommandMenu(false);
            pop("command");
        }
    };

    const resolveCommand = (index: number): Command | undefined => {
        const cmd = filteredCommands[index];
        if (cmd) {
            setTextValue("");
            setShowCommandMenu(false);
            pop("command");
        }
        return cmd;
    }

    useKeyboard((key) => {

        if (!showCommandMenu && !isTopLayer("command")) return;

        if (key.name === "escape") {
            key.preventDefault();
            setShowCommandMenu(false);
            pop("command");
        } else if (key.name === "up") {
            key.preventDefault();
            setSelectedIndex((i: number) => {
                const nextIndex = Math.max(i - 1, 0);
                const sb = scrollRef.current;
                if (sb && nextIndex < sb.scrollTop) {
                    sb.scrollTo(nextIndex);
                }

                return nextIndex;
            });
        } else if (key.name === "down") {
            key.preventDefault();
            setSelectedIndex((i: number) => {
                if (filteredCommands.length === 0) {
                    return 0;
                }

                const newIndex = Math.min(i + 1, filteredCommands.length - 1);
                const sb = scrollRef.current;
                if (sb) {
                    const viewportHeight = sb.viewport.height;
                    const visibleEnd = sb.scrollTop + viewportHeight - 1;
                    if (newIndex > visibleEnd) {
                        sb.scrollTo(newIndex - viewportHeight + 1);
                    }
                }
                return newIndex;
            });
        }
    })

    return {
        showCommandMenu,
        commandQuery,
        selectedIndex,
        scrollRef,
        handleContentChange,
        resolveCommand,
        setSelectedIndex,
    };
}