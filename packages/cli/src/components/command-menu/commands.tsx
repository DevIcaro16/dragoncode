import { ThemeDialogContent } from "../dialogs/theme-dialog";
import type { Command } from "./types";

export const COMMANDS: Command[] = [
    {
        name: "new",
        description: "Start a new conversation",
        value: "/new",
        action: (ctx) => {
            ctx.toast.show({
                message: "Starting new conversation...",
                variant: "info",
                duration: 1000
            });
        }
    },
    {
        name: "agents",
        description: "Switch agents",
        value: "/agents",
        action: (ctx) => {
            ctx.dialog.open({
                title: "Select Mode",
                children: <text>Agent selection coming soon....</text>
            });
        }
    },
    {
        name: "models",
        description: "Select AI Model for generation",
        value: "/models",
        action: (ctx) => {
            ctx.toast.show({
                message: "Select an AI model for generation...",
                variant: "info",
                duration: 1000
            });
        }
    },
    {
        name: "sessions",
        description: "Browse past sessions",
        value: "/sessions",
        action: (ctx) => {
            ctx.toast.show({
                message: "Browsing past sessions...",
                variant: "info",
                duration: 1000
            });
        }
    },
    {
        name: "theme",
        description: "Change color theme",
        value: "/theme",
        action: (ctx) => {
            ctx.dialog.open({
                title: "Select Theme",
                children: <ThemeDialogContent />
            });
        }
    },
    {
        name: "login",
        description: "Sign in with your browser",
        value: "/login",
        action: (ctx) => {
            ctx.toast.show({
                message: "Opening your browser to sign in...",
                variant: "info",
                duration: 1000
            });
        }
    },
    {
        name: "logout",
        description: "Sign out of your account",
        value: "/logout",
        action: (ctx) => {
            ctx.toast.show({
                message: "Signing out of your account...",
                variant: "info",
                duration: 1000
            });
        }
    },
    {
        name: "upgrade",
        description: "Buy more credits",
        value: "/upgrade",
        action: (ctx) => {
            ctx.toast.show({
                message: "Opening checkout to buy more credits...",
                variant: "info",
                duration: 1000
            });
        }
    },
    {
        name: "usage",
        description: "Open billing portal in your browser",
        value: "/usage",
        action: (ctx) => {
            ctx.toast.show({
                message: "Opening billing portal in your browser...",
                variant: "info",
                duration: 1000
            });
        }
    },
    {
        name: "exit",
        description: "Quit the application",
        value: "/exit",
        action: (ctx) => {
            ctx.exit();
        }
    },
    {
        name: "clear",
        description: "Clear the conversation history",
        value: "/clear",
        action: (ctx) => {
            ctx.toast.show({
                message: "Conversation history cleared",
                variant: "success",
                duration: 1000
            });
        }
    }
];
