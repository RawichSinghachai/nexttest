import { createSlice } from "@reduxjs/toolkit";

const Topic = [
  {id:1,topic:'Phy'},
  {id:2,topic:'Math'},
  {id:3,topic:'Coding'},
  {id:4,topic:'Engineer'},
]


export const SubjectCardStore = createSlice({
    name:'SubjectCardStore',
    initialState:Topic,
    reducers:{

    }
})


export default SubjectCardStore.reducer