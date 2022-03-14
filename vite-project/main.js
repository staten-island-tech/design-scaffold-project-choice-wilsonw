import './style.css';
import {gsap} from "gsap";
const tl=gsap.timeline({delay: 0.02 });

tl.from(".title1", {opacity: 0, duration: 0.5});
