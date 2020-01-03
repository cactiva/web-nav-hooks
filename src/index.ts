import * as hookrouter from 'hookrouter';
const nav = (): any => {
    return {
        navigate: (to: string) => {
            return hookrouter.navigate(to);
        },
        reset: (to: string) => {
            return hookrouter.navigate(to, true);
        },
        back: () => {
            window.history.back();
        }
    };
};
export const useNavigation = nav as any;
export const router = hookrouter;

