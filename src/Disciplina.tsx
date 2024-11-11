import "./Disciplina.css";

function Disciplina(){
    const codigo = "DCC2027";
    const nome = "Desenvolvimento Web Front-End";
    return(
        <div className="disciplina">
            <div>{codigo}</div>
            <div>{nome}</div>
        </div>
    );
}
export default Disciplina;

