import React, { useState, createContext, Dispatch } from "react";
import API from "./API";

// Types

type Prop = {
    children: React.ReactNode;
};

export interface IContextUser {
    sessionId: string;
    username: string;
};

export type ContextUserType = {
    sessions: IContextUser[];
    saveSession: (session: IContextUser) => void;
    updateSession: (sessionId: string) => void;
};

// TODO: make it work idk

export const Context = createContext<ContextUserType | undefined>(undefined);

const UserProvider:React.FC<Prop> = ({ children }) => {
    const [sessions, setSessions] = useState<IContextUser[]>([]);

    return (
        <Context.Provider value={[sessions, setSessions]}>{children}</Context.Provider>
    )
};

export default UserProvider;