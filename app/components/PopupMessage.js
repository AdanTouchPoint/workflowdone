import React from 'react'
import ArrowBlack from './ArrowBlack'
export default function PopupMessage(region) {
    const regionController = (region) =>{
        let messageToDisplay
        
        switch (region) {
          case "vics":
             messageToDisplay = customizationMessage('Victoria')
          break;
          case "sas":
             messageToDisplay = customizationMessage('Southern Australia')
          break;
          case "nsws":
             messageToDisplay = customizationMessage('New South Wales')
          break
          case "Northern Territory":
             messageToDisplay = defaultMessage('Northern Territorys')
          break
          case "Western Australia":
             messageToDisplay = defaultMessage('Western Australia')
          break
          case "Queensland":
             messageToDisplay = defaultMessage('Queensland')
          break
          case "Tasmania":
             messageToDisplay = defaultMessage('Tasmania')
          break
          case "Australian Capital Territory":
             messageToDisplay = defaultMessage('Australian Capital Territory')
          break
          default:
      
    
       
          break;
        }
        return (messageToDisplay)
      }
    
    const customizationMessage = (region) => {
        return (
        <div className="modal-content">
            <span className="modal-content-paragraph">
            Based on {region === 'Victoria' || region === 'Southern Australia' ? `${region}'s` : 'New South Wales' } to enforce a State Tax on GP clinics over the next 2 years..
            </span>
            <div className="modal-content-list">
                <div className="modal-content-list-element">
                <ArrowBlack/>
                <span className="modal-content-list-element-text">Your chance to get a <span className="semibolded">bulk-billed</span> GP appointment will <span className="semibolded">reduce by 35%</span></span>
                </div>
                <div className="modal-content-list-element">
                <ArrowBlack/>
                <span className="modal-content-list-element-text">Your gap fee to see a <span className="semibolded">private GP</span> will increase by an <span className="semibolded">average of $11</span></span>
                </div>
            </div>
                <div className="separator"></div>
                <strong className="modal-content-footer-strong-text">Concerned about how {region === 'Victoria' || region === 'Southern Australia' ? `${region}'s` : 'New South Wales' } state tax will impact your care?</strong>
                <br/>
                <span className="modal-content-footer-regular-text">Then let your local MP know about it.</span>
            </div>
        )
    }
    const defaultMessage = (region) =>{
    return(
        <div className="modal-content">
            <span className="modal-content-paragraph">
            Based on {`${region}'s`} decision to not impose a state tax on health services in the next 2 years:
            </span>
            <div className="modal-content-list">
            <div className="modal-content-list-element">
                <ArrowBlack/>
                <span className="modal-content-list-element-text">Your chance to get a <span className="semibolded">bulk-billed</span> GP is unchanged</span>
            </div>
            <div className="modal-content-list-element">
                <ArrowBlack/>
                <span className="modal-content-list-element-text">Your gap fee to see a <span className="semibolded">private GP</span> is unchanged</span>
            </div>
            </div>
            
        </div>
    )
    }
  
    
      return (
      regionController(region)
    )
  
}
