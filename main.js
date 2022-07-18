// Random selector function

const getRandomNumber = (num) => {
    return Math.floor(Math.random() * num); 
}

// Excercise Arrays 

const bodyPart = ['shoulders', 'chest', 'back', 'triceps', 'biceps', 'legs']; 
//chest
const exercisesChest1 = ['BenchPress', 'Incline dumbell press', 'Alternating Dumbbell Bench Press', 'decline-dumbellpress'];
const exercisesChest2 = ['cable-flys', 'Pushups', 'Hips-Off, Single-Arm Bench Press', 'decline-benchpress']; 
//shoulders
const exercisesShoulders = ['lateral raises', 'front-raises', 'Seated Dumbbell Press', 'Incline Bench Combo L-to-Lateral Raise']; 
const exercisesShoulders2 = ['shoulder-press', 'Handstand-pushups', 'Arnold Press', 'Bent-over Reverse Fly']; 
//Back
const exercisesBack = ['backrows', 'deadlifts', 'Trap-bar deadlift', 'lat-pulldown'];
const exercisesBack2 = ['reverse-grip rows', 'Pullups', 'Barbell-row'];
//triceps
const exercisesTricep = ['tricep-pushdowns', 'skull-crushers', 'close-grip benchpress', 'Dips'];
const exercisesTricep2 = ['diamond-pushups', 'single-arm-pushdows', 'Lying Dumbbell Triceps Extension']; 
//biceps
const exercisesBicep = ['dumbel-curls', 'curls-21s', 'ez-bar preacher curl', 'curcifix curl'];
const exercisesBicep2 = ['brachialis-curls', 'spider-curls', 'clean to eccentric curl']; 
//Legs
const exercisesLegs = ['squats', 'goblin-squats', 'lunges', 'hamstring-curls'];
const exercisesLegs2 = ['leg-extensions', 'front-squats', 'romanian-deadlifts', 'hip-thrusts']; 

// functions for selecting Body-parts

 let bodyPartPick; 
const bodyPartPicker = () => {
   const bodyPart1 = bodyPart[getRandomNumber(bodyPart.length)]; 
   bodyPartPick = bodyPart1;  
    return bodyPart1;
} 



//Function for return random excersize
let ex1, ex2, ex3, ex4; 
//example: exc === chest and exc2 === chest 2.
const randExerciseNum = (exc, exc2) => {
    do{
      ex1 = exc[getRandomNumber(exc.length)]; 
      ex2 = exc[getRandomNumber(exc.length)]; 
    }while(ex1 === ex2);
    do{
      ex3 = exc2[getRandomNumber(exc2.length)]; 
      ex4 = exc2[getRandomNumber(exc2.length)]; 
    }while(ex3 === ex4); 
    return `you Should do these excersizes: ${ex1}, ${ex2}, ${ex3} and ${ex4}`; 
}






// function for selecting exercise

const ExerciseSelector = () => {
    switch(bodyPartPick) {
        case 'shoulders':
            console.log(randExerciseNum(exercisesShoulders, exercisesShoulders2)); 
          break;
        case 'chest':
            console.log(randExerciseNum(exercisesChest1, exercisesChest2)); 
          break;
        case 'triceps':
            console.log(randExerciseNum(exercisesTricep, exercisesTricep2));
          break; 
        case 'biceps': 
            console.log(randExerciseNum(exercisesBicep, exercisesBicep2));
          break; 
        case 'back': 
            console.log(randExerciseNum(exercisesBack, exercisesBack2));
          break; 
        case 'legs': 
            console.log(randExerciseNum(exercisesLegs, exercisesLegs2));
          break; 
      }
}


//sets and reps selector

let set = Math.floor(Math.random() * 4); 
let reps = Math.floor(Math.random()* 12);

// setting so that sets and reps make sense so that you dont do 1set 1rep. 

const setsAndReps = () => {
    if(set < 3){
        do{
            reps = Math.floor(Math.random()* 12); 
        }while(reps < 6); 
    }
        do{
        set = Math.floor(Math.random()* 5); 
    }while (set < 2 ); 

    return `Do ${set} sets and ${reps} reps of each excesize`; 
}


console.log(`Today you should train: ${bodyPartPicker()}`);
ExerciseSelector(); 
console.log(setsAndReps()); 