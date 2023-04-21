import React from "react";
import './MainContainer.css'
import { ResponseUrl } from "../appConfigs";
import { IPerson } from "../Interfaces/IPerson";
import PersonCard, { IPersonCardProps } from "./PersonCard";

const MainContainer = (): React.ReactElement => {
    const [people,setPeople] = React.useState([]);

    const fetchData =()=>{
        fetch(ResponseUrl)
        .then((response) =>{
            return response.json();
        }).then((data)=>{
            let res = data;
            console.log(res);
            setPeople(res)
        })
    }

    React.useEffect(()=>{
        fetchData();
    },[]);

    return (
        <div className="container">
            {
                people.map((person:IPerson) => {
                    const cardProps: IPersonCardProps = {
                        id: person.id,
                        name: person.name,
                        email: person.email,
                        website: person.website, 
                        phone: person.phone,
                    }
                    return (
                    <PersonCard {...cardProps}/>
                )})
            }
        </div>
    )
}

export default MainContainer;