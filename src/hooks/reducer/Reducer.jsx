import { useReducer, useState } from "react"

function Reducer() {

    // const initState = {
    //     count: 0,
    // }

    // const reducer = (state, action) => {
    //     switch (action.type) {
    //         case "up": return { ...state, count: state.count + 1 }
    //         case "down": return { ...state, count: state.count - 1 }
    //         case "reset": return { ...state, count: 0 }
    //         default: return state
    //     }
    // }

    // const [count, setCount] = useState(0);

    // const [state, dispatch] = useReducer(reducer, initState);

    const initState = {
        username: "",
        email: "",
        notes: ""
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "input": return { ...state, [action.field] : action.value}
            case "reset": return {
                username: "",
                email: "",
                notes: ""
            }
            default: return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initState);

    const handleChange = (e) => {
        dispatch({
            type: "input",
            field: e.target.name,
            value: e.target.value
        })
    }

    return (
        <>
            {/* <div>{state.count}</div>
            <button onClick={(e) => {
                dispatch({ type: "up" })
            }}>up</button>
            <button onClick={(e) => {
                dispatch({ type: "down" })
            }}>down</button> */}
            <form action="">
                <label htmlFor="username">Username : </label>
                <input type="text" name="username" id="username" value={state.username} onChange={handleChange} />
                <br />
                <label htmlFor="email">Email : </label>
                <input type="text" name="email" id="email" value={state.email} onChange={handleChange} />
                <br />
                <label htmlFor="notes">Notes : </label>
                <textarea name="notes" id="notes" value={state.notes} onChange={handleChange}></textarea>
                <br />
                <input type="submit" value="send" />
                <input type="reset" value="reset" onClick={(e) => {
                    dispatch({ type: "reset" })
                }} />
            </form>
        </>
    )
}

export default Reducer