<template>
  <div class="modal__cart">
    <empty-cart v-if="!cart.length" />
    <div class="modal__cart-full" v-else>
      <div class="modal__cart-item" v-for="item in cart" :key="item.id">
        <router-link :to="{ path: '/product', query: { card: item.id} }" class="modal__cart-item-img">
          <img :src="getImgUrl(item.img)" :alt="item.alt" />
        </router-link>
        <div class="modal__cart-item-info">
          <router-link :to="{ path: '/product', query: { card: item.id} }" class="modal__cart-item-title">{{ item.title }}</router-link>
          <span class="modal__cart-item-price"
            >{{ item.count }} x ${{ item.price }}</span
          >
          <span class="modal__cart-item-total"
            >{{ item.count * item.price }}$</span
          >
        </div>
        <div class="modal__cart-item-close">
          <button class="modal__cart-item-btn" @click="removeFromCart(item.id)">
            <svg
              width="20"
              height="20"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 0.630005C19.3242 0.629807 14.7533 2.01616 10.8655 4.61375C6.9776 7.21133 3.94732 10.9035 2.15783 15.2233C0.368348 19.5431 -0.0999652 24.2966 0.812115 28.8825C1.7242 33.4685 3.9757 37.681 7.28192 40.9874C10.5881 44.2937 14.8006 46.5454 19.3865 47.4577C23.9724 48.3699 28.7259 47.9018 33.0458 46.1125C37.3657 44.3232 41.0579 41.2931 43.6557 37.4053C46.2534 33.5176 47.64 28.9468 47.64 24.271C47.6401 21.1665 47.0287 18.0923 45.8408 15.2241C44.6528 12.3558 42.9115 9.74964 40.7163 7.55435C38.5211 5.35907 35.9151 3.61767 33.0468 2.42959C30.1786 1.2415 27.1045 0.630005 24 0.630005ZM33.97 31.247C34.0547 31.3316 34.1219 31.4321 34.1677 31.5427C34.2135 31.6533 34.2371 31.7718 34.2371 31.8915C34.2371 32.0112 34.2135 32.1298 34.1677 32.2403C34.1219 32.3509 34.0547 32.4514 33.97 32.536L32.27 34.236C32.1855 34.3207 32.0851 34.3878 31.9746 34.4337C31.8641 34.4795 31.7456 34.5031 31.626 34.5031C31.5064 34.5031 31.3879 34.4795 31.2774 34.4337C31.1669 34.3878 31.0665 34.3207 30.982 34.236L24 27.264L17.023 34.241C16.9385 34.3257 16.8381 34.3928 16.7276 34.4387C16.6171 34.4845 16.4986 34.5081 16.379 34.5081C16.2594 34.5081 16.1409 34.4845 16.0304 34.4387C15.9199 34.3928 15.8195 34.3257 15.735 34.241L14.035 32.541C13.9503 32.4564 13.8831 32.3559 13.8373 32.2453C13.7914 32.1348 13.7678 32.0162 13.7678 31.8965C13.7678 31.7768 13.7914 31.6583 13.8373 31.5477C13.8831 31.4371 13.9503 31.3366 14.035 31.252L21.012 24.276L14.03 17.294C13.9453 17.2094 13.8781 17.1089 13.8323 16.9983C13.7864 16.8878 13.7628 16.7692 13.7628 16.6495C13.7628 16.5298 13.7864 16.4113 13.8323 16.3007C13.8781 16.1901 13.9453 16.0896 14.03 16.005L15.735 14.305C15.8195 14.2203 15.9199 14.1532 16.0304 14.1074C16.1409 14.0615 16.2594 14.0379 16.379 14.0379C16.4986 14.0379 16.6171 14.0615 16.7276 14.1074C16.8381 14.1532 16.9385 14.2203 17.023 14.305L24 21.277L30.977 14.3C31.0615 14.2153 31.1619 14.1482 31.2724 14.1024C31.3829 14.0565 31.5014 14.0329 31.621 14.0329C31.7406 14.0329 31.8591 14.0565 31.9696 14.1024C32.0801 14.1482 32.1805 14.2153 32.265 14.3L33.965 16C34.0497 16.0846 34.1169 16.1851 34.1627 16.2957C34.2085 16.4063 34.2321 16.5248 34.2321 16.6445C34.2321 16.7642 34.2085 16.8828 34.1627 16.9933C34.1169 17.1039 34.0497 17.2044 33.965 17.289L26.988 24.266L33.97 31.247Z"
                fill="#333333"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="modal__cart-total">
        <span class="modal__cart-total-text">TOTAL:</span>
        <span class="modal__cart-total-price">{{ totalPrice }}$</span>
      </div>
      <router-link to="/cart" class="modal__cart-go">Go To Cart</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import EmptyCart from './EmptyCart.vue';

export default {
  components: { EmptyCart },
  name: "ModalCart",
  props: {
    cart: {
      type: Array,
      default: () => [],
    },
  },
  computed: mapGetters({ totalPrice: "getProductCartFullValuePrice" }),
  methods: {
    ...mapMutations(["deleteFullItemCountfromCart"]),
    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
    removeFromCart(id) {
      this.deleteFullItemCountfromCart(id);
    },
  },
};
</script>

<style lang="scss" scoped>
.modal__cart {
  width: 300px;
  padding: 20px;
  position: absolute;
  top: 60px;
  right: -60px;
  z-index: 100;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 5px 8px 0 rgba(0, 0, 0, 0.16);
  &::before {
    content: "";
    display: block;
    width: 9px;
    height: 9px;
    position: absolute;
    top: -6px;
    right: 77px;
    background-color: #ffffff;
    border-top: 1px solid #e8e8e8;
    border-left: 1px solid #e8e8e8;
    transform: rotate(45deg);
  }
  &-item {
    display: flex;
    align-items: center;
    padding: 16px 0;
    border-bottom: 1px solid #ededed;
    &:first-of-type {
      padding-top: 0;
    }
    img {
      width: 75px;
    }
    &-title {
      font-size: 12px;
      font-weight: 900;
      text-transform: uppercase;
      color: #222;
    }
    &-price {
      font-size: 12px;
      color: #f16d7f;
    }
    &-info {
      display: flex;
      flex-direction: column;
      margin-left: 14px;
      .modal__cart-item-total {
        margin-top: 25px;
        font-weight: 700;
        font-size: 20px;
        color: #f16d7f;
      }
    }
    &-close {
      margin-left: auto;
      .modal__cart-item-btn {
        svg {
          path {
            fill: #d8d8d8;
            transition: fill 0.2s ease;
          }
        }
        &:hover {
          svg {
            path {
              fill: #f16d7f;
            }
          }
        }
        &:active {
          svg {
            path {
              fill: #833a44;
            }
          }
        }
      }
    }
  }
  &-total {
    display: flex;
    justify-content: space-between;
    padding: 20px 0 30px;
    font-size: 20px;
    font-weight: 700;
    color: #222;
  }
  &-go {
    display: flex;
    justify-content: center;
    padding: 15px 0;
    font-weight: 700;
    font-size: 20px;
    border: 1px solid #f26376;
    color: #fff;
    background: #f26376;
    transition: all 0.3s ease;
  }
}
</style>
