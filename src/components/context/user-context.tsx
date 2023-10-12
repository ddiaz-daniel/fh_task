"use client";
import { UserData } from '@/types/types';
import { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for the context
type UserSelectionContextType = {
    selectedUser: UserData | null;
    setSelectedUser: (user: UserData | null) => void;
};

const UserSelectionContext = createContext<UserSelectionContextType | undefined>(undefined);

export function UserSelectionProvider({ children }: { children: ReactNode; }) {
    const [selectedUser, setSelectedUser] = useState<UserData | null>(null);

    return (
        <UserSelectionContext.Provider value={{ selectedUser, setSelectedUser }}>
            {children}
        </UserSelectionContext.Provider>
    );
}

export function useUserSelection() {
    const context = useContext(UserSelectionContext);
    if (context === undefined) {
        throw new Error('useUserSelection must be used within a UserSelectionProvider');
    }
    return context;
}
