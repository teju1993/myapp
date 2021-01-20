export class EmpName {
    constructor(
        
        public UserName: string
    ) { }
}
 
export const Categories: Array<EmpName> = new Array<EmpName>();
Categories.push(new EmpName("Teju"));
Categories.push(new EmpName( "Nikhil"));
Categories.push(new EmpName( "Raj"));

