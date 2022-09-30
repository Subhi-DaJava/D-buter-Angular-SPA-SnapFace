export class FaceSnap {
    title!: string;
    description!: string;
    imageUrl!: string;
    createDate!: Date;
    snaps!: number;
    location?: string  // ? = optionel
}

/*
Angular vous permet d'ajouter des propriétés personnalisées à vos components
de manière à ce que vous puissiez les injecter depuis le component parent. Ce que ça vous permettrait de faire avec 
FaceSnapComponent, ce serait de faire en sorte que AppComponent centralise les données de plusieurs FaceSnaps,
génère une instance du component pour chaque FaceSnap, et injecte ce FaceSnap à cette instance.
un modèle de données
Cette classe comporte tout ce qu'il faut, et nous permet de générer des objets FaceSnap avec la syntaxe  new FaceSnap().
*/ 