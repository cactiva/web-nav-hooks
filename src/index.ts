const nav = (): any => {
    return {
        navigate: (to: string) => {
            return to;
        },
        reset: (to: string) => {
            return to;
        },
        back: () => { }
    };
};

export const useNavigation = nav as any;

