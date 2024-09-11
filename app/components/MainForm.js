"use client";
import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/cjs/Button";
import Alert from "react-bootstrap/Alert";
import List from "./List";
import EmailForm from "./EmailForm";
import ThankYou from "./ThankYou";
import Card from "react-bootstrap/cjs/Card";
import Image from "next/image";
import { animateScroll as scroll } from "react-scroll";
import { fetchRepresentatives } from "../assets/petitions/fetchRepresentatives";
import TAC from "./TAC";
import vicsImage from "../assets/images/VICS-premier.png"
import nswImage from "../assets/images/NSW-premier.png"
import saImage from "../assets/images/SA-premier.png"
import ArrowBlack from "./ArrowBlack";
import Link from "next/link";
const MainForm = ({
  dataUser,
  setDataUser,
  mp,
  setMp,
  setEmailData,
  emailData,
  clientId,
  states,
  tweet,
  typData,
  mainData,
  backendURLBase,
  endpoints,
  backendURLBaseServices,
  senator,
  setSenator,
  setDataQuestions,
  dataQuestions,
  questions,
  setQuestions,
  configurations,
  allDataIn,
  setAllDataIn,
  setShowFindForm,
  showFindForm,
  hideMain,
  setHideMain,
}) => {
  const [showLoadSpin, setShowLoadSpin] = useState(false);
  const [showList, setShowList] = useState(true);
  const [showEmailForm, setShowEmailForm] = useState(true);
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState(false);
  const [showThankYou, setShowThankYou] = useState(true);
  const [tac, setTac] = useState(false);
  const [showTAC, setShowTAC] = useState(false);
  const [hideInstructions,setHideInstructions]= useState(false)
  const { formFields } = mainData;
  const handleTerms = (e) => {
    e.preventDefault;
    console.log("here");
    if (e.target.checked === true) {
      setTac(true);
    } else {
      setTac(false);
    }
  };
  const premierImageControler = (state) => {
    switch (state) {
      case 'vics':
          return (
            <Image src={vicsImage} alt="Victoria's Premier" className="mps-image"/>
          )        
        break;
        case 'sas':
          return (
            <Image src={saImage} alt="South Australia Premier" className="mps-image"/>
          )        
        break;
        case 'nsws':
          return (
            <Image src={nswImage} alt="New South Wale's Premier" className="mps-image"/>
          )        
        break;
      
    }
  } 
  const handleChange = (e) => {
    e.preventDefault();
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
  };
  const isValidEmail = (email) => {
    if (!email) {
      return false;
    }
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email.trim());
  };
  console.log(typeof states);
  const click = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (
      !isValidEmail(dataUser.emailUser) ||
      tac === false ||
      form.checkValidity() === false ||
      Object.getOwnPropertyNames(dataUser).length === 0 ||
      dataUser.postalCode === undefined ||
      dataUser.emailUser === undefined
    ) {
      e.preventDefault();
      e.stopPropagation();
      setError(true);
      return;
    }
    setShowLoadSpin(true);
    setError(false);
    fetchRepresentatives(
      "GET",
      backendURLBase,
      endpoints.toGetRepresentativesPerStates,
      clientId,
      `&state=${states}&postcode=${dataUser.postalCode}`,
      setMp,
      setSenator,
      setShowLoadSpin,
      setShowList
    ).catch((error) => console.log("error", error));
    scroll.scrollToBottom();
  };
  return (
    <>
    <div hidden={hideMain} className="main-form-full-width">
       <TAC setShowTAC={setShowTAC} showTAC={showTAC} />
       <div className="instructions-findform-contain">
        <div hidden={hideInstructions} className={"instructions"}>
          <div className="img-mps-container">
            {
              premierImageControler(states)
            }
            
          </div>
          {/* <h2 className="subtitle-main" >{mainData.subtitle}</h2> */}
          <h4 className="subtitle-content-mainform">{states === "sas" ? "SOUTH AUSTRALIA" : states === "nsws" ? "NEW SOUTH WALES" : states === "vics"? "VICTORIA" : "N/A"} DOESN’T CARE! </h4>
          <div className="container-p-content-main">
            <p className="p-content-main"> Based on {states === "sas" ? "South Australia’s" : states === "nsws" ? "New South Wales " : states === "vics"? "Victoria’s" : "N/A"} plans to enforce a State Tax on GP clinics over the next 2 years…</p>
            <p className="p-content-main list-p-main"> <ArrowBlack/> Your chance to get a bulk-billed GP appointment will reduce by 35%.<br/><br/>
            <ArrowBlack/> Your gap fee to see a private GP will increase by an average of {states === "sas" ? "$12" : "11"} .</p>

          </div>
        </div>
        <div hidden={showFindForm} className={"form-container"}>
          <div className={"container-content"}>
            <h1 className="text-form-header">
              Concerned about how {states === "sas" ? "South Australia’s" : states === "nsws" ? "New South Wales" : states === "vics"? "Victoria’s" : "N/A"} state tax will
              impact your care?<br/> <span className="subtext-form-header"> It takes less than two minutes to have your say!</span> 
            </h1>
            {error ? (
              <Alert variant={"danger"}>
                Please fill all fields. Also, please make sure there are no
                spaces before of after your email or postcode.
              </Alert>
            ) : null}
            <Form
              name="fm-find"
              onSubmit={click}
              noValidate
              validated={validated}
            >
              <h3 className="find-her-mp-text">{mainData.firstFormLabel1}</h3>
              <div className="fields-form">
                {formFields.map((field, key) => {
                  return (
                    <Form.Group className="field" key={key}>
                      <Form.Label className="select-label">
                        {field.label}
                      </Form.Label>
                      <Form.Control
                        className="line-down"
                        id="emailInput-mainForm"
                        type={field.type}
                        placeholder={field.placeholder}
                        name={field.type}
                        onChange={handleChange}
                        plaintext="true"
                        required
                      />
                    </Form.Group>
                  );
                })}
                <Form.Group
                  style={{ textAlign: "justify" }}
                  className="field select-styles-form"
                  controlId="conditions"
                >
                  <Form.Check
                    name="conditions"
                    onClick={handleTerms}
                    required
                    label={<Link target="_blank" className="termsAndConds" href="/TAC"> {mainData.termsAndConditionsTxt}</Link>}
                  />
                </Form.Group>                
                <Form.Group className="buton-box-form">
                  <Button
                    id="findButton-mainForm"
                    type={"submit"}
                    variant={"dark"}
                    size={"lg"}
                    onClick={click}
                    className={
                      "u-full-width capitalize-style find-btn-main-form"
                    }
                  >
                    {'Get Started Today!'}
                  </Button>
                </Form.Group>
                
              </div>
              {showLoadSpin ? (
                <Loader
                  visible={showLoadSpin}
                  type="Puff"
                  color="#000000"
                  height={100}
                  width={100}
                  timeout={10000}
                />
              ) : null}
            </Form>
          </div> 
        </div>
        </div>
    </div>
        <div className={"container"} hidden={showList}>
          <div className="note-container">
            <p>{mainData.note}</p>
          </div>
          <h2>{mainData.positionName}</h2>
          <div className="representatives-container">
            {mp.length > 0 ? (
              mp.map((mps, index) => (
                <List
                  setHideInstructions={setHideInstructions}
                  setShowList={setShowList}
                  setShowEmailForm={setShowEmailForm}
                  setShowFindForm={setShowFindForm}
                  showFindForm={showFindForm}
                  emailData={emailData}
                  setEmailData={setEmailData}
                  dataUser={dataUser}
                  mps={mps}
                  clientId={clientId}
                  key={index}
                  tweet={tweet}
                />
              ))
            ) : (
              <Alert variant="danger">
                No representatives have been found with the state that has
                provided us
              </Alert>
            )}
          </div>
          <h2>{mainData.senatorLabel}</h2>
          <div className="representatives-container">
            {senator?.length > 0 ? (
              senator?.map((mps, index) => (
                <List
                  setHideInstructions={setHideInstructions}
                  setShowList={setShowList}
                  setShowEmailForm={setShowEmailForm}
                  setShowFindForm={setShowFindForm}
                  showFindForm={showFindForm}
                  emailData={emailData}
                  setEmailData={setEmailData}
                  dataUser={dataUser}
                  mps={mps}
                  clientId={clientId}
                  key={index}
                  tweet={tweet}
                />
              ))
            ) : (
              <Alert variant="danger">
                No representatives have been found with the state that has
                provided us
              </Alert>
            )}
          </div>
        </div>
        <EmailForm
          setHideInstructions={setHideInstructions}
          setShowThankYou={setShowThankYou}
          setShowFindForm={setShowFindForm}
          setShowEmailForm={setShowEmailForm}
          showEmailForm={showEmailForm}
          dataUser={dataUser}
          emailData={emailData}
          setEmailData={setEmailData}
          setDataUser={setDataUser}
          clientId={clientId}
          endpoints={endpoints}
          backendURLBase={backendURLBase}
          backendURLBaseServices={backendURLBaseServices}
          mainData={mainData}
          questions={questions}
          setQuestions={setQuestions}
          setDataQuestions={setDataQuestions}
          dataQuestions={dataQuestions}
          allDataIn={allDataIn}
          setAllDataIn={setAllDataIn}
          configurations={configurations}
        />
        <ThankYou
        setHideInstructions={setHideInstructions}
          emailData={emailData}
          setDataUser={setDataUser}
          setEmailData={setEmailData}
          setShowFindForm={setShowFindForm}
          setShowThankYou={setShowThankYou}
          clientId={clientId}
          typData={typData}
          showThankYou={showThankYou}
        />
    </>
  );
};
export default MainForm;
