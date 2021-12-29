import Pessoa from "../../components/Pessoa";

export default function exemploTS(){
   return(
       <div>
           <Pessoa nome="Pedro" idade={10} />
           <Pessoa nome="João" />
       </div>
   ) 
}