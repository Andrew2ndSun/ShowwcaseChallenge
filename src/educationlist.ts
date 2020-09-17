export enum Degree { AS, BS, MS, PHD }

export type Education = { schoolName: String, degree: String, major: String, startYear: Number, endYear: Number, gpa: Number, description: String | undefined}
export class educationlist{
    private static education: Array<Education>  = []
    private static listeners: Array<Function> = []

    public static addEducation (education:Education){
        this.education.push(education)
        for (let l of this.listeners){
            l(education)
        }
    }

    public static getEducationList ():Array<Education>{
        return this.education
    }
    
    public static addListener(fun: Function) {
        this.listeners.push(fun);
    }
}
