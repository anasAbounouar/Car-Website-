<template>
  <section class="car-page c-white">
    <div
      id="landing-car"
      class="p-relative bg-cover vh-100"
      :style="{ backgroundImage: 'url(' + car.img + ')' }"
    >
      <div class="container">
        <div class="row centering">
          <div class="col-8 centering">
            <div class="bg-brand rad-10 m-3 p-3">
              <h5 class="bienvenue-text">
                Avez vous besoin de pieces pour votre
                <span class="c-wheat">{{ car.name }}</span>
                ? Bienvenue !
              </h5>
            </div>
          </div>
          <div class="col-md-8 col-sm-12">
            <img :src="this.car.items.img" alt="" class="rad-10" />
          </div>
        </div>
      </div>
    </div>
    <div id="presentation">
      <div class="container">
        <!-- {{ this.car.items }} -->
        <div class="row g-4">
          <div
            v-for="item in this.car.items"
            :key="item.id"
            class="col-sm-12 col-md-6 col-lg-4"
          >
            <div class="box">
              <a
                :href="item.img"
                target="_blank"
                class="d-flex align-items-center justify-content-center image-container"
              >
                <img :src="item.img" alt="" />
              </a>

              <div class="text-container">
                <h5 class="">{{ item.title }}</h5>
                <span class="c-black">{{ item.description }} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "car-page",
  data() {
    return {
      carName: this.$route.params.id,
      carItems: [
        {
          name: "Renault",
          img: require("@/assets/renaut-img/renault0.jpg"),
          items: [
            {
              id: 0,
              title: "Clio5",
              img: require("@/assets/renaut-img/renault1-clio5.jpg"),
              description: "  Capot Renault Clio 5",
            },
            {
              id: 1,
              title: "Clio5",
              img: require("@/assets/renaut-img/renault2.jpg"),
              description: " Parchoc nv  nadi",
            },
            {
              id: 2,
              title: "Capture ",
              img: require("@/assets/renaut-img/renault3-capture.jpg"),
              description: " renault capture nadya",
            },
            {
              id: 3,
              title: "Clio4",
              img: require("@/assets/renaut-img/renault4-clio 4.jpg"),
              description: " Renault parchoc piasa",
            },
          ],
        },
      ],
    };
  },
  computed: {
    car() {
      return this.carItems.find((element) => {
        return this.carName === element.name;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.car-page {
  #landing-car {
    img {
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: center;
      height: 100vh;
    }
  }
}
@media (min-width: 991px) {
  section {
    margin-left: var(--navbar-width);
  }
}
@media (max-width: 991px) {
  #landing-car {
    .bg-brand {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
#presentation {
  padding-top: 30px;
  .box {
    position: relative;
    height: 100%;
    border-radius: 6px;
    background: #ac8080;
    padding: 10px;
    justify-content: space-around;
    position: relative;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.16);
    overflow: hidden;
    position: relative;
    &::before {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      width: 0%;
      height: 100%;
      background-color: #2129ca6e;
      transition: 0.3s;
    }
    &:hover {
      &::before {
        width: 100%;
      }
      img {
        transform: scale(1.1);
      }
    }
    .image-container {
      height: 240px;
    }
    img {
      height: 100%;
      border-radius: 6px;
      max-width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0px auto;
      transition: 0.3s;
    }
    h5 {
      color: #ffa500;
      margin-top: 5px;
    }
    span {
      color: white;
    }
    // .text-container {
    //   position: absolute;
    //   left: 50%;
    //   bottom: 0px;
    // }
  }
}
</style>
