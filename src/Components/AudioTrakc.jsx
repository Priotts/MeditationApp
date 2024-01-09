import { PiWindThin, PiCloudRainThin, PiBirdThin, PiWaves, PiCampfireThin } from "react-icons/pi";
import { GiMeditation } from "react-icons/gi";

import birds from "../assets/birds.mp3"
import rain from "../assets/rain.mp3"
import wind from "../assets/wind.mp3"
import campfire from "../assets/campfire.mp3"
import waves from "../assets/waves.mp3"
import relaxing from "../assets/relaxing.mp3"

const AudioTracks = [{
    'img': <PiWindThin size={45} />,
    'audio': wind,
},
{
    'img': <PiCloudRainThin size={45} />,
    'audio': rain,
},
{
    'img': <PiBirdThin size={45} />,
    'audio': birds,
},
{
    'img': <PiCampfireThin size={50} />,
    'audio': campfire,
},
{
    'img': <PiWaves size={50} />,
    'audio': waves,
},
{
    'img': <GiMeditation size={50} />,
    'audio': relaxing,
},
]

export default AudioTracks