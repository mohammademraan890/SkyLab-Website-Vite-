import { addDays, addMonths, differenceInDays, format, isBefore, isEqual, isToday, parse, subDays, subMonths } from "date-fns";
// import * as datefns from "date-fns";
const DateFormating = () => {
    const date = new Date();
    const date1 = "2021-09-01";
    const formatDate= format(date,"MMMM/dd/yyyy");
    const parseDate = parse( date1,'yyyy-MM-dd', new Date())
    console.log(formatDate,typeof formatDate);      
    console.log(parseDate)       
    console.log(addDays(formatDate, 5))

    console.log(subDays(date, 5))
    console.log(subMonths(date, 1))
    console.log(addMonths(formatDate, 1))
    console.log(isToday(date))
    console.log(differenceInDays(date , new Date(2021, 8, 1)))
    console.log(isBefore(date ,parseDate))
    console.log(isEqual(date ,parseDate))

    

  return (
    <div style={{height:"70vh", textAlign:"center", display:"flex", justifyContent:"center", alignItems:"center"}}>
        <h1>{formatDate}</h1>
    </div>
  )
}

export default DateFormating
