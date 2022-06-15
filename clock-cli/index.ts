import * as readline from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

interface TwoDates {
    start: Date,
    end: Date
}

function getDateObjectWithInterval({ start, end }: TwoDates): Date {
    return new Date(end.getTime() - start.getTime())
}

function turnStringIntoDate(input: string): Date {
    const [hour, minutes] = input.split(":")
    const hoursInSeconds = parseInt(hour) * 60 * 60
    const minutesInSeconds = parseInt(minutes) * 60
    var x = new Date(0)
    x.setUTCSeconds(hoursInSeconds + minutesInSeconds)
    return x
}

function dateToString(date: Date): String {
    return `${date.getUTCHours()}:${date.getMinutes()}`
}

function turnInputIntoTwoDates(input: String): TwoDates {
    const [start, end] = input.split(" ").map(turnStringIntoDate)
    return { start, end }
}

const rl = readline.createInterface({ input, output });
rl.question('HH:MM HH:MM> ', (answer) => {
    const twodates = turnInputIntoTwoDates(answer)
    const interval = getDateObjectWithInterval(twodates)
    console.log(dateToString(interval))
    rl.close();
});

