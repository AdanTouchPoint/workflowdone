import { fetchData } from "./fetchData";

const fetchRepresentatives = async (petitionMethod, backendURLBase, endpoint, clientId, params,setMp, setSenator, setShowLoadSpin, setShowList,sendMany,setAllDataIn) => {
    const datos = await fetchData(petitionMethod, backendURLBase, endpoint, clientId, params) 
    console.log(datos.data.flat())
    setMp(datos.data.flat());
    setSenator(datos.MLC)
    setShowLoadSpin(false)
    setShowList(false)

}


export{
    fetchRepresentatives
}
