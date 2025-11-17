export class Scale {
    scaleType: string;
    scaleTonic: string;
    scaleNotes: string[];

    constructor(scaleType: string, scaleTonic: string, scaleNotes: string[]) {
        this.scaleType = scaleType;
        this.scaleTonic = scaleTonic;
        this.scaleNotes = scaleNotes;
    }
}