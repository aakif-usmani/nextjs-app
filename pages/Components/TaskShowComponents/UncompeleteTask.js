// import React, { useState } from "react";


const UncompleteTask = (props) => {
    const clickhandler = (id) => {
        console.log(props.items[0])
    }
   
    //  useEffect(()=>{
    //     setlocalItems(props.items.length)
    //  },[])
    // const [taskEntered, steTaskentered] = useState("");

    // console.log(props.items)
    console.log("sdfsdfsdf");
    return (
        <div className="uncompleteTask">
            {props.items.map((item,index) => {
               
                return (<table className="uncompleteItem" key={index}><tbody>
                    <tr>
                        <td className="taskArea">
                            {item.task}
                        </td>
                        <td className="dateArea">
                            {item.date}
                        </td>
                        <td className="timeArea">
                            {item.time}
                        </td>
                        <td>
                            <button className="done-task-button" onClick={() => clickhandler(index)}>
                                task done
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>)
            }
            )}


        </div>
    )
}

export default UncompleteTask;