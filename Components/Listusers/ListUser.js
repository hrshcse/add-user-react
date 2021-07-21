import './ListUsers.css'
function ListUser(props){
return (
   <div className="user-list">
       {props.users.map((user)=>
           <div className="user">
           <p>Name: {user.name}</p>
           <p>Age: {user.age}</p>
           </div>
       )}
    </div>
)
}

export default ListUser;