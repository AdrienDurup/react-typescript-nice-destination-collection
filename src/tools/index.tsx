import { BaseObject } from "../model";
import { Destination } from "../model";

export function formDataToInstance<C extends BaseObject>(formData: FormData,MyClass:{new(obj:Object):C}, prefix: string | null = null):C {

    let obj: BaseObject={} ;
    for (let [key, val] of Array.from(formData.entries())) {
        /* if prefix is defined we use it to split-join key name */
        key = prefix ? key.split(prefix).join('') : key;
        console.log("key", key);
        const value = val.toString();
        obj[key] = value;
    };

return new MyClass(obj);
}
