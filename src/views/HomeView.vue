<template>
  <div class="home p-relative">
    <section class="landing">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-sm-11 col-8">
            <h4 class="c-white">
              Besoins de Pièces pour Votre Auto ? Découvrez SAM-Auto !
            </h4>
          </div>
        </div>
      </div>
    </section>
    <section class="logos-section">
      <div class="container">
        <div class="row g-4">
          <div v-for="logo in logos" :key="logo.id" class="col-md-4 col-lg-3">
            <div class="box p-20 rad-10 center-flex">
              <div
                @click="goToPage(logo.name)"
                class="d-flex align-items-center flex-d-c"
              >
                <div class="d-flex align-items-center justify-content-center">
                  <img :src="logo.img" alt="" class="img-fluid" />
                </div>
                <h3 class="btn btn-primary mt-3 rad-10">{{ logo.name }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer class="">
      <div class="sam-copywrite container">
        <div class="row c-white">
          <div class="col-md-6">
            <h5 class="ms-2 brand-name">Sam_auto</h5>
            <!-- <ul class="d-flex">
              <li><i class="fa-brands fa-whatsapp"></i></li>
              <li><i class="fa-brands fa-facebook-f"></i></li>
              <li><i class="fa-brands fa-instagram"></i></li>
            </ul> -->
            <ul class="d-flex gap-20">
              <li class="c-white whatsapp">
                <a href="https://wa.me/2120662379473"
                  ><i class="c-white fa-brands fa-whatsapp fs-25"></i
                ></a>
              </li>
              <li class="c-white facebook">
                <a href="https://www.facebook.com/biggie.small.75"
                  ><i class="c-white fa-brands fa-facebook-f fs-25"></i
                ></a>
              </li>
              <li class="c-white instagram">
                <a href="https://www.instagram.com/sam_automobil"
                  ><i class="c-white fa-brands fa-instagram fs-25"></i
                ></a>
              </li>
            </ul>
            <p class="text-left">
              La destination ultime pour les amateurs de voitures - Trouvez les
              pièces dont vous avez besoin pour donner vie à votre véhicule.
            </p>
          </div>
          <div class="col-md-6 d-flex justify-content-center">
            <div class="info d-block">
              <div class="d-flex">
                <i class="fas fa-map-marker-alt fa-fw fs-40 mr-10"></i>
                <p class="c-white">Casablanca, la feraille</p>
              </div>
              <div class="d-flex">
                <i class="far fa-clock fa-fw fs-40 mr-10"></i>
                <p class="c-white">Lundi a samedi</p>
              </div>
              <div class="d-flex">
                <i class="fas fa-phone-volume fa-fw fs-40 mr-10"></i>
                <p class="c-white">+212 6 62 37 94 73</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="c-white m-auto p-3 anas-copywrite">
        © 2023, made bye
        <a href="https://abounouar.netlify.app/"
          ><span>Abounouar Anas </span></a
        >
        ,web developer
      </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  data() {
    return {
      logos: [
        {
          id: 1,
          name: "Mercedes",
          img: require("@/assets/logos/mercedes.png"),
          href: "mercedes.php",
          show: "./img/mercedes-img/mercedes_0.png",
        },
        {
          id: 2,
          name: "BMW",
          img: require("@/assets/logos/bmw.png"),
          href: "bmw.html",
          show: "./img/",
        },
        {
          id: 3,
          name: "Volkswagen",
          img: require("@/assets/logos/volkswagen.png"),
          href: "volkswagen.html",
          show: "./img/",
        },
        {
          id: 4,
          name: "Citroen",
          img: require("@/assets/logos/citroen.png"),
          href: "citroen.html",
          show: "../img/",
        },
        {
          id: 5,
          name: "Peugot",
          img: require("@/assets/logos/peugeot.png"),
          href: "peugot.html",
          show: "./img/",
        },
        {
          id: 6,
          name: "Renault",
          img: require("@/assets/logos/renault.png"),
          href: "renault.php",
          show: "./img/renaut-img/renault0.jpg",
        },
        {
          id: 7,
          name: "Dacia",
          img: require("@/assets/logos/dacia.png"),
          href: "dacia.html",
          show: "./img/",
        },
        {
          id: 8,
          name: "Nissan",
          img: require("@/assets/logos/nissan.png"),
          href: "nissan.html",
          show: "./img/",
        },
        {
          id: 9,
          name: "Opel",
          img: require("@/assets/logos/opel.svg"),
          href: "opel.html",
          show: "./img/",
        },
      ],
    };
  },
  methods: {
    goToPage(logoId) {
      this.$router.push({ name: "car-page", params: { id: logoId } });
    },
  },
};
</script>
<style lang="scss" scoped>
.landing {
  background-image: url("@/assets/landing.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  height: 100vh;
}
</style>
<style lang="scss" scoped>
.home {
  .logos-section .box {
    cursor: pointer;
    border: 1px solid black;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.16);
    height: 100%;
    transition: 0.3s;
    background-color: #ac8080;
    .btn {
      border-radius: 6px;
      background: var(----orange-color, #e74c3c);
      border: none;
    }
    img {
      max-width: 100%;
      height: 90px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0px auto;
      transition: 0.3s;
    }
    h3 {
      // background: var(--blue-alt-color);
      color: white;
      padding: 10px;
      border-radius: 10px;
      margin-top: 20px;
      text-align: center;
      font-weight: bold;
      transition: 0.3s;
    }
    &:hover {
      @media (min-width: 991px) {
        background: white;
      }
    }
  }
  .anas-copywrite {
    margin-left: var(--navbar-width);
  }
}
footer {
  // background: rgb(148 145 138 / 30%);
  padding-top: 30px !important;
  padding-bottom: 10px !important;
  .sam-copywrite {
    background: rgb(148 145 138 / 30%);
    padding-top: 10px !important;
    padding-bottom: 10px !important;
    .info {
      margin-left: 50px;
      margin-top: 30px;

      p {
        margin: 0;
        display: flex;
        align-items: center;
      }
      i {
        transition: 0.3s;
        color: black;
      }
      > div {
        padding: 10px;
      }
    }
    .brand-name {
      color: antiquewhite;
      font-weight: bold;
      font-weight: bold;
      font-size: 24px;
    }
    ul {
      justify-content: space-around;
      li {
        padding: 12px 20px;
        border-radius: 10px;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 0%;
          border-radius: 10px;
          transition: 0.3s;
          left: 0;
          bottom: 0px;
        }
        &:hover {
          &::before {
            height: 100%;
          }
        }
        &.instagram::before {
          background-color: #5851db;
        }
        &.facebook::before {
          background-color: #0078d7;
        }
        &.whatsapp::before {
          background-color: #25d366;
        }
        i {
          position: relative;
        }
      }
    }
  }
  .anas-copywrite {
    a {
      text-decoration: underline;
    }
  }
}
@media (min-width: 991px) {
  section,
  footer {
    margin-left: var(--navbar-width);
  }
}
section,
footer {
  padding-top: 80px;
  padding-bottom: 80px;

  position: relative;
}
</style>
