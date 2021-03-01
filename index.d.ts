export interface User {
    id: string;
    uid: string;
    rank: string;
    avatar: string;
    header: string;
    about: string;
    created: number;
    state: string;
    status: UserStatus;
}

export interface UserStatus {
    title: string;
    author?: string;
}

declare module "gizmo-api" {

    function getUser (query: string | number): Promise<User>;

}