import { create } from "zustand";
const UserDetails = create((set) => ({
    user:null,
    login:(userData)=>set({user:userData}),
}));
export default UserDetails;