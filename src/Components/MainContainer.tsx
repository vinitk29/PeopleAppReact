import React from "react";
import './MainContainer.css'
import { PeopleResponseUrl } from "../appConfigs";
import { IPerson } from "../Interfaces/IPerson";
import PersonCard, { IPersonCardProps } from "./PersonCard";
import { useAppDispatch, useAppSelector } from "../Store/store";
import { addPeople, deletePerson } from "../Slices/peopleSlice";

const MainContainer = (): React.ReactElement => {
    const dispatch = useAppDispatch();
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(()=>{
        setIsLoading(true);
        fetch(PeopleResponseUrl)
        .then((response) =>{
            return response.json();
        }).then((data)=>{  
            dispatch(addPeople({people:data}));
            setIsLoading(false);
        })
    },[dispatch]);
    
    const onDeletePerson = React.useCallback((id:number) => {
        dispatch(deletePerson({id}));
    },[dispatch])
    const peopleState = useAppSelector(state=>state.people);

    if(isLoading) {
        return (
            <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
            </div>
        )
    }

    return (
        <div className="main-container">
            {
                peopleState.people.map((person:IPerson) => {
                    const cardProps: IPersonCardProps = {
                        id: person.id,
                        name: person.name,
                        email: person.email,
                        website: person.website, 
                        phone: person.phone,
                        username: person.username,
                        onDeletePerson
                    }
                    return (
                    <PersonCard key={person.id} {...cardProps}/>
                )})
            }
        </div>
    )
}

export default MainContainer;