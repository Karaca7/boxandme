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
      me = document.getElementById("me");

      if (e.keyCode == "39") {
        // console.log("rigth");
        me = document.getElementById("me");
        this.position += 10;
        console.log(this.position);
        me.style = ` 
        left:${this.position}px`;
      }

      if (e.keyCode == "37") {
        me = document.getElementById("me");
        this.position -= 10;
        console.log(this.position);
        me.style = ` 
        left:${this.position}px`;
      }

      if (e.keyCode == "81") {
        console.log("q");
        me = document.getElementById("me");
        me.classList.remove("me");

        setTimeout(() => {
          me.classList.add("me2");
        }, 50);
        me.classList.remove("me2");
        me.classList.remove("me3");
        me.classList.add("me");
      }

      if (e.keyCode == "69") {
        console.log("e");
        me = document.getElementById("me");
        me.classList.remove("me");

        setTimeout(() => {
          me.classList.add("me3");
        }, 50);
        me.classList.remove("me2");
        me.classList.remove("me3");
        me.classList.add("me");
      }
    },
  },
};

Vue.createApp(APP).mount("#app");
