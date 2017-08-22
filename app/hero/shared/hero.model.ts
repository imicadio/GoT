export interface IHero {
    id: number,
    name: string,
    opis: string,
    imageUrl: string
    enemy: IEnemy[],
    friends: IFriends[]
}

export interface IEnemy {
    id: number,
    name: string,
    opis: string,
    imageUrl: string
}

export interface IFriends {
    id: number,
    name: string,
    opis: string,
    imageUrl: string
}