import Button from "./Button";
import Star from "../images/icon-star.svg"
import Illustration from "../images/illustration-thank-you.svg"
export default function Header({isRated, starButtonStyle, currentRate, toggleRate}) {
    if(!isRated) {
        return (
            <>
                <Button style={{...starButtonStyle, marginLeft: 0}} content={<img src={Star} alt="star" />} />
                <h1 style={{margin: "0", marginBottom: "12px"}}>How did we do?</h1>
                <p style={{margin: "0", opacity: "0.5"}}>Please let us know how we did with your support request. All feedback is appreciateed to help us improve our offering!</p>
            </>
        );
    }
    else {
        return (
            <div style={{display: "flex", flexDirection: "column"}}>
                <img style={{width: "50%", alignSelf: "center", margin: "20px 0"}} src={Illustration} alt="Illustration"/>
                <Button style={{
                                color: "hsl(25, 97%, 53%)", 
                                backgroundColor: "rgb(27, 30, 34)", 
                                border: "1px solid rgb(255,255,255)",
                                borderRadius: "999px",
                                opacity: "0.7",
                                fontWeight: 600, 
                                padding: "8px"}} 
                content={`You selected ${currentRate} out of 5`}
                toggleRate={() => toggleRate({type: 'cancelRate'})}
                />
            </div>
        );
    }
}