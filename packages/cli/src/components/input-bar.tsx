import type { KeyBinding, TextareaRenderable } from "@opentui/core";
import { EmptyBorder } from "./border";
import StatusBar from "./status-bar";
import { CommandMenu } from "./command-menu";
import React, { useCallback } from "react";
import { useRenderer } from "@opentui/react";
import { resolve } from "bun";
import useCommandMenu from "./command-menu/use-command-menu";
import type { Command } from "./command-menu/types";

type Props = {
    onSubmit: (value: string) => void;
    disabled?: boolean;
};

export const TEXTAREA_KEYS_BINDINGS: KeyBinding[] = [
    { name: "return", action: "submit" },
    { name: "enter", action: "submit" },
    { name: "return", shift: true, action: "newline" },
    { name: "enter", shift: true, action: "newline" },
];

export default function InputBar({ onSubmit, disabled }: Props) {

    const textareaRef = React.useRef<TextareaRenderable>(null);
    const onSubmitRef = React.useRef<() => void>(() => { });
    const renderer = useRenderer();

    const {
        showCommandMenu,
        commandQuery,
        selectedIndex,
        scrollRef,
        handleContentChange,
        resolveCommand,
        setSelectedIndex,
    } = useCommandMenu();

    const handleCommandExecute = useCallback((index: number) => {
        const command = resolveCommand(index);
        handleCommand(command);
    }, []);

    const handleTextareaContentChange = useCallback(() => {
        const textarea = textareaRef.current;
        if (!textarea) return;
        handleContentChange(textarea.plainText)
    }, []);

    const handleCommand = useCallback((command: Command | undefined) => {

        const textarea = textareaRef.current;
        if (!textarea || !command) return;
        textarea.setText("");
        if (command.action) {
            command.action({
                exit: () => renderer.destroy()
            });
        } else {
            textarea.insertText(command.value + " ");
        }

    }, [renderer]);

    const handleSubmit = useCallback(() => {

        if (disabled) return;

        const textarea = textareaRef.current;
        if (!textarea) return;

        const text = textarea.plainText.trim();
        if (text.length === 0) return;

        onSubmit(text);
        textarea.setText("");

    }, [disabled, onSubmit]);

    React.useEffect(() => {
        const textarea = textareaRef.current;
        if (!textarea) return;

        textarea.onSubmit = () => {
            onSubmitRef.current();
        };
    }, []);

    onSubmitRef.current = () => {

        if (disabled) return;
        if (showCommandMenu) {
            const command = resolveCommand(selectedIndex);
            handleCommand(command);
            return;
        }

        handleSubmit();
    }

    return (
        <box width="100%" alignItems="center">
            <box
                width="100%"
                border={["left"]}
                borderColor="cyan"
                customBorderChars={{
                    ...EmptyBorder,
                    vertical: "▌",
                    bottomLeft: "▌",
                }}
                backgroundColor="#1A1A24"
                paddingX={2}
                paddingY={1}
                gap={1}
            >

                {showCommandMenu && (
                    <box
                        position="absolute"
                        bottom="100%"
                        left={0}
                        width="100%"
                        backgroundColor="#1A1A24"
                        zIndex={10}
                    >
                        <CommandMenu
                            query={commandQuery}
                            selectedIndex={selectedIndex}
                            scrollRef={scrollRef}
                            onSelect={setSelectedIndex}
                            onExecute={handleCommandExecute}
                        />
                    </box >
                )}

                <textarea
                    ref={textareaRef}
                    keyBindings={TEXTAREA_KEYS_BINDINGS}
                    onContentChange={handleTextareaContentChange}
                    focused={!disabled}
                    placeholder={`Ask anything... "Fix a bug in my code", "Write a function that does X"`}
                    wrapMode="word"
                />
                <StatusBar />
            </box>
        </box>
    )
}
