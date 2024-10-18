//1.feladat
function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    }
        
    if (year % 100 === 0) {
        return false; 
    }
       
    if (year % 4 === 0) {
        return true;
    }
        
        return false;
    }
    
//2.feladat
function seconds(time) {
    
        const [ora, perc, seconds] = time.split(':').map(Number);
        
        
        const currentSeconds = (ora * 3600) + (perc * 60) + seconds;
        
        
        const totalSecondsInADay = 24 * 3600; 
    
        
        const remainingSeconds = totalSecondsInADay - currentSeconds;
    
        return remainingSeconds; 
    }

    console.log(seconds('14:34:42')); 
//3.feladat
function cuboid(a, b, c) {
   
    if (a <= 0 || b <= 0 || c <= 0) {
        return [0, 0]; 
    }
    const felszin = 2 * (a * b + a * c + b * c);
    
   
    const terfogat = a * b * c;

   
    return [felszin, terfogat];
}


console.log(cuboid(10.4, 13.5, 8.2));
//4.feladat
function gradeCalculator(score, maximum) {
    
    if (maximum <= 0) {
        return "Nem létezik ilyen maximalis pont.";
    }

    const szazalek = (score / maximum) * 100;

    if (szazalek >= 90) {
        return 'A';
    } 
    else if (szazalek >= 80 && szazalek <= 90) {
        return 'B';
    } 
    else if (szazalek >= 70 && szazalek <= 80) {
        return 'C';
    } 
    else if (szazalek >= 60&& szazalek <= 70) {
        return 'D';
    } 
    else if (szazalek >= 50 && szazalek <= 60) {
        return 'E';
    } 
    else {
        return 'F';
    }
}
