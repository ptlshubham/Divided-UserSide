export class RegisterUserModel {
    constructor(
        public firstname?: string,
        public middlename?: string,
        public lastname?: string,
        public email?: any,
        public password?: any,
        public dateofbirth?:any,
        public contactnumber?:number,
        public gender?:any,
        public createddate?:Date,
        public isactive?:boolean,
    ) {
    }
}