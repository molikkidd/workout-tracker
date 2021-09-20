import React , {useState} from 'react'
// import {Table} from 'react-bootstrap'
// import Workout from './Workout';

const SquatTracker = (props) => {
    const [state, setState] = useState({
        body: props.body,
        tempBody: "",
        reps: props.reps,
        tempRep: ""

    });
          // handle Body Edit
      const setTotal = (e) => {
        e.preventDefault();
        const currentState = state.reps;
        // let totalReps = parseInt(state.tempRep) + parseInt(state.reps);
        console.log('setTotal function', currentState);

        // const newReps = state.reps <= 22 ? 0 : state.reps  + 1;
        setState({ reps: state.tempRep});
    
    } 
    // // handle Form Edit
    const handleFormatEdit = (e) => {
        e.preventDefault();
        let input = prompt('Name of Exercise');
        setState({
            body: input
        })
}

    return (
        <div>
            <div id="squatBox">
            <div >     
                {props.index}
            </div>

            <div id="formBox">
            <h4>{state.body}</h4>
                <button 
                className="btn btn-primary" 
                type="submit"
                onClick={handleFormatEdit}
                >Edit</button>
            </div>

            <div>
                <form onSubmit={setTotal}>
                    <label htmlFor="inputReps">Reps: </label>
                    <input 
                    type="input" 
                    id="inputReps" 
                    name="inputReps" 
                    placeholder={props.reps}
                    onChange={(e) => setState({ tempRep: e.target.value})}
                    ></input>
                    <button 
                    className="btn btn-primary" 
                    type="submit">ADD
                    </button>
                </form> 
            </div>
               
            <div>
                <h5>Total Reps: {state.reps}</h5>
            </div>
            </div>
        </div>

    )
}

export default SquatTracker;