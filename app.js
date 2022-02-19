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
        this.position = Ben.walkForward(this.position);
      }

      if (e.keyCode == "37") {
        this.position = Ben.walkBack(this.position);
      }

      if (e.keyCode == "81") {
        Ben.punchL();
      }

      if (e.keyCode == "69") {
        Ben.punchR();
      }
    },
  },
};

Vue.createApp(APP).mount("#app");

class Ben {
  static punchL() {
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

  static punchR() {
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

  static walkForward(position) {
    // console.log("rigth");
    me = document.getElementById("me");
    position += 10;
    console.log(this.position);
    me.style = ` 
 left:${position}px`;
    return position;
  }

  static walkBack(position) {
    me = document.getElementById("me");
    position -= 10;
    console.log(position);
    me.style = ` 
    left:${position}px`;
    return position;
  }
}
