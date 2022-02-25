import React from "react";
import { useState } from "react";
import { SetStateAction, Dispatch } from "react";

export const useModalContext = () => {
    const [modalDisplay, setModalDisplay] = useState(true);
    const [modalInner, setModalInner] = useState('DestinationForm');
    console.log("modalInner", modalInner);
    return {
        modalDisplay,
        setModalDisplay,
        modalInner,
        setModalInner
    }
}

export interface ModalContextI {
    modalDisplay:boolean,
    // modalInner:string,
    setModalDisplay: Dispatch<SetStateAction<boolean>> | undefined,
    setModalInner: Dispatch<SetStateAction<string>> | undefined,
}

const init: ModalContextI = { setModalDisplay: undefined, setModalInner: undefined, modalDisplay:false };

const Context = React.createContext(init);
// export const provider=context.Provider;
export default Context;