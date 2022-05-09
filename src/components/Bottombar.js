import Button from "./Button";

export default function Bottombar({isRated, rateButtonStyle, currentRate, toggleRate}) {
    const rates = [1,2,3,4,5];
    const buttons = rates.map((rateValue, index) => <Button 
        style={rateButtonStyle}
        key={index} 
        content={rateValue}
        toggleRate={() => toggleRate({type: 'changeRate', rate: rateValue})}
        
        />)
    if(!isRated) {
        return (
            <div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    {buttons}
                </div>
                <div style={{display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "center"}}>
                {currentRate > 0 && 
                <>
                    <p style={{margin: "0", opacity: "0.5"}}>You have chosen {currentRate} out of 5!</p> 
                    <p style={{opacity: "0.5", marginBottom: "32px"}}>Click submit if it's your final choice.</p>
                </>}
                    <Button style={{padding: "12px 42%", 
                                    backgroundColor: "hsl(25, 97%, 53%)",
                                    border: "1px solid hsl(25, 97%, 53%)",
                                    borderRadius: "24px",
                                    color: "#fff",
                                    textTransform: "uppercase"
                                    }} 
                            content="Submit" 
                            toggleRate={() => toggleRate({type: 'submitRate'})}   
                            />
                            
                </div>
            </div>
        );
    }
    else {
        return (
            <div>
                <h1 style={{margin: "0", marginTop: "20px", marginBottom: "12px", textAlign: "center"}}>Thank you!</h1>
                <p style={{margin: "0", marginBottom: "16px", textAlign: "center", opacity: "0.5"}}>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch</p>
            </div>
        );
    }
}