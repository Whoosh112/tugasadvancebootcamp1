import "../Components/cssComponents/inputbar.css";

function Username({value, onChange, error}){
    return(
    <div className="inputbar">
        <label>Username</label>
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input type="text" id="username" name="username" placeholder="Masukkan Username" value={value}
        onChange={onChange}/>
    </div>
    );
}

export default Username;