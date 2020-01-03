"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const hookrouter = __importStar(require("hookrouter"));
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
exports.useNavigation = nav;
exports.router = hookrouter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdURBQXlDO0FBQ3pDLE1BQU0sR0FBRyxHQUFHLEdBQVEsRUFBRTtJQUNsQixPQUFPO1FBQ0gsUUFBUSxFQUFFLENBQUMsRUFBVSxFQUFFLEVBQUU7WUFDckIsT0FBTyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLENBQUM7UUFDRCxLQUFLLEVBQUUsQ0FBQyxFQUFVLEVBQUUsRUFBRTtZQUNsQixPQUFPLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFDRCxJQUFJLEVBQUUsR0FBRyxFQUFFO1lBQ1AsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMxQixDQUFDO0tBQ0osQ0FBQztBQUNOLENBQUMsQ0FBQztBQUNXLFFBQUEsYUFBYSxHQUFHLEdBQVUsQ0FBQztBQUMzQixRQUFBLE1BQU0sR0FBRyxVQUFVLENBQUMifQ==