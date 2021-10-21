// import React from "react";


const CompleteTask = (props) => {
    const _removinghandler = (index) => {
        props.removinghandler(index);
        //props.xyzremovefunction(indx);
    }
    const _reverseHandler = (index) => {
        props.reverseHandler(index);
    }
    // var id=0;
    // const [taskEntered, steTaskentered] = useState("");

    // console.log(props.items)
    return (
        <div className="uncompleteTask">
            {props.items.map((item, index) => {

                return (
                    <table className="uncompleteItem" key={index}>
                        <tbody>
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
                                    <button className="done-task-button" onClick={() => _reverseHandler(index)}>
                                        task undone
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


export default CompleteTask;