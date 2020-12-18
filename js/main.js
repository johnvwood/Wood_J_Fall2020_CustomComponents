import videoComp from "./components/videoComp.js";
import audioComp from "./components/audioComp.js";
import imageComp from "./components/imageComp.js";
import buttonComp from "./components/buttonComp.js";

(()=>{
    new Vue ({
        data: {
            activeComp: audioComp
        },

        methods: {
            setComp(comp) {
                this.activeComp = `${comp}Comp`;
            }
        },

        components: {
            audioComp,
            videoComp,
            imageComp,
            //var in quotes is the html tag, make lowercase
            "buttoncomp" : buttonComp
        }

    }).$mount(".app");
})();