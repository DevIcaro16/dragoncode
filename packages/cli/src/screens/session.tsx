import { useLocation, useNavigate, useParams } from "react-router";
import { useTheme } from "../providers/theme";
import { useEffect } from "react";

export default function Session() {

    const { id } = useParams();

    return (
        <box flexGrow={1} padding={2} >
            <text>Session {id}</text>
        </box>
    );
}