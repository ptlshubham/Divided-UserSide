export class Address{
    constructor(
        public id ?: number,
        public userid?:string,
        public name ?:string,
        public contactnumber ?:number,
        public pincode ?:string,
        public locality ?:string,
        public address ?:string,
        public state ?:string,
        public landmark?:string,
        public alternativeno?:string,
        public createddate ?:Date,
        public updateddate?:Date,
        public selected?:boolean
        
     ) {
    }
}