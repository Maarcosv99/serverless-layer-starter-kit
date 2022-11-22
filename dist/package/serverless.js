"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const serverlessConfiguration = {
    service: 'layer-api-rest',
    frameworkVersion: '3',
    provider: {
        name: 'aws',
        runtime: 'nodejs14.x',
        region: 'sa-east-1',
        stage: '${opt:stage, "dev"}',
    },
    package: {
        individually: true,
        excludeDevDependencies: true
    },
    layers: {
        api_rest: {
            path: './dist/layer',
            name: 'api_rest',
            compatibleRuntimes: ['nodejs14.x']
        }
    }
};
module.exports = serverlessConfiguration;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVybGVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZlcmxlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxNQUFNLHVCQUF1QixHQUFRO0lBQ25DLE9BQU8sRUFBRSxnQkFBZ0I7SUFDekIsZ0JBQWdCLEVBQUUsR0FBRztJQUNyQixRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUUsS0FBSztRQUNYLE9BQU8sRUFBRSxZQUFZO1FBQ3JCLE1BQU0sRUFBRSxXQUFXO1FBQ25CLEtBQUssRUFBRSxxQkFBcUI7S0FDN0I7SUFDRCxPQUFPLEVBQUU7UUFDUCxZQUFZLEVBQUUsSUFBSTtRQUNsQixzQkFBc0IsRUFBRSxJQUFJO0tBQzdCO0lBQ0QsTUFBTSxFQUFFO1FBQ04sUUFBUSxFQUFFO1lBQ1IsSUFBSSxFQUFFLGNBQWM7WUFDcEIsSUFBSSxFQUFFLFVBQVU7WUFDaEIsa0JBQWtCLEVBQUUsQ0FBQyxZQUFZLENBQUM7U0FDbkM7S0FDRjtDQUNGLENBQUE7QUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHLHVCQUF1QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBBV1MgfSBmcm9tICdAc2VydmVybGVzcy90eXBlc2NyaXB0J1xyXG5cclxuY29uc3Qgc2VydmVybGVzc0NvbmZpZ3VyYXRpb246IEFXUyA9IHtcclxuICBzZXJ2aWNlOiAnbGF5ZXItYXBpLXJlc3QnLFxyXG4gIGZyYW1ld29ya1ZlcnNpb246ICczJyxcclxuICBwcm92aWRlcjoge1xyXG4gICAgbmFtZTogJ2F3cycsXHJcbiAgICBydW50aW1lOiAnbm9kZWpzMTQueCcsXHJcbiAgICByZWdpb246ICdzYS1lYXN0LTEnLFxyXG4gICAgc3RhZ2U6ICcke29wdDpzdGFnZSwgXCJkZXZcIn0nLFxyXG4gIH0sXHJcbiAgcGFja2FnZToge1xyXG4gICAgaW5kaXZpZHVhbGx5OiB0cnVlLFxyXG4gICAgZXhjbHVkZURldkRlcGVuZGVuY2llczogdHJ1ZVxyXG4gIH0sXHJcbiAgbGF5ZXJzOiB7XHJcbiAgICBhcGlfcmVzdDoge1xyXG4gICAgICBwYXRoOiAnLi9kaXN0L2xheWVyJyxcclxuICAgICAgbmFtZTogJ2FwaV9yZXN0JyxcclxuICAgICAgY29tcGF0aWJsZVJ1bnRpbWVzOiBbJ25vZGVqczE0LngnXVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBzZXJ2ZXJsZXNzQ29uZmlndXJhdGlvbiJdfQ==