import { create } from "zustand";
import { persist } from "zustand/middleware";

type AppState = {
    games: string,
    blueName: string
    blueLogo: string
    orangeName: string
    orangeLogo: string
}

export type AppAction = {
    setGames: (newGames: string) => void  
    setBlueName: (newBlueName: string) => void
    setBlueLogo: (newBlueLogo: string) => void
    setOrangeName: (newOrangeName: string) => void
    setOrangeLogo: (newOrangeLogo: string) => void
}

export type AppStore = AppState & AppAction

export const useAppStore = create<AppStore>()(
    persist(
        (set) => ({
            games: "",
            blueName: "",
            blueLogo: "",
            orangeName: "",
            orangeLogo: "",
            setGames: (newGames) => set({ games: newGames}),
            setBlueName: (newBlueName) => set({ blueName: newBlueName}),
            setBlueLogo: (newBlueLogo) => set({ blueLogo: newBlueLogo}),
            setOrangeName: (newOrangeName) => set({ orangeName: newOrangeName}),
            setOrangeLogo: (newOrangeLogo) => set({ orangeLogo: newOrangeLogo})
        }),
        { name: "imput-storage" }
    )
)