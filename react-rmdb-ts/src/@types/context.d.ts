export interface IUser {
    sessionId: string;
    username: string
};

export type UserContextType = {
    state: IUser;
    setState: (newSession: IUser) => void;
};