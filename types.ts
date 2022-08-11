export type UserContactInfo = {
    name: string
    email: string
}

export type UserInfoOutcomeError = ["error", Error]
export type UserInfoOutcomeSuccess = [
    "success",
    {name: string; email: string}
]

export type UserInfoOutcome = 
    | UserInfoOutcomeError
    | UserInfoOutcomeSuccess

export type SpecialDate = Date & {getReason(): string}