import hookrouter from 'hookrouter';
const nav = () => {
    return {
        navigate: (to) => {
            return hookrouter.navigate(to);
        },
        reset: (to) => {
            return hookrouter.navigate(to, true);
        },
        back: () => {
            window.history.back();
        }
    };
};
export const useNavigation = nav;
export const router = hookrouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxVQUFVLE1BQU0sWUFBWSxDQUFDO0FBQ3BDLE1BQU0sR0FBRyxHQUFHLEdBQVEsRUFBRTtJQUNsQixPQUFPO1FBQ0gsUUFBUSxFQUFFLENBQUMsRUFBVSxFQUFFLEVBQUU7WUFDckIsT0FBTyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLENBQUM7UUFDRCxLQUFLLEVBQUUsQ0FBQyxFQUFVLEVBQUUsRUFBRTtZQUNsQixPQUFPLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFDRCxJQUFJLEVBQUUsR0FBRyxFQUFFO1lBQ1AsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxQixDQUFDO0tBQ0osQ0FBQztBQUNOLENBQUMsQ0FBQztBQUNGLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxHQUFVLENBQUM7QUFDeEMsTUFBTSxDQUFDLE1BQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyJ9