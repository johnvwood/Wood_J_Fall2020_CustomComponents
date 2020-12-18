export default {
    name: "buttonComp",

    template: `
        <div class="button-wrapper">
            <button @click="loadMediaComp" data-mediatype="audio">Audio</button>
            <button @click="loadMediaComp" data-mediatype="video">Video</button>
            <button @click="loadMediaComp" data-mediatype="image">Image</button>
        </div>
    `,

    methods: {
        loadMediaComp() {
            this.$emit("setmediatype", event.target.dataset.mediatype);
        }
    }
}