"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hookrouter_1 = __importDefault(require("hookrouter"));
const nav = () => {
    return {
        navigate: (to) => {
            return hookrouter_1.default.navigate(to);
        },
        reset: (to) => {
            return hookrouter_1.default.navigate(to, true);
        },
        back: () => {
            window.history.back();
        }
    };
};
exports.useNavigation = nav;
exports.router = hookrouter_1.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSw0REFBb0M7QUFDcEMsTUFBTSxHQUFHLEdBQUcsR0FBUSxFQUFFO0lBQ2xCLE9BQU87UUFDSCxRQUFRLEVBQUUsQ0FBQyxFQUFVLEVBQUUsRUFBRTtZQUNyQixPQUFPLG9CQUFVLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25DLENBQUM7UUFDRCxLQUFLLEVBQUUsQ0FBQyxFQUFVLEVBQUUsRUFBRTtZQUNsQixPQUFPLG9CQUFVLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QyxDQUFDO1FBQ0QsSUFBSSxFQUFFLEdBQUcsRUFBRTtZQUNQLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUIsQ0FBQztLQUNKLENBQUM7QUFDTixDQUFDLENBQUM7QUFDVyxRQUFBLGFBQWEsR0FBRyxHQUFVLENBQUM7QUFDM0IsUUFBQSxNQUFNLEdBQUcsb0JBQVUsQ0FBQyJ9