export const errorFieldMap:Record<string,string> = {
    INVALID_PASSWORD: "password",
    EMAIL_NOT_FOUND: "email",
    USERNAME_ALREADY_EXISTS: "username",
    EMAIL_ALREADY_EXISTS: "email",
    
} as const;
export type ErrorCode=keyof typeof errorFieldMap;
export type fieldName=typeof errorFieldMap[ErrorCode];