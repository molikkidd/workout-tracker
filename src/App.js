// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Workout from './Workout'

function App() {
  const exercises = {
    lowerBody: [
       {
        exercise:"squat",
        reps: 11
       },{
        exercise:"deadLift",
        reps:11
      },{
        exercise:"pushSled",
        reps: 6
      },{
        exercise: "lunges",
        reps: 11
      }
    ],
    upperBody: [
      {
      exercise:"benchPress",
      reps: 11
      },{
      exercise:"barbellCurls",
      reps: 11
      },{
      exercise:"pullUps",
      reps: 11
      },{
      exercise:"sitUps",
      reps:11,
      }
    ]
  }
  return (
    <div className="App">
      <Workout lowerBody={exercises.lowerBody} upperBody={exercises.upperBody}/>
    </div>
  );
}

export default App;
