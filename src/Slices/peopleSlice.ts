import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPerson } from '../Interfaces/IPerson';

interface PeopleState {
    people: IPerson[];
}

const initialState: PeopleState = {
    people:[]
};

const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        addPeople(state, action:PayloadAction<{people: IPerson[]}>) {
            state.people = action.payload.people;
        },
        deletePerson(state, action:PayloadAction<{id: number}>) {
            state.people.splice(state.people.findIndex((person) => person.id === action.payload.id), 1);
        }
    }
});

export const { addPeople, deletePerson } = peopleSlice.actions;
export default peopleSlice.reducer;