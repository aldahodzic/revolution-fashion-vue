<template>
  <div class="sale center">
    <div class="sale__content">
      <router-link to="/catalog" class="sale__link">
        <div class="sale__item">
          <div class="sale__text">
            <p class="sale__p">30% OFF</p>
            <h3 class="sale__heading">FOR WOMEN</h3>
          </div>
          <img src="../assets/images/sale/sale1.jpg" class="sale__img" alt="sale img" />
        </div>
      </router-link>
      <router-link to="/catalog" class="sale__link">
        <div class="sale__item">
          <div class="sale__text">
            <p class="sale__p">HOT DEAL</p>
            <h3 class="sale__heading">FOR MEN</h3>
          </div>
          <img src="../assets/images/sale/sale2.jpg" class="sale__img" alt="sale img" />
        </div>
      </router-link>
      <router-link to="/catalog" class="sale__link">
        <div class="sale__item">
          <div class="sale__text">
            <p class="sale__p">NEW ARRIVALS</p>
            <h3 class="sale__heading">FOR KIDS</h3>
          </div>
          <img src="../assets/images/sale/sale3.jpg" class="sale__img" alt="sale img" />
        </div>
      </router-link>
    </div>
    <router-link to="/catalog" class="sale__link">
      <div class="sale__item sale__item_big">
        <div class="sale__text">
          <p class="sale__p">LUXIROUS & TRENDY</p>
          <h3 class="sale__heading">ACCESORIES</h3>
        </div>
        <img src="../assets/images/sale/salebig.jpg" class="sale__img" alt="sale img" />
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Sale",
};
</script>

<style lang="scss" scoped>
.sale {
  padding-top: 64px;
  .sale__content {
    display: flex;
    gap: 30px;
    margin-bottom: 30px;
  }
  .sale__item {
    display: inline-block;
    position: relative;
    overflow: hidden;
    .sale__img {
      transition: all .2s ease;
      &:hover {
        transform: scale(1.1);
      }
    }
    .sale__text {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 1;
      transform: translate(-50%, -50%);
      &:hover + .sale__img {
        transform: scale(1.1);
      }
    }
    .sale__p {
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: #FFFFFF;
    }
    .sale__heading {
      width: 152px;
      font-weight: 700;
      font-size: 24px;
      line-height: 29px;
      text-align: center;
      color: #F16D7F;
    }
  }
}
</style>