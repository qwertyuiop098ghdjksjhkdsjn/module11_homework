export function getPercents(percent, number) {
    if (percent>=0 && percent<=100){
    return number*percent/100
    } else {
        return "incorrect"
    }
}