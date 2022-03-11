import { useState } from "react";
import { IUser } from "../@types/context";
import Context from "./context";


const UserProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [state, setState] = useState<IUser>({
        sessionId:"",
        username:""
    });

    return (
        <Context.Provider value={state?{state, setState}:undefined}>{children}</Context.Provider>
    )
};

export default UserProvider;