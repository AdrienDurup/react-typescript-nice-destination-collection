import { useState } from "react";
import { DestinationList } from "../contexts";
import hardCodedCards from '../components/List/data';

export const useDestination = ()=>{
    let mergedData:DestinationList=[];
    const storedString: string | null = localStorage.getItem('my-test-app');
    const storedCards: DestinationList = JSON.parse(storedString ? storedString : '[]');
    mergedData = [...hardCodedCards, ...storedCards];
    return useState<DestinationList>(mergedData);
}