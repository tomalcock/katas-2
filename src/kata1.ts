export const stat = (s: string): string => {

    let range: number = 0;
    let median: number = 0;
    let mean: number = 0;

    if(s === '') {
        return ''
    }

    function Time(secondsTime: number) { 
        let hours : string = Math.trunc(secondsTime/3600).toString()
        let mins : string = Math.trunc((secondsTime - +hours*3600)/60).toString()
        let secs: string = Math.trunc(secondsTime - +hours*3600 - +mins*60).toString()

        if(hours.length === 1) {
            hours = '0' + hours
        }
        if(mins.length === 1) {
            mins = '0' + mins
        }
        if(secs.length === 1) {
            secs = '0' + secs
        }

        return hours + '|' + mins + '|' + secs;

    }

    const arrOfTimes : string[] = s.split(', ')

    const times: string[][] = arrOfTimes.map((time) => time.split('| '))

    const timesSplit: string[][] = times.map((timeArr) => timeArr[0].split('|'))

    const secsArr: number[] = timesSplit.map((timeSplit) => +timeSplit[0]*3600 + +timeSplit[1]*60 + +timeSplit[2])

    const orderedTimes: number[] = secsArr.sort((a,b) => a-b)

    range = orderedTimes[orderedTimes.length - 1] - orderedTimes[0]

    if(orderedTimes.length % 2 === 0) {
        median = (orderedTimes[(orderedTimes.length) / 2] + orderedTimes[(orderedTimes.length) / 2 - 1]) / 2
    } else{
        median = orderedTimes[(orderedTimes.length) / 2 - 0.5]
    }

    mean = orderedTimes.reduce((curr,acc) => curr + acc) / orderedTimes.length

    return 'Range: ' + Time(range) + ' Average: ' + Time(mean) + ' Median: ' + Time(median)

}