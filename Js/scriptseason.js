const currentMonth = new Date().getMonth();
let currentSeason = 0;

if (currentMonth == 0 || currentMonth == 1 || currentMonth == 2) {
    currentSeason = 3;
} else if (currentMonth == 3 || currentMonth == 4 || currentMonth == 5) {
    currentSeason = 0;
} else if (currentMonth == 6 || currentMonth == 7 || currentMonth == 8) {
    currentSeason = 1;
} else {
    currentSeason = 1;
}

const seasonColors = [
    'rgb(0, 128, 0)',   
    'rgb(240, 240, 42)', 
    'rgb(255, 165, 0)',  
    'rgb(0, 0, 255)'    
];

const seasonDarkColors = [
    '#073104',   
    '#b6b317',  
    '#4d2d03',  
    '#060744'   
];

const mainColor = seasonColors[currentSeason];
const darkColor = seasonDarkColors[currentSeason];

document.documentElement.style.setProperty('--main-color', mainColor);

document.documentElement.style.setProperty('--dark-bg-color', darkColor);
