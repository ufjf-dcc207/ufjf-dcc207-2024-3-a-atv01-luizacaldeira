import "./Disciplina.css";

type DisciplinaProps = {
    codigo: string;
    nome: string;
}

function Disciplina(props:DisciplinaProps){
    return(
        <div className="disciplina">
            <div>{props.codigo}</div>
            <div>{props.nome}</div>
        </div>
    );
}
export default Disciplina;

