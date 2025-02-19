import tick from '../assests/tick.png';
import not_tick from '../assests/not_tick.png';
import delete_tick from '../assests/delete.png';

export default function Todoitems({text,id,isComplete,deleteTodo,toggle}){
    return <div className="flex  items-center my-3 gap-2">
        <div onClick={()=>{toggle(id)}} className="flex flex-1 items-center cursor-pointer">
            <img src={isComplete?tick:not_tick} alt="" className="w-7"/>
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete?"line-through":""}`}>{text}</p>
        </div>
        <img onClick={()=>{deleteTodo(id)}} src={delete_tick} alt="" className="w-3.5 cursor-pointer"/>
    </div>
}