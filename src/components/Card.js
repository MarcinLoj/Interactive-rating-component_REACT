

export default function Card({children}) {

  return (
    <div style={{
        width: "100%", 
        height: "100%", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        color: "#fff",
        backgroundColor: "#000"
        }}>
        <div style={{
            width: "380px", 
            backgroundColor: "hsl(216, 12%, 12%)",
            padding: "0 32px 32px 32px",
            borderRadius: "32px"}}>
                {children}
        </div>
    </div>
  );
}