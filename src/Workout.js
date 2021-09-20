// import React, {useState} from 'react';
import SquatTracker from './SquatTracker';
import UpperBodyTracker from './UpperBodyTracker';

const Workout = (props) => {

    let lowerBodyexs = props.lowerBody.map((c,i) => {
        return <SquatTracker body={c.exercise} reps={c.reps} index={i} />
    });

    let upperBodyExs = props.upperBody.map((c,i) => {
        return <UpperBodyTracker body={c.exercise} reps={c.reps} idx={i}/>
    });

    return (
        <div>
        <h1>Coming from the workout component</h1>
        <ul>
            <li>
                The goal is to do 11 reps per set,
                How many sets depends on you.
            </li>
            <li> 
                If you're having difficulty completing 
                11 reps then choose lighter weights 
                starting Off. 
            </li>
            <li>
                Always complete how many reps you set out 
                to complete.
            </li>
        </ul>
           
        {lowerBodyexs}
        {upperBodyExs}
        
        </div>
    )
}

export default Workout;