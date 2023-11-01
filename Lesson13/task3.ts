/**
3. Напишите анотации типов к этому классу.
export class ObjectManipulator {

    constructor(protected obj) {}

    public set(key, value) {
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    public get(key) {
        return this.obj[key];
    }

    public delete(key) {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject() {
        return this.obj;
    }
}
 */
export class ObjectManipulator {

    constructor(protected obj: object) {}

    public set(key: string, value: any): object {
        return new ObjectManipulator({...this.obj, [key]: value});
    }

    public get(key: string): any {
        return this.obj[key];
    }

    public delete(key: string): object {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject(): object {
        return this.obj;
    }
}