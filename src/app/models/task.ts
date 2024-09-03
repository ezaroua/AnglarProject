export class Task {
    id: number;  // Identifiant unique
    etat: TaskStat;
    description: string;
    titre: string;
    creationDate: Date;

    constructor(id: number, etat: TaskStat, description: string, titre: string) {
        this.id = id;  // Initialisation de l'identifiant
        this.description = description;
        this.titre = titre;
        this.etat = etat;
        this.creationDate = new Date();
    }
}

export enum TaskStat {
    EN_COURS = 'EN_COURS', 
    A_FAIRE = 'A_FAIRE',
    TERMINEE = 'TERMINEE'
}
