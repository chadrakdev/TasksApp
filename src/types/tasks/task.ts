export type Task = {
    id: number,
    title: string,
    description: string,
    tags: string,
    dateAdded: Date,
    isCompleted: boolean,
    dateCompleted: Date,
    isRepeating: boolean,
    priority: number
}