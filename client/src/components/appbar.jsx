import Button from "./buttons";
export default function Appbar() {
return(<div style={{display:'flex',justifyContent:'space-between',backgroundColor:'lightgreen'
}}>
    <h3>playTogether</h3>
    <div className="" style={{display:'flex',padding:7}}>
    <Button label="signin" path="/signin" />
    <Button label="signup" path="/signup" />
    </div>
    </div>)
}