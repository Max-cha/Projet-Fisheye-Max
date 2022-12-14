class light {
    constructor() {
      this.listMedias = [];
      this.index = 0;
      this.onKeyUp();
      const next = document.querySelector(".light_next");
      next.addEventListener("click", () => {
        this.next();
      });
      const prev = document.querySelector(".light_prev");
      prev.addEventListener("click", () => {
        this.prev();
      });
      const close = document.querySelector(".light_close");
      close.addEventListener("click", () => {
        this.close();
      });
    }
  
    displayMedia() {
      const main = document.getElementById("main");
      const light = document.getElementById("light");
      const lightClose = document.querySelector(".light_close");
      main.setAttribute("aria-hidden", "true");
      light.setAttribute("aria-hidden", "false");
      lightClose.focus();
      if (this.listMedias[this.index].image) {
        const img = this.listMedias[this.index].image;
        const light = document.querySelector("#light");
        const container_img = document.querySelector(".light_container");
        const photo = document.createElement("img");
        photo.setAttribute("src", "assets/images/" + img);
        let the_title = this.listMedias[this.index].title;
        let title_photo = document.getElementById("titre_photo");
        photo.setAttribute("alt", the_title);
        title_photo.innerHTML = the_title;
        if (container_img.firstChild != null) {
          container_img.removeChild(container_img.firstChild);
        }
        container_img.appendChild(photo);
        light.style.display = "block";
      } else {
        const video = this.listMedias[this.index].video;
        const light = document.querySelector("#light");
        const container_img = document.querySelector(".light_container");
        const the_video = document.createElement("video");
        the_video.controls = true;
        const s_video = document.createElement("source");
        s_video.setAttribute("src", "assets/images/" + video);
        s_video.setAttribute("type", "video/mp4");
        the_video.appendChild(s_video);
        let the_title = this.listMedias[this.index].title;
        let title_photo = document.getElementById("titre_photo");
        title_photo.innerHTML = the_title;
        if (container_img.firstChild != null) {
          container_img.removeChild(container_img.firstChild);
        }
        container_img.appendChild(the_video);
        the_video.play();
        light.style.display = "block";
      }
    }
  
    play(position) {
      this.index = position;
    }
  
    onKeyUp() {
      document.addEventListener("keyup", (e) => {
        if (e.key === "Escape") {
          this.close();
        } else if (e.key === "ArrowRight") {
          this.next();
        } else if (e.key === "ArrowLeft") {
          this.prev();
        }
      });
    }
  
    next() {
      if (this.index >= this.listMedias.length - 1) {
        this.index = -1;
      } else {
        this.index++;
      }
      this.displayMedia();
    }
    prev() {
      if (this.index <= 0) {
        this.index = this.listMedias.length;
      } else {
        this.index--;
      }
      this.displayMedia();
    }
    close() {
      const light = document.querySelector("#light");
      light.style.display = "none";
      document.removeEventListener("keyup", this.onKeyUp);
    }
  }