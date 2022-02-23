import React from "react";
import { SetStateAction, Dispatch } from "react";
export interface ModalContextI{
    setModalDisplay:Dispatch<SetStateAction<boolean>>|undefined,
    setModalInner:Dispatch<SetStateAction<string>>|undefined,
}
const init:ModalContextI={setModalDisplay:undefined,setModalInner:undefined};
const Context=React.createContext(init);
// export const provider=context.Provider;
export default Context;