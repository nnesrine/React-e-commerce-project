
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Divider from '@mui/material/Divider';
// import Stack from '@mui/material/Stack';
import Prayers from './Prayers';
import fajrPrayerImage from "./Picture/fajr-prayer.png";
import dhhrPrayerImage from "./Picture/dhhr-prayer-mosque.png";
import asrPrayerTmage from "./Picture/asr-prayer-mosque.png";
import sunsetPrayerImage from "./Picture/sunset-prayer-mosque.png";
import nightPrayerImage from "./Picture/night-prayer-mosque.png";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import "./card.css";
import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';
import "moment/dist/locale/ar-dz";
moment.locale("ar-dz");
export default  function MainContent() {
const availbleCity=[
  {
    name:"المسيلة",
    apiName:"Msila"
  },{
    name:"الجزائرالعاصمة",
    apiName:"Alger"
  },{
    name:"وهران",
    apiName:"Oran"
  }
];
const [selectedCity,setSelectedCity]=useState({
  name:"المسيلة",
  apiName:"Msila"
});

const [nextPrayerIndex, setNextPrayerIndex] = useState(2);
const [remainingTime , setRemainingTime]=useState("");
const prayersArray = [
  { key: "Fajr", displayName: "الفجر" },
  { key: "Dhuhr", displayName: "الظهر" },
  { key: "Asr", displayName: "العصر" },
  { key: "Sunset", displayName: "المغرب" },
  { key: "Isha", displayName: "العشاء" },
];
useEffect(() => {
  let interval = setInterval(() => {
    console.log("calling timer");
    setupCountdownTimer();
  }, 1000);

  const t = moment();
  setToday(t.format("MMM Do YYYY | h:mm"));

  return () => {
    clearInterval(interval);
  };



// eslint-disable-next-line react-hooks/exhaustive-deps
}, [selectedCity]);
const setupCountdownTimer = () => {
  const momentNow = moment();

  let prayerIndex = 2;

  if (
    momentNow.isAfter(moment(timings["Fajr"], "hh:mm")) &&
    momentNow.isBefore(moment(timings["Dhuhr"], "hh:mm"))
  ) {
    prayerIndex = 1;
  } else if (
    momentNow.isAfter(moment(timings["Dhuhr"], "hh:mm")) &&
    momentNow.isBefore(moment(timings["Asr"], "hh:mm"))
  ) {
    prayerIndex = 2;
  } else if (
    momentNow.isAfter(moment(timings["Asr"], "hh:mm")) &&
    momentNow.isBefore(moment(timings["Sunset"], "hh:mm"))
  ) {
    prayerIndex = 3;
  } else if (
    momentNow.isAfter(moment(timings["Sunset"], "hh:mm")) &&
    momentNow.isBefore(moment(timings["Isha"], "hh:mm"))
  ) {
    prayerIndex = 4;
  } else {
    prayerIndex = 0;
  }

  setNextPrayerIndex(prayerIndex);
let  nextPrayerObject=prayersArray[prayerIndex]
let nextPrayerTimer=timings[nextPrayerObject.key];
console.log(nextPrayerTimer);
let remainingTime=moment(nextPrayerTimer,"hh:mm").diff(momentNow);
const nextPrayerTimeMoment=moment(nextPrayerTimer,"hh:mm");
if(remainingTime <0){
  const midNight=moment("23:59:59","hh:mm:ss").diff(momentNow);
const fajrToMidNight=nextPrayerTimeMoment.diff(moment("00:00:00","hh:mm:ss"));
const totalDiff=midNight+fajrToMidNight;
remainingTime=totalDiff;
}
const durationTime=moment.duration(remainingTime);
setRemainingTime(`${durationTime.hours()}:${durationTime.minutes()}:${durationTime.seconds()}`)
console.log(durationTime.hours(),durationTime.minutes(),durationTime.seconds());};



const[today,setToday]=useState("");
  const getTimings=async()=>{
    const data=await axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${selectedCity.apiName}&country=Algeria`);
    setTimings(data.data.data.timings);
  };
  useEffect(()=>{
    const t=moment();
    setToday(t.format('MMM Do YYYY | h:mm'));
    getTimings()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCity]);
  const[timings,setTimings]=useState({
    Fajr:	"03:39",
    Dhuhr	:"12:39",
    Asr	:"16:27",
    Sunset:	"19:46",
    Isha	:"21:16"
  })
  

  const handelCityChange=(event)=>{
    const cityObject=availbleCity.find((city)=>{
      return city.apiName== event.target.value
    })
    setSelectedCity(cityObject);
  }
  return (
    <>
    <Grid container className="tajawal-extralight" >
      <Grid xs={6}>
      <div>
        <h2> {today}  </h2>
        <h1>{selectedCity.name}</h1>
      </div>
      </Grid>
      <Grid xs={6}>
      <div>
        <h2>متبقي حتى صلاة{" "}
							{prayersArray[nextPrayerIndex].displayName} </h2>
        <h1>{remainingTime}</h1>
      </div>
      </Grid>
    </Grid>
    <Divider variant="middle" component="li"  style={{borderColor:"white" , opacity:"0.1"}}/>
    <div className='stack'>
       <Prayers praye="الفجْر" time={timings.Fajr} image={fajrPrayerImage}></Prayers>
       <Prayers praye="الظُّهْر" time={timings.Dhuhr} image={dhhrPrayerImage} ></Prayers>
       <Prayers  praye="العَصر"  time={timings.Asr} image={asrPrayerTmage}></Prayers>
       <Prayers  praye="المَغرب" time={timings.Sunset} image={sunsetPrayerImage}></Prayers>
       <Prayers  praye="العِشاء" time={timings.Isha} image={nightPrayerImage} ></Prayers>
      </div >
      <Box sx={{ minWidth: 120 }}  >
      <FormControl style={{width:"200px", marginTop:"40px", direction:"ltr"}} >
        <InputLabel id="demo-simple-select-label" style={{color:"white" ,marginRight:"-20px"}} >المدينة</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="age"
          
          onChange={handelCityChange}
        >
      {availbleCity.map((city) => (
  // eslint-disable-next-line react/jsx-key
  <MenuItem value={city.apiName} >{city.name}</MenuItem>
))}
        </Select>
      </FormControl>
    </Box>
    </>
  )
}


