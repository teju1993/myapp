export class UserList {
    constructor(
        public UserId: number,
        public UserName: string,
        public Qualification: string
    ) { }
}
 
export const Products: Array<UserList> = new Array<UserList>();
Products.push(new UserList(101, "Teju", "M.sc"));
Products.push(new UserList(102, "Nikhil", "B.E"));
Products.push(new UserList(103, "Raj", "M.A"));
Products.push(new UserList(104, "Teju", "B.E"));
Products.push(new UserList(105, "Nikhil", "M.sc"));
Products.push(new UserList(106, "Raj", "B.sc"));

