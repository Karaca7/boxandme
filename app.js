const APP = {
  data() {
    return {
      message: "hi",

      mavi: true,
      kahve: false,
      position: 600,
    };
  },
  methods: {
    keybordcatcher(e) {
      // console.log(e);
      if (e.keyCode == "39") {
        // console.log("rigth");
        me = document.getElementById("me");
        this.position += 10;
        console.log(this.position);
        me.style = ` 
        left:${this.position}px`;

        myarms = document.getElementById("arms");
        myarms.style = ` 
      left:${this.position + 50}px`;
      }

      if (e.keyCode == "37") {
        me = document.getElementById("me");
        this.position -= 10;
        console.log(this.position);
        me.style = ` 
        left:${this.position}px`;
        myarms = document.getElementById("arms");
        myarms.style = ` 
        left:${this.position + 50}px`;
      }
    },
  },
};

Vue.createApp(APP).mount("#app");
