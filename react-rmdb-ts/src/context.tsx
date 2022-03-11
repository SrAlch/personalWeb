import React, { useState, createContext } from "react";
import { IUser, UserContextType } from "./@types/context";


export const Context = createContext<UserContextType | undefined>(undefined);

const UserProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [state, setState] = useState<IUser>();

    return (
        <Context.Provider value={state?{state, setState}:undefined}>{children}</Context.Provider>
    )
};

export default UserProvider;