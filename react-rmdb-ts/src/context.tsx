import React, { useState, createContext, Dispatch, SetStateAction } from "react";

// Types

type Prop = {
    children: React.ReactNode;
};

export const Context = createContext();

const UserProvider = ({ children }: Prop) => {
    const [state, setState] = useState(undefined);

    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    )
};

export default UserProvider;