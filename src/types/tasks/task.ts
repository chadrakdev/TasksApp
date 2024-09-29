export interface TaskEntity {
    id: number;
    title: string;
    description: string;
    tags: string;
    dateAdded: Date;
    isCompleted: boolean;
    dateCompleted: Date;
    isRepeating: boolean;
    priority: number;
}

export type CreateTaskDTO = Omit<TaskEntity, 'dateCompleted'>;

export type UpdateTaskDTO = Partial<TaskEntity> & { id: number };
