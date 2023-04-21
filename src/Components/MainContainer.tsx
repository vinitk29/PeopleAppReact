import React from "react";
import './index.css'
import { ResponseUrl } from "../appConfigs";
import { ICard } from "../Interfaces/ICard";
import { IPerson } from "../Interfaces/IPerson";
import Card from "./Card";

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
                    const cardProps: ICard = {
                        id: person.id,
                        name: person.name,
                        email: person.email,
                        website: person.website, 
                        phone: person.phone,
                    }
                    return (
                    <Card {...cardProps}/>
                )})
            }
        </div>
    )
}

export default MainContainer;