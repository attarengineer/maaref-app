export class Blog {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public imageUrl: string,
        public tags: string[],
    ) {}
}