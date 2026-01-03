export interface RootState {
    system: {
        appId: string;
        texts: {
            [key: string]: string;
        };
        baseUrl: string;
    };
    auth: {
        token: string;
    };
}
export interface User{
    userId:string;
    username:string;
    phone:string;
    email:string;
    isActive:boolean;
    createdAt:number;
    updatedAt:number;
}