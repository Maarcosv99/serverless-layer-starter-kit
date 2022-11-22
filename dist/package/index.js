"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonResponse = void 0;
function JsonResponse(body, statusCode) {
    return {
        statusCode,
        body: JSON.stringify(body, null, 2)
    };
}
exports.JsonResponse = JsonResponse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsU0FBZ0IsWUFBWSxDQUFDLElBQXlCLEVBQUUsVUFBa0I7SUFDeEUsT0FBTztRQUNMLFVBQVU7UUFDVixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztLQUNwQyxDQUFBO0FBQ0gsQ0FBQztBQUxELG9DQUtDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIEpzb25SZXNwb25zZShib2R5OiBSZWNvcmQ8c3RyaW5nLCBhbnk+LCBzdGF0dXNDb2RlOiBudW1iZXIpIHtcclxuICByZXR1cm4ge1xyXG4gICAgc3RhdHVzQ29kZSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHksIG51bGwsIDIpXHJcbiAgfVxyXG59Il19