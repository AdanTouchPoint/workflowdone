import { fetchData } from "./fetchData";
const fetchLeads = (
  successResponse,
  backendURLBase,
  endpoints,
  clientId,
  dataUser,
  emailData,questions
) => {
  fetchData(
    "POST",
    backendURLBase,
    endpoints.toSaveLeads,
    clientId,
    `&firstName=${dataUser.userName ? dataUser.userName : ""}&postalcode=${
      dataUser.postalCode ? dataUser.postalCode : dataUser.state
    }&emailData=${dataUser?.emailUser}&representative=${
      emailData?.name
    }&emailMessage=${JSON.stringify(questions)}&sended=${successResponse}&subject=${dataUser?.subject}&city=${dataUser?.state}&party=${emailData?.party}`
  );
};

const fetchAllLeads = async (petitionMethod,backendURLBase, endpoint, clientId, setLeads) => {
  const  leads = await fetchData(petitionMethod, backendURLBase, endpoint, clientId)
   const data = leads.data
   setLeads(data)
}

export {
   fetchLeads, fetchAllLeads
}