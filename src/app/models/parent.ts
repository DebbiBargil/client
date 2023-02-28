
import { Child } from "./child";



export class Parent {
    constructor(public ParentId: number,
        public FirstName: string,
        public LastName: string,
        public IdNumber: string,
        public maleOrFemale: string,
        public Hmo: string,
        public Children: Child[],
        public BirthDate: Date) {

    }
}