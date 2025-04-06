import axios from "axios";
import { API_BASE } from "../config";

export const getHabitaciones = async () => {
    try{
        const response = await axios.get(`${API_BASE}/habitaciones/ver-habitaciones`);
        return response.data;

    }catch(error){
        console.error("Error fetching habitaciones:", error);
        throw error;
    }
};