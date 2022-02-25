
//React
import React, { Dispatch, SetStateAction } from "react";
//interface
import {Destination} from "../model";

export type DestinationList=  Array<Destination | null>

export interface DestinationContextI {
  destinationList?:DestinationList,
  setDestinationList?:Dispatch<SetStateAction<DestinationList>>,
}

// export const DestinationCtxt_init: DestinationContextType = [];
export const DestinationCtxt = React.createContext<DestinationContextI>({});