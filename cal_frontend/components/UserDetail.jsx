export default function UserDetail(props){
    return (
        <div>
        <h2>{props.name}</h2>
        <h2>Age: {props.age}</h2>
        </div>
    );
}