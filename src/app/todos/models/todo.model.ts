export class Todo {
    public _id: number;
    public text: string;
    public completed: boolean;
     

    constructor(text: string ){
        this.text = text; 
        this.completed = false;
        this._id = new Date().getTime();
    }

}