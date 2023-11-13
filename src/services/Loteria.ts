import { LoteriaProps } from "../types";
import api from "./api";

class Loteria{
    async get():Promise<LoteriaProps>{
        const {data} = await api.get("/");
        console.log(data);
        return data;
    }
}

const loteria = new Loteria();
export default loteria;